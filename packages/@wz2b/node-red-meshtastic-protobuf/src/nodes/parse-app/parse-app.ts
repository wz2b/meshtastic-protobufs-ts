import {NRTSNode} from "../../common/NRTSNode";
import {ParseAppNodeDef} from "./types";
import {NodeAPI, NodeMessage, NodeMessageInFlow} from "node-red";
import {
    AdminMessageSchema,
    Data,
    HardwareMessageSchema,
    MapReportSchema,
    MeshPacket,
    ModuleConfig_AudioConfigSchema,
    NeighborInfoSchema,
    PaxcountSchema,
    PortNum,
    PositionSchema,
    RouteDiscoverySchema,
    RoutingSchema,
    StoreAndForwardSchema,
    TelemetrySchema,
    UserSchema,
    WaypointSchema,
} from "@wz2b/meshtastic-protobuf-core";
import {fromBinary, JsonValue, Message} from "@bufbuild/protobuf";
import {MeshtasticApplicationMessage} from "../../common/messages";
import {GenMessage} from "@bufbuild/protobuf/codegenv1";


type AnyMessageSchema = GenMessage<Message, JsonValue>;
export const messageMap: Record<number, AnyMessageSchema> = {
    [PortNum.POSITION_APP]: PositionSchema,
    [PortNum.NODEINFO_APP]: UserSchema, // not NodeInfoSchema,
    [PortNum.ROUTING_APP]: RoutingSchema,
    [PortNum.MAP_REPORT_APP]: MapReportSchema,
    [PortNum.REMOTE_HARDWARE_APP]: HardwareMessageSchema,
    [PortNum.ADMIN_APP]: AdminMessageSchema,
    [PortNum.WAYPOINT_APP]: WaypointSchema,
    [PortNum.AUDIO_APP]: ModuleConfig_AudioConfigSchema,  // ?????
    [PortNum.PAXCOUNTER_APP]: PaxcountSchema,
    [PortNum.STORE_FORWARD_APP]: StoreAndForwardSchema,
    [PortNum.TELEMETRY_APP]: TelemetrySchema,
    [PortNum.TRACEROUTE_APP]: RouteDiscoverySchema,  // ?????
    [PortNum.NEIGHBORINFO_APP]: NeighborInfoSchema
};


interface GatewayPayloadMessage {
    gatewayId?: string;
    channelName?: string;
    // Add other properties as needed
}



class ParseAppNode extends NRTSNode {
    constructor(config: ParseAppNodeDef) {
        super(config);
        this.on('input', this.input)
    }

    private async input(
        msg: NodeMessageInFlow,
        send: (msgs: NodeMessage | Array<NodeMessage | NodeMessage[] | null>) => void,
        done: (err?: Error) => void
    ): Promise<void> {
        try {
            const payload_in = msg.payload as GatewayPayloadMessage;
            const packet = payload_in as MeshPacket;
            if (packet == null) {
                done();
            } else if (packet.payloadVariant.case != "decoded") {
                throw new Error("Can't parse packet without data");
            }

            const data = packet.payloadVariant.value as Data;


            console.log("Attempting to decode portnum", data.portnum);
            const handler = messageMap[data.portnum];


            if (handler && data.payload) {
                const parsed = fromBinary(handler, data.payload);
                const { $typeName: _ignore, ...parsedWithoutTypeName } = parsed;



                const app_message: MeshtasticApplicationMessage = {
                    _msgid: msg._msgid,
                    source: data.source|| packet.from,
                    dest: data.dest || packet.to,
                    channel: packet.channel == 8 ? 0 : packet.channel,
                    rxRssi: packet.rxRssi,
                    rxSnr: packet.rxSnr,
                    id: packet.id,
                    hopStart: packet.hopStart,
                    hopLimit: packet.hopLimit,
                    portnum: data.portnum,
                    gatewayId: payload_in.gatewayId,
                    channelName: payload_in.channelName, // fallback to packet's channelName if not set
                    contentType: parsed.$typeName, // promote the inner payload type
                    payload: parsedWithoutTypeName as Message // strip out $typeName from payload
                };
                console.log("Decoded application message:", JSON.stringify(parsed, null, 2));
                send(app_message);

            } else if ([PortNum.TEXT_MESSAGE_APP, PortNum.ALERT_APP, PortNum.REPLY_APP].includes(data.portnum)) {
                const app_message: MeshtasticApplicationMessage = {
                    _msgid: msg._msgid,
                    source: data.source|| packet.from,
                    dest: data.dest || packet.to,
                    channel: packet.channel == 8 ? 0 : packet.channel,
                    rxRssi: packet.rxRssi,
                    rxSnr: packet.rxSnr,
                    id: packet.id,
                    hopStart: packet.hopStart,
                    hopLimit: packet.hopLimit,
                    portnum: data.portnum,
                    channelName: payload_in.channelName, // fallback to packet's channelName if not set
                    gatewayId: payload_in.gatewayId,
                    contentType: "text/plain", // promote the inner payload type
                    payload:  data.toString()
                }
                console.log("Parsed text message:", app_message.payload)
                send(app_message);
            } else {
                console.log("Unsupported port number", data.portnum);
                done(Error("Unsupported port number")); // or log a warning about unsupported portnum
            }

            done();
        } catch (err) {
            console.log("Exception in ParseAppNode:", err);
            done(err instanceof Error ? err : new Error(String(err)));
        }
    }
}

// Register the node with Node-RED
module.exports = (API: NodeAPI) => {
    NRTSNode.registerType(API, "meshtastic-parse-app", ParseAppNode);
};
