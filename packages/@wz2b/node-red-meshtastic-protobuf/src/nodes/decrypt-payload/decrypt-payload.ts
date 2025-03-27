import {NRTSNode} from "../../common/NRTSNode";
import {DecryptPayloadNodeDef} from "./types";
import {NodeAPI, NodeMessage, NodeMessageInFlow} from "node-red";
import {decryptMeshtastic} from "../../common/decrypt";
import {fromBinary} from "@bufbuild/protobuf";
import {DataSchema, MeshPacketSchema} from "@wz2b/meshtastic-protobuf-core";
import {ServiceEnvelopePayload} from "../../common/messages";
import {base64Decode} from "@bufbuild/protobuf/wire";


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
            const payload = msg.payload as ServiceEnvelopePayload;
            const encryptedB64 = payload.packet?.encrypted;


            if (typeof encryptedB64 !== "string") {
                done(new Error("Expected base64-encoded encrypted string at payload.packet.encrypted"));
                return;
            }

            const data = Buffer.from(encryptedB64, 'base64');
            const key = Buffer.from(DEFAULT_PUBLIC_KEY, "base64");
            const decryptedBuffer = decryptMeshtastic(
                payload.packet.from,
                payload.packet.id,
                data,
                key);

            //  Try to decode this as a Data packet
            const decoded = fromBinary(DataSchema, decryptedBuffer);

            send({
                ...msg,
                payload: decoded,
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
