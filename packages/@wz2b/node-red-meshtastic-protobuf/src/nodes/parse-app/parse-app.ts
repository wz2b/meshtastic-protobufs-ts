import {NRTSNode} from "../../common/NRTSNode";
import {ParseAppNodeDef} from "./types";
import {NodeAPI, NodeMessage, NodeMessageInFlow} from "node-red";
import {
    AdminMessageSchema,
    Data,
    HardwareMessageSchema,
    MapReportSchema,
    ModuleConfig_AudioConfigSchema,
    NeighborInfoSchema,
    NodeInfoSchema,
    PaxcountSchema,
    PortNum,
    PositionSchema,
    RouteDiscoverySchema,
    RoutingSchema,
    StoreAndForwardSchema,
    TelemetrySchema,
    WaypointSchema,
} from "@wz2b/meshtastic-protobuf-core";
import {fromBinary, JsonValue, Message} from "@bufbuild/protobuf";
import {DataWithBody, DataWithText} from "../../common/messages";
import {GenMessage} from "@bufbuild/protobuf/codegenv1";


type AnyMessageSchema = GenMessage<Message, JsonValue>;
export const messageMap: Record<number, AnyMessageSchema> = {
    [PortNum.POSITION_APP]: PositionSchema,
    [PortNum.NODEINFO_APP]: NodeInfoSchema,
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
    [PortNum.NEIGHBORINFO_APP]: NeighborInfoSchema,


    // Not listed beacuse the response is text:
    //      PortNum.TEXT_MESSAGE_APP
    //      PortNum.ALERT_APP
    //      PortNum.REPLY_APP
};


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
            const packet = msg.payload as Data;
            const handler = messageMap[packet.portnum];

            if (handler && packet.payload) {
                const decoded = fromBinary(handler, packet.payload);
                (msg as DataWithBody).application = decoded;
                send(msg);

            } else if ([PortNum.TEXT_MESSAGE_APP, PortNum.ALERT_APP, PortNum.REPLY_APP].includes(packet.portnum)) {
                (msg as DataWithText).text = packet.payload?.toString();
                send(msg);
            } else {
                done(Error("Unsupported port number")); // or log a warning about unsupported portnum
            }

            done();
        } catch (err) {
            done(err instanceof Error ? err : new Error(String(err)));
        }
    }
}

// Register the node with Node-RED
module.exports = (API: NodeAPI) => {
    NRTSNode.registerType(API, "meshtastic-parse-app", ParseAppNode);
};
