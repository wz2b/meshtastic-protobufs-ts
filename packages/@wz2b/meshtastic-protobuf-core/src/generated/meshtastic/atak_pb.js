// @generated by protoc-gen-es v2.2.5 with parameter "target=js+dts,import_extension=js"
// @generated from file meshtastic/atak.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file meshtastic/atak.proto.
 */
export const file_meshtastic_atak = /*@__PURE__*/
  fileDesc("ChVtZXNodGFzdGljL2F0YWsucHJvdG8SCm1lc2h0YXN0aWMi+AEKCVRBS1BhY2tldBIVCg1pc19jb21wcmVzc2VkGAEgASgIEiQKB2NvbnRhY3QYAiABKAsyEy5tZXNodGFzdGljLkNvbnRhY3QSIAoFZ3JvdXAYAyABKAsyES5tZXNodGFzdGljLkdyb3VwEiIKBnN0YXR1cxgEIAEoCzISLm1lc2h0YXN0aWMuU3RhdHVzEh4KA3BsaRgFIAEoCzIPLm1lc2h0YXN0aWMuUExJSAASIwoEY2hhdBgGIAEoCzITLm1lc2h0YXN0aWMuR2VvQ2hhdEgAEhAKBmRldGFpbBgHIAEoDEgAQhEKD3BheWxvYWRfdmFyaWFudCJcCgdHZW9DaGF0Eg8KB21lc3NhZ2UYASABKAkSDwoCdG8YAiABKAlIAIgBARIYCgt0b19jYWxsc2lnbhgDIAEoCUgBiAEBQgUKA190b0IOCgxfdG9fY2FsbHNpZ24iTQoFR3JvdXASJAoEcm9sZRgBIAEoDjIWLm1lc2h0YXN0aWMuTWVtYmVyUm9sZRIeCgR0ZWFtGAIgASgOMhAubWVzaHRhc3RpYy5UZWFtIhkKBlN0YXR1cxIPCgdiYXR0ZXJ5GAEgASgNIjQKB0NvbnRhY3QSEAoIY2FsbHNpZ24YASABKAkSFwoPZGV2aWNlX2NhbGxzaWduGAIgASgJIl8KA1BMSRISCgpsYXRpdHVkZV9pGAEgASgPEhMKC2xvbmdpdHVkZV9pGAIgASgPEhAKCGFsdGl0dWRlGAMgASgFEg0KBXNwZWVkGAQgASgNEg4KBmNvdXJzZRgFIAEoDSrAAQoEVGVhbRIUChBVbnNwZWNpZmVkX0NvbG9yEAASCQoFV2hpdGUQARIKCgZZZWxsb3cQAhIKCgZPcmFuZ2UQAxILCgdNYWdlbnRhEAQSBwoDUmVkEAUSCgoGTWFyb29uEAYSCgoGUHVycGxlEAcSDQoJRGFya19CbHVlEAgSCAoEQmx1ZRAJEggKBEN5YW4QChIICgRUZWFsEAsSCQoFR3JlZW4QDBIOCgpEYXJrX0dyZWVuEA0SCQoFQnJvd24QDip/CgpNZW1iZXJSb2xlEg4KClVuc3BlY2lmZWQQABIOCgpUZWFtTWVtYmVyEAESDAoIVGVhbUxlYWQQAhIGCgJIURADEgoKBlNuaXBlchAEEgkKBU1lZGljEAUSEwoPRm9yd2FyZE9ic2VydmVyEAYSBwoDUlRPEAcSBgoCSzkQCEJfChNjb20uZ2Vla3N2aWxsZS5tZXNoQgpBVEFLUHJvdG9zWiJnaXRodWIuY29tL21lc2h0YXN0aWMvZ28vZ2VuZXJhdGVkqgIUTWVzaHRhc3RpYy5Qcm90b2J1ZnO6AgBiBnByb3RvMw");

/**
 * Describes the message meshtastic.TAKPacket.
 * Use `create(TAKPacketSchema)` to create a new message.
 */
export const TAKPacketSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_atak, 0);

/**
 * Describes the message meshtastic.GeoChat.
 * Use `create(GeoChatSchema)` to create a new message.
 */
export const GeoChatSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_atak, 1);

/**
 * Describes the message meshtastic.Group.
 * Use `create(GroupSchema)` to create a new message.
 */
export const GroupSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_atak, 2);

/**
 * Describes the message meshtastic.Status.
 * Use `create(StatusSchema)` to create a new message.
 */
export const StatusSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_atak, 3);

/**
 * Describes the message meshtastic.Contact.
 * Use `create(ContactSchema)` to create a new message.
 */
export const ContactSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_atak, 4);

/**
 * Describes the message meshtastic.PLI.
 * Use `create(PLISchema)` to create a new message.
 */
export const PLISchema = /*@__PURE__*/
  messageDesc(file_meshtastic_atak, 5);

/**
 * Describes the enum meshtastic.Team.
 */
export const TeamSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_atak, 0);

/**
 * @generated from enum meshtastic.Team
 */
export const Team = /*@__PURE__*/
  tsEnum(TeamSchema);

/**
 * Describes the enum meshtastic.MemberRole.
 */
export const MemberRoleSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_atak, 1);

/**
 *
 * Role of the group member
 *
 * @generated from enum meshtastic.MemberRole
 */
export const MemberRole = /*@__PURE__*/
  tsEnum(MemberRoleSchema);

