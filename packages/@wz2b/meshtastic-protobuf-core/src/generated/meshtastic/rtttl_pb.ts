// @generated by protoc-gen-es v2.2.5 with parameter "target=ts,import_extension=js"
// @generated from file meshtastic/rtttl.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file meshtastic/rtttl.proto.
 */
export const file_meshtastic_rtttl: GenFile = /*@__PURE__*/
  fileDesc("ChZtZXNodGFzdGljL3J0dHRsLnByb3RvEgptZXNodGFzdGljIh8KC1JUVFRMQ29uZmlnEhAKCHJpbmd0b25lGAEgASgJQmYKE2NvbS5nZWVrc3ZpbGxlLm1lc2hCEVJUVFRMQ29uZmlnUHJvdG9zWiJnaXRodWIuY29tL21lc2h0YXN0aWMvZ28vZ2VuZXJhdGVkqgIUTWVzaHRhc3RpYy5Qcm90b2J1ZnO6AgBiBnByb3RvMw");

/**
 *
 * Canned message module configuration.
 *
 * @generated from message meshtastic.RTTTLConfig
 */
export type RTTTLConfig = Message<"meshtastic.RTTTLConfig"> & {
  /**
   *
   * Ringtone for PWM Buzzer in RTTTL Format.
   *
   * @generated from field: string ringtone = 1;
   */
  ringtone: string;
};

/**
 * Describes the message meshtastic.RTTTLConfig.
 * Use `create(RTTTLConfigSchema)` to create a new message.
 */
export const RTTTLConfigSchema: GenMessage<RTTTLConfig> = /*@__PURE__*/
  messageDesc(file_meshtastic_rtttl, 0);

