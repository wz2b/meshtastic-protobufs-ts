// @generated by protoc-gen-es v2.2.5 with parameter "target=js+dts,import_extension=js"
// @generated from file meshtastic/module_config.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file meshtastic/module_config.proto.
 */
export const file_meshtastic_module_config = /*@__PURE__*/
  fileDesc("Ch5tZXNodGFzdGljL21vZHVsZV9jb25maWcucHJvdG8SCm1lc2h0YXN0aWMitCUKDE1vZHVsZUNvbmZpZxIzCgRtcXR0GAEgASgLMiMubWVzaHRhc3RpYy5Nb2R1bGVDb25maWcuTVFUVENvbmZpZ0gAEjcKBnNlcmlhbBgCIAEoCzIlLm1lc2h0YXN0aWMuTW9kdWxlQ29uZmlnLlNlcmlhbENvbmZpZ0gAElQKFWV4dGVybmFsX25vdGlmaWNhdGlvbhgDIAEoCzIzLm1lc2h0YXN0aWMuTW9kdWxlQ29uZmlnLkV4dGVybmFsTm90aWZpY2F0aW9uQ29uZmlnSAASRAoNc3RvcmVfZm9yd2FyZBgEIAEoCzIrLm1lc2h0YXN0aWMuTW9kdWxlQ29uZmlnLlN0b3JlRm9yd2FyZENvbmZpZ0gAEj4KCnJhbmdlX3Rlc3QYBSABKAsyKC5tZXNodGFzdGljLk1vZHVsZUNvbmZpZy5SYW5nZVRlc3RDb25maWdIABI9Cgl0ZWxlbWV0cnkYBiABKAsyKC5tZXNodGFzdGljLk1vZHVsZUNvbmZpZy5UZWxlbWV0cnlDb25maWdIABJGCg5jYW5uZWRfbWVzc2FnZRgHIAEoCzIsLm1lc2h0YXN0aWMuTW9kdWxlQ29uZmlnLkNhbm5lZE1lc3NhZ2VDb25maWdIABI1CgVhdWRpbxgIIAEoCzIkLm1lc2h0YXN0aWMuTW9kdWxlQ29uZmlnLkF1ZGlvQ29uZmlnSAASSAoPcmVtb3RlX2hhcmR3YXJlGAkgASgLMi0ubWVzaHRhc3RpYy5Nb2R1bGVDb25maWcuUmVtb3RlSGFyZHdhcmVDb25maWdIABJECg1uZWlnaGJvcl9pbmZvGAogASgLMisubWVzaHRhc3RpYy5Nb2R1bGVDb25maWcuTmVpZ2hib3JJbmZvQ29uZmlnSAASSgoQYW1iaWVudF9saWdodGluZxgLIAEoCzIuLm1lc2h0YXN0aWMuTW9kdWxlQ29uZmlnLkFtYmllbnRMaWdodGluZ0NvbmZpZ0gAEkoKEGRldGVjdGlvbl9zZW5zb3IYDCABKAsyLi5tZXNodGFzdGljLk1vZHVsZUNvbmZpZy5EZXRlY3Rpb25TZW5zb3JDb25maWdIABI/CgpwYXhjb3VudGVyGA0gASgLMikubWVzaHRhc3RpYy5Nb2R1bGVDb25maWcuUGF4Y291bnRlckNvbmZpZ0gAGrACCgpNUVRUQ29uZmlnEg8KB2VuYWJsZWQYASABKAgSDwoHYWRkcmVzcxgCIAEoCRIQCgh1c2VybmFtZRgDIAEoCRIQCghwYXNzd29yZBgEIAEoCRIaChJlbmNyeXB0aW9uX2VuYWJsZWQYBSABKAgSFAoManNvbl9lbmFibGVkGAYgASgIEhMKC3Rsc19lbmFibGVkGAcgASgIEgwKBHJvb3QYCCABKAkSHwoXcHJveHlfdG9fY2xpZW50X2VuYWJsZWQYCSABKAgSHQoVbWFwX3JlcG9ydGluZ19lbmFibGVkGAogASgIEkcKE21hcF9yZXBvcnRfc2V0dGluZ3MYCyABKAsyKi5tZXNodGFzdGljLk1vZHVsZUNvbmZpZy5NYXBSZXBvcnRTZXR0aW5ncxpOChFNYXBSZXBvcnRTZXR0aW5ncxIdChVwdWJsaXNoX2ludGVydmFsX3NlY3MYASABKA0SGgoScG9zaXRpb25fcHJlY2lzaW9uGAIgASgNGoIBChRSZW1vdGVIYXJkd2FyZUNvbmZpZxIPCgdlbmFibGVkGAEgASgIEiIKGmFsbG93X3VuZGVmaW5lZF9waW5fYWNjZXNzGAIgASgIEjUKDmF2YWlsYWJsZV9waW5zGAMgAygLMh0ubWVzaHRhc3RpYy5SZW1vdGVIYXJkd2FyZVBpbhpaChJOZWlnaGJvckluZm9Db25maWcSDwoHZW5hYmxlZBgBIAEoCBIXCg91cGRhdGVfaW50ZXJ2YWwYAiABKA0SGgoSdHJhbnNtaXRfb3Zlcl9sb3JhGAMgASgIGpcDChVEZXRlY3Rpb25TZW5zb3JDb25maWcSDwoHZW5hYmxlZBgBIAEoCBIeChZtaW5pbXVtX2Jyb2FkY2FzdF9zZWNzGAIgASgNEhwKFHN0YXRlX2Jyb2FkY2FzdF9zZWNzGAMgASgNEhEKCXNlbmRfYmVsbBgEIAEoCBIMCgRuYW1lGAUgASgJEhMKC21vbml0b3JfcGluGAYgASgNEloKFmRldGVjdGlvbl90cmlnZ2VyX3R5cGUYByABKA4yOi5tZXNodGFzdGljLk1vZHVsZUNvbmZpZy5EZXRlY3Rpb25TZW5zb3JDb25maWcuVHJpZ2dlclR5cGUSEgoKdXNlX3B1bGx1cBgIIAEoCCKIAQoLVHJpZ2dlclR5cGUSDQoJTE9HSUNfTE9XEAASDgoKTE9HSUNfSElHSBABEhAKDEZBTExJTkdfRURHRRACEg8KC1JJU0lOR19FREdFEAMSGgoWRUlUSEVSX0VER0VfQUNUSVZFX0xPVxAEEhsKF0VJVEhFUl9FREdFX0FDVElWRV9ISUdIEAUa5AIKC0F1ZGlvQ29uZmlnEhYKDmNvZGVjMl9lbmFibGVkGAEgASgIEg8KB3B0dF9waW4YAiABKA0SQAoHYml0cmF0ZRgDIAEoDjIvLm1lc2h0YXN0aWMuTW9kdWxlQ29uZmlnLkF1ZGlvQ29uZmlnLkF1ZGlvX0JhdWQSDgoGaTJzX3dzGAQgASgNEg4KBmkyc19zZBgFIAEoDRIPCgdpMnNfZGluGAYgASgNEg8KB2kyc19zY2sYByABKA0ipwEKCkF1ZGlvX0JhdWQSEgoOQ09ERUMyX0RFRkFVTFQQABIPCgtDT0RFQzJfMzIwMBABEg8KC0NPREVDMl8yNDAwEAISDwoLQ09ERUMyXzE2MDAQAxIPCgtDT0RFQzJfMTQwMBAEEg8KC0NPREVDMl8xMzAwEAUSDwoLQ09ERUMyXzEyMDAQBhIOCgpDT0RFQzJfNzAwEAcSDwoLQ09ERUMyXzcwMEIQCBp2ChBQYXhjb3VudGVyQ29uZmlnEg8KB2VuYWJsZWQYASABKAgSIgoacGF4Y291bnRlcl91cGRhdGVfaW50ZXJ2YWwYAiABKA0SFgoOd2lmaV90aHJlc2hvbGQYAyABKAUSFQoNYmxlX3RocmVzaG9sZBgEIAEoBRruBAoMU2VyaWFsQ29uZmlnEg8KB2VuYWJsZWQYASABKAgSDAoEZWNobxgCIAEoCBILCgNyeGQYAyABKA0SCwoDdHhkGAQgASgNEj8KBGJhdWQYBSABKA4yMS5tZXNodGFzdGljLk1vZHVsZUNvbmZpZy5TZXJpYWxDb25maWcuU2VyaWFsX0JhdWQSDwoHdGltZW91dBgGIAEoDRI/CgRtb2RlGAcgASgOMjEubWVzaHRhc3RpYy5Nb2R1bGVDb25maWcuU2VyaWFsQ29uZmlnLlNlcmlhbF9Nb2RlEiQKHG92ZXJyaWRlX2NvbnNvbGVfc2VyaWFsX3BvcnQYCCABKAgiigIKC1NlcmlhbF9CYXVkEhAKDEJBVURfREVGQVVMVBAAEgwKCEJBVURfMTEwEAESDAoIQkFVRF8zMDAQAhIMCghCQVVEXzYwMBADEg0KCUJBVURfMTIwMBAEEg0KCUJBVURfMjQwMBAFEg0KCUJBVURfNDgwMBAGEg0KCUJBVURfOTYwMBAHEg4KCkJBVURfMTkyMDAQCBIOCgpCQVVEXzM4NDAwEAkSDgoKQkFVRF81NzYwMBAKEg8KC0JBVURfMTE1MjAwEAsSDwoLQkFVRF8yMzA0MDAQDBIPCgtCQVVEXzQ2MDgwMBANEg8KC0JBVURfNTc2MDAwEA4SDwoLQkFVRF85MjE2MDAQDyJfCgtTZXJpYWxfTW9kZRILCgdERUZBVUxUEAASCgoGU0lNUExFEAESCQoFUFJPVE8QAhILCgdURVhUTVNHEAMSCAoETk1FQRAEEgsKB0NBTFRPUE8QBRIICgRXUzg1EAYa6QIKGkV4dGVybmFsTm90aWZpY2F0aW9uQ29uZmlnEg8KB2VuYWJsZWQYASABKAgSEQoJb3V0cHV0X21zGAIgASgNEg4KBm91dHB1dBgDIAEoDRIUCgxvdXRwdXRfdmlicmEYCCABKA0SFQoNb3V0cHV0X2J1enplchgJIAEoDRIOCgZhY3RpdmUYBCABKAgSFQoNYWxlcnRfbWVzc2FnZRgFIAEoCBIbChNhbGVydF9tZXNzYWdlX3ZpYnJhGAogASgIEhwKFGFsZXJ0X21lc3NhZ2VfYnV6emVyGAsgASgIEhIKCmFsZXJ0X2JlbGwYBiABKAgSGAoQYWxlcnRfYmVsbF92aWJyYRgMIAEoCBIZChFhbGVydF9iZWxsX2J1enplchgNIAEoCBIPCgd1c2VfcHdtGAcgASgIEhMKC25hZ190aW1lb3V0GA4gASgNEhkKEXVzZV9pMnNfYXNfYnV6emVyGA8gASgIGpcBChJTdG9yZUZvcndhcmRDb25maWcSDwoHZW5hYmxlZBgBIAEoCBIRCgloZWFydGJlYXQYAiABKAgSDwoHcmVjb3JkcxgDIAEoDRIaChJoaXN0b3J5X3JldHVybl9tYXgYBCABKA0SHQoVaGlzdG9yeV9yZXR1cm5fd2luZG93GAUgASgNEhEKCWlzX3NlcnZlchgGIAEoCBpACg9SYW5nZVRlc3RDb25maWcSDwoHZW5hYmxlZBgBIAEoCBIOCgZzZW5kZXIYAiABKA0SDAoEc2F2ZRgDIAEoCBrJAwoPVGVsZW1ldHJ5Q29uZmlnEh4KFmRldmljZV91cGRhdGVfaW50ZXJ2YWwYASABKA0SIwobZW52aXJvbm1lbnRfdXBkYXRlX2ludGVydmFsGAIgASgNEicKH2Vudmlyb25tZW50X21lYXN1cmVtZW50X2VuYWJsZWQYAyABKAgSIgoaZW52aXJvbm1lbnRfc2NyZWVuX2VuYWJsZWQYBCABKAgSJgoeZW52aXJvbm1lbnRfZGlzcGxheV9mYWhyZW5oZWl0GAUgASgIEhsKE2Fpcl9xdWFsaXR5X2VuYWJsZWQYBiABKAgSHAoUYWlyX3F1YWxpdHlfaW50ZXJ2YWwYByABKA0SIQoZcG93ZXJfbWVhc3VyZW1lbnRfZW5hYmxlZBgIIAEoCBIdChVwb3dlcl91cGRhdGVfaW50ZXJ2YWwYCSABKA0SHAoUcG93ZXJfc2NyZWVuX2VuYWJsZWQYCiABKAgSIgoaaGVhbHRoX21lYXN1cmVtZW50X2VuYWJsZWQYCyABKAgSHgoWaGVhbHRoX3VwZGF0ZV9pbnRlcnZhbBgMIAEoDRIdChVoZWFsdGhfc2NyZWVuX2VuYWJsZWQYDSABKAga1gQKE0Nhbm5lZE1lc3NhZ2VDb25maWcSFwoPcm90YXJ5MV9lbmFibGVkGAEgASgIEhkKEWlucHV0YnJva2VyX3Bpbl9hGAIgASgNEhkKEWlucHV0YnJva2VyX3Bpbl9iGAMgASgNEh0KFWlucHV0YnJva2VyX3Bpbl9wcmVzcxgEIAEoDRJZChRpbnB1dGJyb2tlcl9ldmVudF9jdxgFIAEoDjI7Lm1lc2h0YXN0aWMuTW9kdWxlQ29uZmlnLkNhbm5lZE1lc3NhZ2VDb25maWcuSW5wdXRFdmVudENoYXISWgoVaW5wdXRicm9rZXJfZXZlbnRfY2N3GAYgASgOMjsubWVzaHRhc3RpYy5Nb2R1bGVDb25maWcuQ2FubmVkTWVzc2FnZUNvbmZpZy5JbnB1dEV2ZW50Q2hhchJcChdpbnB1dGJyb2tlcl9ldmVudF9wcmVzcxgHIAEoDjI7Lm1lc2h0YXN0aWMuTW9kdWxlQ29uZmlnLkNhbm5lZE1lc3NhZ2VDb25maWcuSW5wdXRFdmVudENoYXISFwoPdXBkb3duMV9lbmFibGVkGAggASgIEg8KB2VuYWJsZWQYCSABKAgSGgoSYWxsb3dfaW5wdXRfc291cmNlGAogASgJEhEKCXNlbmRfYmVsbBgLIAEoCCJjCg5JbnB1dEV2ZW50Q2hhchIICgROT05FEAASBgoCVVAQERIICgRET1dOEBISCAoETEVGVBATEgkKBVJJR0hUEBQSCgoGU0VMRUNUEAoSCAoEQkFDSxAbEgoKBkNBTkNFTBAYGmUKFUFtYmllbnRMaWdodGluZ0NvbmZpZxIRCglsZWRfc3RhdGUYASABKAgSDwoHY3VycmVudBgCIAEoDRILCgNyZWQYAyABKA0SDQoFZ3JlZW4YBCABKA0SDAoEYmx1ZRgFIAEoDUIRCg9wYXlsb2FkX3ZhcmlhbnQiZAoRUmVtb3RlSGFyZHdhcmVQaW4SEAoIZ3Bpb19waW4YASABKA0SDAoEbmFtZRgCIAEoCRIvCgR0eXBlGAMgASgOMiEubWVzaHRhc3RpYy5SZW1vdGVIYXJkd2FyZVBpblR5cGUqSQoVUmVtb3RlSGFyZHdhcmVQaW5UeXBlEgsKB1VOS05PV04QABIQCgxESUdJVEFMX1JFQUQQARIRCg1ESUdJVEFMX1dSSVRFEAJCZwoTY29tLmdlZWtzdmlsbGUubWVzaEISTW9kdWxlQ29uZmlnUHJvdG9zWiJnaXRodWIuY29tL21lc2h0YXN0aWMvZ28vZ2VuZXJhdGVkqgIUTWVzaHRhc3RpYy5Qcm90b2J1ZnO6AgBiBnByb3RvMw");

