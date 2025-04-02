import { Node as NodeRedNode, NodeDef } from 'node-red';


export enum PacketTypes {
    ToRadio = "ToRadio",
    ServiceEnvelope = "ServiceEnvelope",
}

export interface WrapProtobufOpts {
    packetType: PacketTypes;

}

export interface WrapProtobufNodeDef extends NodeDef, WrapProtobufOpts {}


export type WrapProtobufNode = NodeRedNode;
