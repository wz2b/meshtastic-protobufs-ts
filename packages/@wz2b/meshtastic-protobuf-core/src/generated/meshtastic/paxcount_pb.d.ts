// @generated by protoc-gen-es v2.2.5 with parameter "target=js+dts,import_extension=js"
// @generated from file meshtastic/paxcount.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file meshtastic/paxcount.proto.
 */
export declare const file_meshtastic_paxcount: GenFile;

/**
 *
 * TODO: REPLACE
 *
 * @generated from message meshtastic.Paxcount
 */
export declare type Paxcount = Message<"meshtastic.Paxcount"> & {
  /**
   *
   * seen Wifi devices
   *
   * @generated from field: uint32 wifi = 1;
   */
  wifi: number;

  /**
   *
   * Seen BLE devices
   *
   * @generated from field: uint32 ble = 2;
   */
  ble: number;

  /**
   *
   * Uptime in seconds
   *
   * @generated from field: uint32 uptime = 3;
   */
  uptime: number;
};

/**
 * Describes the message meshtastic.Paxcount.
 * Use `create(PaxcountSchema)` to create a new message.
 */
export declare const PaxcountSchema: GenMessage<Paxcount>;