/**
 * Describes the message meshtastic.ModuleConfig.
 * Use `create(ModuleConfigSchema)` to create a new message.
 */
export const ModuleConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0);

/**
 * Describes the message meshtastic.ModuleConfig.MQTTConfig.
 * Use `create(ModuleConfig_MQTTConfigSchema)` to create a new message.
 */
export const ModuleConfig_MQTTConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 0);

/**
 * Describes the message meshtastic.ModuleConfig.MapReportSettings.
 * Use `create(ModuleConfig_MapReportSettingsSchema)` to create a new message.
 */
export const ModuleConfig_MapReportSettingsSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 1);

/**
 * Describes the message meshtastic.ModuleConfig.RemoteHardwareConfig.
 * Use `create(ModuleConfig_RemoteHardwareConfigSchema)` to create a new message.
 */
export const ModuleConfig_RemoteHardwareConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 2);

/**
 * Describes the message meshtastic.ModuleConfig.NeighborInfoConfig.
 * Use `create(ModuleConfig_NeighborInfoConfigSchema)` to create a new message.
 */
export const ModuleConfig_NeighborInfoConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 3);

/**
 * Describes the message meshtastic.ModuleConfig.DetectionSensorConfig.
 * Use `create(ModuleConfig_DetectionSensorConfigSchema)` to create a new message.
 */
