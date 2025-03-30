import {NRTSNode} from "../../common/NRTSNode";
import {DecryptPayloadNodeDef} from "./types";
import {NodeAPI, NodeMessage, NodeMessageInFlow} from "node-red";
import {decryptMeshtastic} from "../../common/decrypt";
import {fromBinary} from "@bufbuild/protobuf";
import {DataSchema, ServiceEnvelope} from "@wz2b/meshtastic-protobuf-core";


export const DEFAULT_PUBLIC_KEY = "1PG7OiApB1nwvP+rz05pAQ==";

class DecryptPayloadNode extends NRTSNode {
    constructor(config: DecryptPayloadNodeDef) {
        super(config);
        this.on('input', this.input)
    }

    private async input(
        msg: NodeMessageInFlow,
        send: (msgs: NodeMessage | Array<NodeMessage | NodeMessage[] | null>) => void,
        done: (err?: Error) => void
    ): Promise<void> {
        try {
            const payload = msg.payload as ServiceEnvelope;
            const packet = payload.packet;
            if (packet == null) {
                done();
                return;
            }

            if (packet.payloadVariant.case === "decoded") {
                // Already decoded — pass through unchanged
                send(msg);
                done();
                return;
            }

            if (packet.payloadVariant.case !== "encrypted") {
                // We can only decrypt encrypted packets
                done();
                return;
            }

            const encrypted = packet.payloadVariant.value as Uint8Array;

            const data = Buffer.from(encrypted);
            const key = Buffer.from(DEFAULT_PUBLIC_KEY, "base64");
            const decryptedBuffer = decryptMeshtastic(
                packet.from,
                packet.id,
                data,
                key);

            //  Try to decode this as a Data packet
            const decoded = fromBinary(DataSchema, decryptedBuffer);


            const newPacket = {
                ...payload.packet,
                payloadVariant: {
                    case: "decoded",
                    value: decoded
                }
            }

            send({
                ...msg,
                payload: newPacket,
            });

            done();
        } catch (err) {
            done(err instanceof Error ? err : new Error(String(err)));
        }
    }
}

// Register the node with Node-RED
module.exports = (API: NodeAPI) => {
    NRTSNode.registerType(API, "meshtastic-decrypt-payload", DecryptPayloadNode);
};
