import {NRTSNode} from "../../common/NRTSNode";
import {ParseEnvelopeNodeDef} from "./types";
import {NodeAPI, NodeMessage, NodeMessageInFlow} from "node-red";
import {ServiceEnvelopeSchema} from "@wz2b/meshtastic-protobuf-core";
import { create, fromBinary, toJson } from "@bufbuild/protobuf";

class ParseEnvelopeNode extends NRTSNode {
    constructor(config: ParseEnvelopeNodeDef) {
        super(config);
        this.on('input', this.input)
    }

    private async input(
        msg: NodeMessageInFlow,
        send: (msgs: NodeMessage | Array<NodeMessage | NodeMessage[] | null>) => void,
        done: (err?: Error) => void
    ): Promise<void> {
        try {
            const buffer = msg.payload as Buffer;

            if (!msg.payload || !Buffer.isBuffer(msg.payload)) {
                return done(new Error("Expected payload to be a Buffer"));
            }
            const envelope = fromBinary(ServiceEnvelopeSchema, buffer);
            const jsonEnvelope = toJson(ServiceEnvelopeSchema, envelope);
            console.log("Decoded envelope:", jsonEnvelope);


            send({
                _msgid: msg._msgid,
                topic: msg.topic,
                payload: jsonEnvelope
            });
            done();
        } catch (err) {
            done(err instanceof Error ? err : new Error(String(err)));
        }
    }
}

// Register the node with Node-RED
module.exports = (API: NodeAPI) => {
    NRTSNode.registerType(API, "meshtastic-parse-envelope", ParseEnvelopeNode);
};