export const ModuleConfig_DetectionSensorConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 4);

/**
 * Describes the enum meshtastic.ModuleConfig.DetectionSensorConfig.TriggerType.
 */
export const ModuleConfig_DetectionSensorConfig_TriggerTypeSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_module_config, 0, 4, 0);

/**
 * @generated from enum meshtastic.ModuleConfig.DetectionSensorConfig.TriggerType
 */
export const ModuleConfig_DetectionSensorConfig_TriggerType = /*@__PURE__*/
  tsEnum(ModuleConfig_DetectionSensorConfig_TriggerTypeSchema);

/**
 * Describes the message meshtastic.ModuleConfig.AudioConfig.
 * Use `create(ModuleConfig_AudioConfigSchema)` to create a new message.
 */
export const ModuleConfig_AudioConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 5);

/**
 * Describes the enum meshtastic.ModuleConfig.AudioConfig.Audio_Baud.
 */
export const ModuleConfig_AudioConfig_Audio_BaudSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_module_config, 0, 5, 0);

/**
 *
 * Baudrate for codec2 voice
 *
 * @generated from enum meshtastic.ModuleConfig.AudioConfig.Audio_Baud
 */
export const ModuleConfig_AudioConfig_Audio_Baud = /*@__PURE__*/
  tsEnum(ModuleConfig_AudioConfig_Audio_BaudSchema);

