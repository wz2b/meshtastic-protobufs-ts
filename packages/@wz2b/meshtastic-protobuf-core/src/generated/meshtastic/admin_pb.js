// @generated by protoc-gen-es v2.2.5 with parameter "target=js+dts,import_extension=js"
// @generated from file meshtastic/admin.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_meshtastic_channel } from "./channel_pb.js";
import { file_meshtastic_config } from "./config_pb.js";
import { file_meshtastic_connection_status } from "./connection_status_pb.js";
import { file_meshtastic_mesh } from "./mesh_pb.js";
import { file_meshtastic_module_config } from "./module_config_pb.js";
import { file_meshtastic_device_ui } from "./device_ui_pb.js";

/**
 * Describes the file meshtastic/admin.proto.
 */
export const file_meshtastic_admin = /*@__PURE__*/
  fileDesc("ChZtZXNodGFzdGljL2FkbWluLnByb3RvEgptZXNodGFzdGljItAWCgxBZG1pbk1lc3NhZ2USFwoPc2Vzc2lvbl9wYXNza2V5GGUgASgMEh0KE2dldF9jaGFubmVsX3JlcXVlc3QYASABKA1IABIzChRnZXRfY2hhbm5lbF9yZXNwb25zZRgCIAEoCzITLm1lc2h0YXN0aWMuQ2hhbm5lbEgAEhsKEWdldF9vd25lcl9yZXF1ZXN0GAMgASgISAASLgoSZ2V0X293bmVyX3Jlc3BvbnNlGAQgASgLMhAubWVzaHRhc3RpYy5Vc2VySAASQQoSZ2V0X2NvbmZpZ19yZXF1ZXN0GAUgASgOMiMubWVzaHRhc3RpYy5BZG1pbk1lc3NhZ2UuQ29uZmlnVHlwZUgAEjEKE2dldF9jb25maWdfcmVzcG9uc2UYBiABKAsyEi5tZXNodGFzdGljLkNvbmZpZ0gAEk4KGWdldF9tb2R1bGVfY29uZmlnX3JlcXVlc3QYByABKA4yKS5tZXNodGFzdGljLkFkbWluTWVzc2FnZS5Nb2R1bGVDb25maWdUeXBlSAASPgoaZ2V0X21vZHVsZV9jb25maWdfcmVzcG9uc2UYCCABKAsyGC5tZXNodGFzdGljLk1vZHVsZUNvbmZpZ0gAEjQKKmdldF9jYW5uZWRfbWVzc2FnZV9tb2R1bGVfbWVzc2FnZXNfcmVxdWVzdBgKIAEoCEgAEjUKK2dldF9jYW5uZWRfbWVzc2FnZV9tb2R1bGVfbWVzc2FnZXNfcmVzcG9uc2UYCyABKAlIABIlChtnZXRfZGV2aWNlX21ldGFkYXRhX3JlcXVlc3QYDCABKAhIABJCChxnZXRfZGV2aWNlX21ldGFkYXRhX3Jlc3BvbnNlGA0gASgLMhoubWVzaHRhc3RpYy5EZXZpY2VNZXRhZGF0YUgAEh4KFGdldF9yaW5ndG9uZV9yZXF1ZXN0GA4gASgISAASHwoVZ2V0X3Jpbmd0b25lX3Jlc3BvbnNlGA8gASgJSAASLgokZ2V0X2RldmljZV9jb25uZWN0aW9uX3N0YXR1c19yZXF1ZXN0GBAgASgISAASUwolZ2V0X2RldmljZV9jb25uZWN0aW9uX3N0YXR1c19yZXNwb25zZRgRIAEoCzIiLm1lc2h0YXN0aWMuRGV2aWNlQ29ubmVjdGlvblN0YXR1c0gAEjEKDHNldF9oYW1fbW9kZRgSIAEoCzIZLm1lc2h0YXN0aWMuSGFtUGFyYW1ldGVyc0gAEi8KJWdldF9ub2RlX3JlbW90ZV9oYXJkd2FyZV9waW5zX3JlcXVlc3QYEyABKAhIABJcCiZnZXRfbm9kZV9yZW1vdGVfaGFyZHdhcmVfcGluc19yZXNwb25zZRgUIAEoCzIqLm1lc2h0YXN0aWMuTm9kZVJlbW90ZUhhcmR3YXJlUGluc1Jlc3BvbnNlSAASIAoWZW50ZXJfZGZ1X21vZGVfcmVxdWVzdBgVIAEoCEgAEh0KE2RlbGV0ZV9maWxlX3JlcXVlc3QYFiABKAlIABITCglzZXRfc2NhbGUYFyABKA1IABJFChJiYWNrdXBfcHJlZmVyZW5jZXMYGCABKA4yJy5tZXNodGFzdGljLkFkbWluTWVzc2FnZS5CYWNrdXBMb2NhdGlvbkgAEkYKE3Jlc3RvcmVfcHJlZmVyZW5jZXMYGSABKA4yJy5tZXNodGFzdGljLkFkbWluTWVzc2FnZS5CYWNrdXBMb2NhdGlvbkgAEkwKGXJlbW92ZV9iYWNrdXBfcHJlZmVyZW5jZXMYGiABKA4yJy5tZXNodGFzdGljLkFkbWluTWVzc2FnZS5CYWNrdXBMb2NhdGlvbkgAEiUKCXNldF9vd25lchggIAEoCzIQLm1lc2h0YXN0aWMuVXNlckgAEioKC3NldF9jaGFubmVsGCEgASgLMhMubWVzaHRhc3RpYy5DaGFubmVsSAASKAoKc2V0X2NvbmZpZxgiIAEoCzISLm1lc2h0YXN0aWMuQ29uZmlnSAASNQoRc2V0X21vZHVsZV9jb25maWcYIyABKAsyGC5tZXNodGFzdGljLk1vZHVsZUNvbmZpZ0gAEiwKInNldF9jYW5uZWRfbWVzc2FnZV9tb2R1bGVfbWVzc2FnZXMYJCABKAlIABIeChRzZXRfcmluZ3RvbmVfbWVzc2FnZRglIAEoCUgAEhsKEXJlbW92ZV9ieV9ub2RlbnVtGCYgASgNSAASGwoRc2V0X2Zhdm9yaXRlX25vZGUYJyABKA1IABIeChRyZW1vdmVfZmF2b3JpdGVfbm9kZRgoIAEoDUgAEjIKEnNldF9maXhlZF9wb3NpdGlvbhgpIAEoCzIULm1lc2h0YXN0aWMuUG9zaXRpb25IABIfChVyZW1vdmVfZml4ZWRfcG9zaXRpb24YKiABKAhIABIXCg1zZXRfdGltZV9vbmx5GCsgASgHSAASHwoVZ2V0X3VpX2NvbmZpZ19yZXF1ZXN0GCwgASgISAASPAoWZ2V0X3VpX2NvbmZpZ19yZXNwb25zZRgtIAEoCzIaLm1lc2h0YXN0aWMuRGV2aWNlVUlDb25maWdIABI1Cg9zdG9yZV91aV9jb25maWcYLiABKAsyGi5tZXNodGFzdGljLkRldmljZVVJQ29uZmlnSAASGgoQc2V0X2lnbm9yZWRfbm9kZRgvIAEoDUgAEh0KE3JlbW92ZV9pZ25vcmVkX25vZGUYMCABKA1IABIdChNiZWdpbl9lZGl0X3NldHRpbmdzGEAgASgISAASHgoUY29tbWl0X2VkaXRfc2V0dGluZ3MYQSABKAhIABIeChRmYWN0b3J5X3Jlc2V0X2RldmljZRheIAEoBUgAEhwKEnJlYm9vdF9vdGFfc2Vjb25kcxhfIAEoBUgAEhgKDmV4aXRfc2ltdWxhdG9yGGAgASgISAASGAoOcmVib290X3NlY29uZHMYYSABKAVIABIaChBzaHV0ZG93bl9zZWNvbmRzGGIgASgFSAASHgoUZmFjdG9yeV9yZXNldF9jb25maWcYYyABKAVIABIWCgxub2RlZGJfcmVzZXQYZCABKAVIACLWAQoKQ29uZmlnVHlwZRIRCg1ERVZJQ0VfQ09ORklHEAASEwoPUE9TSVRJT05fQ09ORklHEAESEAoMUE9XRVJfQ09ORklHEAISEgoOTkVUV09SS19DT05GSUcQAxISCg5ESVNQTEFZX0NPTkZJRxAEEg8KC0xPUkFfQ09ORklHEAUSFAoQQkxVRVRPT1RIX0NPTkZJRxAGEhMKD1NFQ1VSSVRZX0NPTkZJRxAHEhUKEVNFU1NJT05LRVlfQ09ORklHEAgSEwoPREVWSUNFVUlfQ09ORklHEAkiuwIKEE1vZHVsZUNvbmZpZ1R5cGUSDwoLTVFUVF9DT05GSUcQABIRCg1TRVJJQUxfQ09ORklHEAESEwoPRVhUTk9USUZfQ09ORklHEAISFwoTU1RPUkVGT1JXQVJEX0NPTkZJRxADEhQKEFJBTkdFVEVTVF9DT05GSUcQBBIUChBURUxFTUVUUllfQ09ORklHEAUSFAoQQ0FOTkVETVNHX0NPTkZJRxAGEhAKDEFVRElPX0NPTkZJRxAHEhkKFVJFTU9URUhBUkRXQVJFX0NPTkZJRxAIEhcKE05FSUdIQk9SSU5GT19DT05GSUcQCRIaChZBTUJJRU5UTElHSFRJTkdfQ09ORklHEAoSGgoWREVURUNUSU9OU0VOU09SX0NPTkZJRxALEhUKEVBBWENPVU5URVJfQ09ORklHEAwiIwoOQmFja3VwTG9jYXRpb24SCQoFRkxBU0gQABIGCgJTRBABQhEKD3BheWxvYWRfdmFyaWFudCJbCg1IYW1QYXJhbWV0ZXJzEhEKCWNhbGxfc2lnbhgBIAEoCRIQCgh0eF9wb3dlchgCIAEoBRIRCglmcmVxdWVuY3kYAyABKAISEgoKc2hvcnRfbmFtZRgEIAEoCSJmCh5Ob2RlUmVtb3RlSGFyZHdhcmVQaW5zUmVzcG9uc2USRAoZbm9kZV9yZW1vdGVfaGFyZHdhcmVfcGlucxgBIAMoCzIhLm1lc2h0YXN0aWMuTm9kZVJlbW90ZUhhcmR3YXJlUGluQmAKE2NvbS5nZWVrc3ZpbGxlLm1lc2hCC0FkbWluUHJvdG9zWiJnaXRodWIuY29tL21lc2h0YXN0aWMvZ28vZ2VuZXJhdGVkqgIUTWVzaHRhc3RpYy5Qcm90b2J1ZnO6AgBiBnByb3RvMw", [file_meshtastic_channel, file_meshtastic_config, file_meshtastic_connection_status, file_meshtastic_mesh, file_meshtastic_module_config, file_meshtastic_device_ui]);

