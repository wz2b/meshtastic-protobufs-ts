// @generated by protoc-gen-es v2.2.5 with parameter "target=js+dts,import_extension=js"
// @generated from file meshtastic/cannedmessages.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file meshtastic/cannedmessages.proto.
 */
export declare const file_meshtastic_cannedmessages: GenFile;

/**
 *
 * Canned message module configuration.
 *
 * @generated from message meshtastic.CannedMessageModuleConfig
 */
export declare type CannedMessageModuleConfig = Message<"meshtastic.CannedMessageModuleConfig"> & {
  /**
   *
   * Predefined messages for canned message module separated by '|' characters.
   *
   * @generated from field: string messages = 1;
   */
  messages: string;
};

/**
 * Describes the message meshtastic.CannedMessageModuleConfig.
 * Use `create(CannedMessageModuleConfigSchema)` to create a new message.
 */
export declare const CannedMessageModuleConfigSchema: GenMessage<CannedMessageModuleConfig>;