/**
 * Describes the message meshtastic.ModuleConfig.PaxcounterConfig.
 * Use `create(ModuleConfig_PaxcounterConfigSchema)` to create a new message.
 */
export const ModuleConfig_PaxcounterConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 6);

/**
 * Describes the message meshtastic.ModuleConfig.SerialConfig.
 * Use `create(ModuleConfig_SerialConfigSchema)` to create a new message.
 */
export const ModuleConfig_SerialConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 7);

/**
 * Describes the enum meshtastic.ModuleConfig.SerialConfig.Serial_Baud.
 */
export const ModuleConfig_SerialConfig_Serial_BaudSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_module_config, 0, 7, 0);

/**
 *
 * TODO: REPLACE
 *
 * @generated from enum meshtastic.ModuleConfig.SerialConfig.Serial_Baud
 */
export const ModuleConfig_SerialConfig_Serial_Baud = /*@__PURE__*/
  tsEnum(ModuleConfig_SerialConfig_Serial_BaudSchema);

/**
 * Describes the enum meshtastic.ModuleConfig.SerialConfig.Serial_Mode.
 */
export const ModuleConfig_SerialConfig_Serial_ModeSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_module_config, 0, 7, 1);

/**
 *
 * TODO: REPLACE
 *
 * @generated from enum meshtastic.ModuleConfig.SerialConfig.Serial_Mode
 */