/**
 * Describes the message meshtastic.AdminMessage.
 * Use `create(AdminMessageSchema)` to create a new message.
 */
export const AdminMessageSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_admin, 0);

/**
 * Describes the enum meshtastic.AdminMessage.ConfigType.
 */
export const AdminMessage_ConfigTypeSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_admin, 0, 0);

/**
 *
 * TODO: REPLACE
 *
 * @generated from enum meshtastic.AdminMessage.ConfigType
 */
export const AdminMessage_ConfigType = /*@__PURE__*/
  tsEnum(AdminMessage_ConfigTypeSchema);

/**
 * Describes the enum meshtastic.AdminMessage.ModuleConfigType.
 */
export const AdminMessage_ModuleConfigTypeSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_admin, 0, 1);

/**
 *
 * TODO: REPLACE
 *
 * @generated from enum meshtastic.AdminMessage.ModuleConfigType
 */
export const AdminMessage_ModuleConfigType = /*@__PURE__*/
  tsEnum(AdminMessage_ModuleConfigTypeSchema);

/**
 * Describes the enum meshtastic.AdminMessage.BackupLocation.
 */
export const AdminMessage_BackupLocationSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_admin, 0, 2);

/**
 * @generated from enum meshtastic.AdminMessage.BackupLocation
 */
export const AdminMessage_BackupLocation = /*@__PURE__*/
  tsEnum(AdminMessage_BackupLocationSchema);

/**
 * Describes the message meshtastic.HamParameters.
 * Use `create(HamParametersSchema)` to create a new message.
 */
export const HamParametersSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_admin, 1);

/**
 * Describes the message meshtastic.NodeRemoteHardwarePinsResponse.
 * Use `create(NodeRemoteHardwarePinsResponseSchema)` to create a new message.
 */
export const NodeRemoteHardwarePinsResponseSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_admin, 2);

