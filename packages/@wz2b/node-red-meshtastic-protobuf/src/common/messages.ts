import {NodeMessageInFlow} from "node-red";
import {Data, Position} from "@wz2b/meshtastic-protobuf-core";

import * as crap from "@wz2b/meshtastic-protobuf-core";
import {Message} from "@bufbuild/protobuf";

export type ServiceEnvelopePayload = NodeMessageInFlow & any;

export interface DataWithBody<T extends Message = Message> extends NodeMessageInFlow {
    payload: Data;
    application: T;
}

export interface DataWithText extends NodeMessageInFlow {
    payload: Data;
    text: string;
}


export type ApplicationMessage = (NodeMessageInFlow & Omit<Data, "payload" | "$typeName">) & {
    $typeName: string | Message["$typeName"],
    payload: string | Message;
};