export const ModuleConfig_SerialConfig_Serial_Mode = /*@__PURE__*/
  tsEnum(ModuleConfig_SerialConfig_Serial_ModeSchema);

/**
 * Describes the message meshtastic.ModuleConfig.ExternalNotificationConfig.
 * Use `create(ModuleConfig_ExternalNotificationConfigSchema)` to create a new message.
 */
export const ModuleConfig_ExternalNotificationConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 8);

/**
 * Describes the message meshtastic.ModuleConfig.StoreForwardConfig.
 * Use `create(ModuleConfig_StoreForwardConfigSchema)` to create a new message.
 */
export const ModuleConfig_StoreForwardConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 9);

/**
 * Describes the message meshtastic.ModuleConfig.RangeTestConfig.
 * Use `create(ModuleConfig_RangeTestConfigSchema)` to create a new message.
 */
export const ModuleConfig_RangeTestConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 10);

/**
 * Describes the message meshtastic.ModuleConfig.TelemetryConfig.
 * Use `create(ModuleConfig_TelemetryConfigSchema)` to create a new message.
 */
export const ModuleConfig_TelemetryConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 11);

/**
 * Describes the message meshtastic.ModuleConfig.CannedMessageConfig.
 * Use `create(ModuleConfig_CannedMessageConfigSchema)` to create a new message.
 */
