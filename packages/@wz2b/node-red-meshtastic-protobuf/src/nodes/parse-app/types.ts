import { Node as NodeRedNode, NodeDef } from 'node-red';

export interface ParseAppOptions {
}

export interface ParseAppNodeDef extends NodeDef, ParseAppOptions {}


export type ParseAppNode = NodeRedNode;
