import { Node as NodeRedNode, NodeDef } from 'node-red';

export interface DecryptPayloadOptions {
}

export interface DecryptPayloadNodeDef extends NodeDef, DecryptPayloadOptions {}


export type DecryptPayloadNode = NodeRedNode;
