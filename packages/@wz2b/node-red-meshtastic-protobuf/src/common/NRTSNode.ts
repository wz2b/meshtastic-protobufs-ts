import { Node as NodeRedNode, NodeAPI, NodeDef } from "node-red";

export abstract class NRTSNode {
    static API: NodeAPI;

    protected constructor(protected config: NodeDef) {
        NRTSNode.API.nodes.createNode(this as any, config);
    }

    static registerType(API: NodeAPI, type: string, superConstructor: any, opts?: any) {
        API.log.info("Registering typescript node " + type);
        NRTSNode.API = API;
        API.nodes.registerType(
            type,
            superConstructor,
            opts
        );
    }
}

// Declaration Merging
export interface NRTSNode extends NodeRedNode {}
