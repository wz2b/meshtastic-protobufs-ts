import { Node as NodeRedNode, NodeDef } from 'node-red';

export interface UnpackOptions {
}

export interface UnpackNodeDef extends NodeDef, UnpackOptions {}


export type UnpackNode = NodeRedNode;
