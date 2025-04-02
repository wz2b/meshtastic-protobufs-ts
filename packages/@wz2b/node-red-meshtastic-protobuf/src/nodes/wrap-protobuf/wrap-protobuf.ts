import {NRTSNode} from "../../common/NRTSNode";
import {WrapProtobufNodeDef} from "./types";
import {NodeAPI, NodeMessage, NodeMessageInFlow} from "node-red";

class WrapProtobufNode extends NRTSNode {
    constructor(config: WrapProtobufNodeDef) {
        super(config);
        this.on('input', this.input)
    }

    private async input(
        msg: NodeMessageInFlow,
        send: (msgs: NodeMessage | Array<NodeMessage | NodeMessage[] | null>) => void,
        done: (err?: Error) => void
    ): Promise<void> {
        try {
            done();
        } catch (err: any) {
            done(err);
        }
    }
}

// Register the node with Node-RED
module.exports = (API: NodeAPI) => {
    NRTSNode.registerType(API, "meshtastic-wrap-protobuf", WrapProtobufNode);
};