export const ModuleConfig_CannedMessageConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 12);

/**
 * Describes the enum meshtastic.ModuleConfig.CannedMessageConfig.InputEventChar.
 */
export const ModuleConfig_CannedMessageConfig_InputEventCharSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_module_config, 0, 12, 0);

/**
 *
 * TODO: REPLACE
 *
 * @generated from enum meshtastic.ModuleConfig.CannedMessageConfig.InputEventChar
 */
export const ModuleConfig_CannedMessageConfig_InputEventChar = /*@__PURE__*/
  tsEnum(ModuleConfig_CannedMessageConfig_InputEventCharSchema);

/**
 * Describes the message meshtastic.ModuleConfig.AmbientLightingConfig.
 * Use `create(ModuleConfig_AmbientLightingConfigSchema)` to create a new message.
 */
export const ModuleConfig_AmbientLightingConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 0, 13);

/**
 * Describes the message meshtastic.RemoteHardwarePin.
 * Use `create(RemoteHardwarePinSchema)` to create a new message.
 */
export const RemoteHardwarePinSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_module_config, 1);

/**
 * Describes the enum meshtastic.RemoteHardwarePinType.
 */
export const RemoteHardwarePinTypeSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_module_config, 0);

/**
 * @generated from enum meshtastic.RemoteHardwarePinType
 */
export const RemoteHardwarePinType = /*@__PURE__*/
  tsEnum(RemoteHardwarePinTypeSchema);

