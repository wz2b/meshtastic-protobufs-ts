// @generated by protoc-gen-es v2.2.5 with parameter "target=ts,import_extension=js"
// @generated from file meshtastic/xmodem.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file meshtastic/xmodem.proto.
 */
export const file_meshtastic_xmodem: GenFile = /*@__PURE__*/
  fileDesc("ChdtZXNodGFzdGljL3htb2RlbS5wcm90bxIKbWVzaHRhc3RpYyK2AQoGWE1vZGVtEisKB2NvbnRyb2wYASABKA4yGi5tZXNodGFzdGljLlhNb2RlbS5Db250cm9sEgsKA3NlcRgCIAEoDRINCgVjcmMxNhgDIAEoDRIOCgZidWZmZXIYBCABKAwiUwoHQ29udHJvbBIHCgNOVUwQABIHCgNTT0gQARIHCgNTVFgQAhIHCgNFT1QQBBIHCgNBQ0sQBhIHCgNOQUsQFRIHCgNDQU4QGBIJCgVDVFJMWhAaQmEKE2NvbS5nZWVrc3ZpbGxlLm1lc2hCDFhtb2RlbVByb3Rvc1oiZ2l0aHViLmNvbS9tZXNodGFzdGljL2dvL2dlbmVyYXRlZKoCFE1lc2h0YXN0aWMuUHJvdG9idWZzugIAYgZwcm90bzM");

/**
 * @generated from message meshtastic.XModem
 */
export type XModem = Message<"meshtastic.XModem"> & {
  /**
   * @generated from field: meshtastic.XModem.Control control = 1;
   */
  control: XModem_Control;

  /**
   * @generated from field: uint32 seq = 2;
   */
  seq: number;

  /**
   * @generated from field: uint32 crc16 = 3;
   */
  crc16: number;

  /**
   * @generated from field: bytes buffer = 4;
   */
  buffer: Uint8Array;
};

/**
 * Describes the message meshtastic.XModem.
 * Use `create(XModemSchema)` to create a new message.
 */
export const XModemSchema: GenMessage<XModem> = /*@__PURE__*/
  messageDesc(file_meshtastic_xmodem, 0);

/**
 * @generated from enum meshtastic.XModem.Control
 */
export enum XModem_Control {
  /**
   * @generated from enum value: NUL = 0;
   */
  NUL = 0,

  /**
   * @generated from enum value: SOH = 1;
   */
  SOH = 1,

  /**
   * @generated from enum value: STX = 2;
   */
  STX = 2,

  /**
   * @generated from enum value: EOT = 4;
   */
  EOT = 4,

  /**
   * @generated from enum value: ACK = 6;
   */
  ACK = 6,

  /**
   * @generated from enum value: NAK = 21;
   */
  NAK = 21,

  /**
   * @generated from enum value: CAN = 24;
   */
  CAN = 24,

  /**
   * @generated from enum value: CTRLZ = 26;
   */
  CTRLZ = 26,
}

/**
 * Describes the enum meshtastic.XModem.Control.
 */
export const XModem_ControlSchema: GenEnum<XModem_Control> = /*@__PURE__*/
  enumDesc(file_meshtastic_xmodem, 0, 0);

