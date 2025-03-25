// @generated by protoc-gen-es v2.2.5 with parameter "target=js+dts,import_extension=js"
// @generated from file meshtastic/apponly.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { ChannelSettings } from "./channel_pb.js";
import type { Config_LoRaConfig } from "./config_pb.js";

/**
 * Describes the file meshtastic/apponly.proto.
 */
export declare const file_meshtastic_apponly: GenFile;

/**
 *
 * This is the most compact possible representation for a set of channels.
 * It includes only one PRIMARY channel (which must be first) and
 * any SECONDARY channels.
 * No DISABLED channels are included.
 * This abstraction is used only on the the 'app side' of the world (ie python, javascript and android etc) to show a group of Channels as a (long) URL
 *
 * @generated from message meshtastic.ChannelSet
 */
export declare type ChannelSet = Message<"meshtastic.ChannelSet"> & {
  /**
   *
   * Channel list with settings
   *
   * @generated from field: repeated meshtastic.ChannelSettings settings = 1;
   */
  settings: ChannelSettings[];

  /**
   *
   * LoRa config
   *
   * @generated from field: meshtastic.Config.LoRaConfig lora_config = 2;
   */
  loraConfig?: Config_LoRaConfig;
};

/**
 * Describes the message meshtastic.ChannelSet.
 * Use `create(ChannelSetSchema)` to create a new message.
 */
export declare const ChannelSetSchema: GenMessage<ChannelSet>;

