import { Node as NodeRedNode, NodeDef } from 'node-red';

export interface ParseEnvelopeOptions {
}

export interface ParseEnvelopeNodeDef extends NodeDef, ParseEnvelopeOptions {}


export type ParseEnvelopeNode = NodeRedNode;
