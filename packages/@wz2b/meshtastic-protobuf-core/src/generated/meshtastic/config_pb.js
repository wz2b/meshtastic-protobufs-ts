// @generated by protoc-gen-es v2.2.5 with parameter "target=js+dts,import_extension=js"
// @generated from file meshtastic/config.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";
import { file_meshtastic_device_ui } from "./device_ui_pb.js";

/**
 * Describes the file meshtastic/config.proto.
 */
export const file_meshtastic_config = /*@__PURE__*/
  fileDesc("ChdtZXNodGFzdGljL2NvbmZpZy5wcm90bxIKbWVzaHRhc3RpYyLUJgoGQ29uZmlnEjEKBmRldmljZRgBIAEoCzIfLm1lc2h0YXN0aWMuQ29uZmlnLkRldmljZUNvbmZpZ0gAEjUKCHBvc2l0aW9uGAIgASgLMiEubWVzaHRhc3RpYy5Db25maWcuUG9zaXRpb25Db25maWdIABIvCgVwb3dlchgDIAEoCzIeLm1lc2h0YXN0aWMuQ29uZmlnLlBvd2VyQ29uZmlnSAASMwoHbmV0d29yaxgEIAEoCzIgLm1lc2h0YXN0aWMuQ29uZmlnLk5ldHdvcmtDb25maWdIABIzCgdkaXNwbGF5GAUgASgLMiAubWVzaHRhc3RpYy5Db25maWcuRGlzcGxheUNvbmZpZ0gAEi0KBGxvcmEYBiABKAsyHS5tZXNodGFzdGljLkNvbmZpZy5Mb1JhQ29uZmlnSAASNwoJYmx1ZXRvb3RoGAcgASgLMiIubWVzaHRhc3RpYy5Db25maWcuQmx1ZXRvb3RoQ29uZmlnSAASNQoIc2VjdXJpdHkYCCABKAsyIS5tZXNodGFzdGljLkNvbmZpZy5TZWN1cml0eUNvbmZpZ0gAEjkKCnNlc3Npb25rZXkYCSABKAsyIy5tZXNodGFzdGljLkNvbmZpZy5TZXNzaW9ua2V5Q29uZmlnSAASLwoJZGV2aWNlX3VpGAogASgLMhoubWVzaHRhc3RpYy5EZXZpY2VVSUNvbmZpZ0gAGrUFCgxEZXZpY2VDb25maWcSMgoEcm9sZRgBIAEoDjIkLm1lc2h0YXN0aWMuQ29uZmlnLkRldmljZUNvbmZpZy5Sb2xlEhoKDnNlcmlhbF9lbmFibGVkGAIgASgIQgIYARITCgtidXR0b25fZ3BpbxgEIAEoDRITCgtidXp6ZXJfZ3BpbxgFIAEoDRJJChByZWJyb2FkY2FzdF9tb2RlGAYgASgOMi8ubWVzaHRhc3RpYy5Db25maWcuRGV2aWNlQ29uZmlnLlJlYnJvYWRjYXN0TW9kZRIgChhub2RlX2luZm9fYnJvYWRjYXN0X3NlY3MYByABKA0SIgoaZG91YmxlX3RhcF9hc19idXR0b25fcHJlc3MYCCABKAgSFgoKaXNfbWFuYWdlZBgJIAEoCEICGAESHAoUZGlzYWJsZV90cmlwbGVfY2xpY2sYCiABKAgSDQoFdHpkZWYYCyABKAkSHgoWbGVkX2hlYXJ0YmVhdF9kaXNhYmxlZBgMIAEoCCK/AQoEUm9sZRIKCgZDTElFTlQQABIPCgtDTElFTlRfTVVURRABEgoKBlJPVVRFUhACEhUKDVJPVVRFUl9DTElFTlQQAxoCCAESDAoIUkVQRUFURVIQBBILCgdUUkFDS0VSEAUSCgoGU0VOU09SEAYSBwoDVEFLEAcSEQoNQ0xJRU5UX0hJRERFThAIEhIKDkxPU1RfQU5EX0ZPVU5EEAkSDwoLVEFLX1RSQUNLRVIQChIPCgtST1VURVJfTEFURRALInMKD1JlYnJvYWRjYXN0TW9kZRIHCgNBTEwQABIVChFBTExfU0tJUF9ERUNPRElORxABEg4KCkxPQ0FMX09OTFkQAhIOCgpLTk9XTl9PTkxZEAMSCAoETk9ORRAEEhYKEkNPUkVfUE9SVE5VTVNfT05MWRAFGpEFCg5Qb3NpdGlvbkNvbmZpZxIfChdwb3NpdGlvbl9icm9hZGNhc3Rfc2VjcxgBIAEoDRIoCiBwb3NpdGlvbl9icm9hZGNhc3Rfc21hcnRfZW5hYmxlZBgCIAEoCBIWCg5maXhlZF9wb3NpdGlvbhgDIAEoCBIXCgtncHNfZW5hYmxlZBgEIAEoCEICGAESGwoTZ3BzX3VwZGF0ZV9pbnRlcnZhbBgFIAEoDRIcChBncHNfYXR0ZW1wdF90aW1lGAYgASgNQgIYARIWCg5wb3NpdGlvbl9mbGFncxgHIAEoDRIPCgdyeF9ncGlvGAggASgNEg8KB3R4X2dwaW8YCSABKA0SKAogYnJvYWRjYXN0X3NtYXJ0X21pbmltdW1fZGlzdGFuY2UYCiABKA0SLQolYnJvYWRjYXN0X3NtYXJ0X21pbmltdW1faW50ZXJ2YWxfc2VjcxgLIAEoDRITCgtncHNfZW5fZ3BpbxgMIAEoDRI7CghncHNfbW9kZRgNIAEoDjIpLm1lc2h0YXN0aWMuQ29uZmlnLlBvc2l0aW9uQ29uZmlnLkdwc01vZGUiqwEKDVBvc2l0aW9uRmxhZ3MSCQoFVU5TRVQQABIMCghBTFRJVFVERRABEhAKDEFMVElUVURFX01TTBACEhYKEkdFT0lEQUxfU0VQQVJBVElPThAEEgcKA0RPUBAIEgkKBUhWRE9QEBASDQoJU0FUSU5WSUVXECASCgoGU0VRX05PEEASDgoJVElNRVNUQU1QEIABEgwKB0hFQURJTkcQgAISCgoFU1BFRUQQgAQiNQoHR3BzTW9kZRIMCghESVNBQkxFRBAAEgsKB0VOQUJMRUQQARIPCgtOT1RfUFJFU0VOVBACGoQCCgtQb3dlckNvbmZpZxIXCg9pc19wb3dlcl9zYXZpbmcYASABKAgSJgoeb25fYmF0dGVyeV9zaHV0ZG93bl9hZnRlcl9zZWNzGAIgASgNEh8KF2FkY19tdWx0aXBsaWVyX292ZXJyaWRlGAMgASgCEhsKE3dhaXRfYmx1ZXRvb3RoX3NlY3MYBCABKA0SEAoIc2RzX3NlY3MYBiABKA0SDwoHbHNfc2VjcxgHIAEoDRIVCg1taW5fd2FrZV9zZWNzGAggASgNEiIKGmRldmljZV9iYXR0ZXJ5X2luYV9hZGRyZXNzGAkgASgNEhgKEHBvd2VybW9uX2VuYWJsZXMYICABKAQazwMKDU5ldHdvcmtDb25maWcSFAoMd2lmaV9lbmFibGVkGAEgASgIEhEKCXdpZmlfc3NpZBgDIAEoCRIQCgh3aWZpX3BzaxgEIAEoCRISCgpudHBfc2VydmVyGAUgASgJEhMKC2V0aF9lbmFibGVkGAYgASgIEkIKDGFkZHJlc3NfbW9kZRgHIAEoDjIsLm1lc2h0YXN0aWMuQ29uZmlnLk5ldHdvcmtDb25maWcuQWRkcmVzc01vZGUSQAoLaXB2NF9jb25maWcYCCABKAsyKy5tZXNodGFzdGljLkNvbmZpZy5OZXR3b3JrQ29uZmlnLklwVjRDb25maWcSFgoOcnN5c2xvZ19zZXJ2ZXIYCSABKAkSGQoRZW5hYmxlZF9wcm90b2NvbHMYCiABKA0aRgoKSXBWNENvbmZpZxIKCgJpcBgBIAEoBxIPCgdnYXRld2F5GAIgASgHEg4KBnN1Ym5ldBgDIAEoBxILCgNkbnMYBCABKAciIwoLQWRkcmVzc01vZGUSCAoEREhDUBAAEgoKBlNUQVRJQxABIjQKDVByb3RvY29sRmxhZ3MSEAoMTk9fQlJPQURDQVNUEAASEQoNVURQX0JST0FEQ0FTVBABGuQHCg1EaXNwbGF5Q29uZmlnEhYKDnNjcmVlbl9vbl9zZWNzGAEgASgNEkgKCmdwc19mb3JtYXQYAiABKA4yNC5tZXNodGFzdGljLkNvbmZpZy5EaXNwbGF5Q29uZmlnLkdwc0Nvb3JkaW5hdGVGb3JtYXQSIQoZYXV0b19zY3JlZW5fY2Fyb3VzZWxfc2VjcxgDIAEoDRIZChFjb21wYXNzX25vcnRoX3RvcBgEIAEoCBITCgtmbGlwX3NjcmVlbhgFIAEoCBI8CgV1bml0cxgGIAEoDjItLm1lc2h0YXN0aWMuQ29uZmlnLkRpc3BsYXlDb25maWcuRGlzcGxheVVuaXRzEjcKBG9sZWQYByABKA4yKS5tZXNodGFzdGljLkNvbmZpZy5EaXNwbGF5Q29uZmlnLk9sZWRUeXBlEkEKC2Rpc3BsYXltb2RlGAggASgOMiwubWVzaHRhc3RpYy5Db25maWcuRGlzcGxheUNvbmZpZy5EaXNwbGF5TW9kZRIUCgxoZWFkaW5nX2JvbGQYCSABKAgSHQoVd2FrZV9vbl90YXBfb3JfbW90aW9uGAogASgIElAKE2NvbXBhc3Nfb3JpZW50YXRpb24YCyABKA4yMy5tZXNodGFzdGljLkNvbmZpZy5EaXNwbGF5Q29uZmlnLkNvbXBhc3NPcmllbnRhdGlvbhIVCg11c2VfMTJoX2Nsb2NrGAwgASgIIk0KE0dwc0Nvb3JkaW5hdGVGb3JtYXQSBwoDREVDEAASBwoDRE1TEAESBwoDVVRNEAISCAoETUdSUxADEgcKA09MQxAEEggKBE9TR1IQBSIoCgxEaXNwbGF5VW5pdHMSCgoGTUVUUklDEAASDAoISU1QRVJJQUwQASJNCghPbGVkVHlwZRINCglPTEVEX0FVVE8QABIQCgxPTEVEX1NTRDEzMDYQARIPCgtPTEVEX1NIMTEwNhACEg8KC09MRURfU0gxMTA3EAMiQQoLRGlzcGxheU1vZGUSCwoHREVGQVVMVBAAEgwKCFRXT0NPTE9SEAESDAoISU5WRVJURUQQAhIJCgVDT0xPUhADIroBChJDb21wYXNzT3JpZW50YXRpb24SDQoJREVHUkVFU18wEAASDgoKREVHUkVFU185MBABEg8KC0RFR1JFRVNfMTgwEAISDwoLREVHUkVFU18yNzAQAxIWChJERUdSRUVTXzBfSU5WRVJURUQQBBIXChNERUdSRUVTXzkwX0lOVkVSVEVEEAUSGAoUREVHUkVFU18xODBfSU5WRVJURUQQBhIYChRERUdSRUVTXzI3MF9JTlZFUlRFRBAHGp0HCgpMb1JhQ29uZmlnEhIKCnVzZV9wcmVzZXQYASABKAgSPwoMbW9kZW1fcHJlc2V0GAIgASgOMikubWVzaHRhc3RpYy5Db25maWcuTG9SYUNvbmZpZy5Nb2RlbVByZXNldBIRCgliYW5kd2lkdGgYAyABKA0SFQoNc3ByZWFkX2ZhY3RvchgEIAEoDRITCgtjb2RpbmdfcmF0ZRgFIAEoDRIYChBmcmVxdWVuY3lfb2Zmc2V0GAYgASgCEjgKBnJlZ2lvbhgHIAEoDjIoLm1lc2h0YXN0aWMuQ29uZmlnLkxvUmFDb25maWcuUmVnaW9uQ29kZRIRCglob3BfbGltaXQYCCABKA0SEgoKdHhfZW5hYmxlZBgJIAEoCBIQCgh0eF9wb3dlchgKIAEoBRITCgtjaGFubmVsX251bRgLIAEoDRIbChNvdmVycmlkZV9kdXR5X2N5Y2xlGAwgASgIEh4KFnN4MTI2eF9yeF9ib29zdGVkX2dhaW4YDSABKAgSGgoSb3ZlcnJpZGVfZnJlcXVlbmN5GA4gASgCEhcKD3BhX2Zhbl9kaXNhYmxlZBgPIAEoCBIXCg9pZ25vcmVfaW5jb21pbmcYZyADKA0SEwoLaWdub3JlX21xdHQYaCABKAgSGQoRY29uZmlnX29rX3RvX21xdHQYaSABKAgi8QEKClJlZ2lvbkNvZGUSCQoFVU5TRVQQABIGCgJVUxABEgoKBkVVXzQzMxACEgoKBkVVXzg2OBADEgYKAkNOEAQSBgoCSlAQBRIHCgNBTloQBhIGCgJLUhAHEgYKAlRXEAgSBgoCUlUQCRIGCgJJThAKEgoKBk5aXzg2NRALEgYKAlRIEAwSCwoHTE9SQV8yNBANEgoKBlVBXzQzMxAOEgoKBlVBXzg2OBAPEgoKBk1ZXzQzMxAQEgoKBk1ZXzkxORAREgoKBlNHXzkyMxASEgoKBlBIXzQzMxATEgoKBlBIXzg2OBAUEgoKBlBIXzkxNRAVIqkBCgtNb2RlbVByZXNldBINCglMT05HX0ZBU1QQABINCglMT05HX1NMT1cQARIWCg5WRVJZX0xPTkdfU0xPVxACGgIIARIPCgtNRURJVU1fU0xPVxADEg8KC01FRElVTV9GQVNUEAQSDgoKU0hPUlRfU0xPVxAFEg4KClNIT1JUX0ZBU1QQBhIRCg1MT05HX01PREVSQVRFEAcSDwoLU0hPUlRfVFVSQk8QCBqtAQoPQmx1ZXRvb3RoQ29uZmlnEg8KB2VuYWJsZWQYASABKAgSPAoEbW9kZRgCIAEoDjIuLm1lc2h0YXN0aWMuQ29uZmlnLkJsdWV0b290aENvbmZpZy5QYWlyaW5nTW9kZRIRCglmaXhlZF9waW4YAyABKA0iOAoLUGFpcmluZ01vZGUSDgoKUkFORE9NX1BJThAAEg0KCUZJWEVEX1BJThABEgoKBk5PX1BJThACGrYBCg5TZWN1cml0eUNvbmZpZxISCgpwdWJsaWNfa2V5GAEgASgMEhMKC3ByaXZhdGVfa2V5GAIgASgMEhEKCWFkbWluX2tleRgDIAMoDBISCgppc19tYW5hZ2VkGAQgASgIEhYKDnNlcmlhbF9lbmFibGVkGAUgASgIEh0KFWRlYnVnX2xvZ19hcGlfZW5hYmxlZBgGIAEoCBIdChVhZG1pbl9jaGFubmVsX2VuYWJsZWQYCCABKAgaEgoQU2Vzc2lvbmtleUNvbmZpZ0IRCg9wYXlsb2FkX3ZhcmlhbnRCYQoTY29tLmdlZWtzdmlsbGUubWVzaEIMQ29uZmlnUHJvdG9zWiJnaXRodWIuY29tL21lc2h0YXN0aWMvZ28vZ2VuZXJhdGVkqgIUTWVzaHRhc3RpYy5Qcm90b2J1ZnO6AgBiBnByb3RvMw", [file_meshtastic_device_ui]);

/**
 * Describes the message meshtastic.Config.
 * Use `create(ConfigSchema)` to create a new message.
 */
export const ConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_config, 0);

/**
 * Describes the message meshtastic.Config.DeviceConfig.
 * Use `create(Config_DeviceConfigSchema)` to create a new message.
 */
export const Config_DeviceConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_config, 0, 0);

/**
 * Describes the enum meshtastic.Config.DeviceConfig.Role.
 */
export const Config_DeviceConfig_RoleSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 0, 0);

/**
 *
 * Defines the device's role on the Mesh network
 *
 * @generated from enum meshtastic.Config.DeviceConfig.Role
 */
export const Config_DeviceConfig_Role = /*@__PURE__*/
  tsEnum(Config_DeviceConfig_RoleSchema);

/**
 * Describes the enum meshtastic.Config.DeviceConfig.RebroadcastMode.
 */
export const Config_DeviceConfig_RebroadcastModeSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 0, 1);

/**
 *
 * Defines the device's behavior for how messages are rebroadcast
 *
 * @generated from enum meshtastic.Config.DeviceConfig.RebroadcastMode
 */
export const Config_DeviceConfig_RebroadcastMode = /*@__PURE__*/
  tsEnum(Config_DeviceConfig_RebroadcastModeSchema);

/**
 * Describes the message meshtastic.Config.PositionConfig.
 * Use `create(Config_PositionConfigSchema)` to create a new message.
 */
export const Config_PositionConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_config, 0, 1);

/**
 * Describes the enum meshtastic.Config.PositionConfig.PositionFlags.
 */
export const Config_PositionConfig_PositionFlagsSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 1, 0);

/**
 *
 * Bit field of boolean configuration options, indicating which optional
 * fields to include when assembling POSITION messages.
 * Longitude, latitude, altitude, speed, heading, and DOP
 * are always included (also time if GPS-synced)
 * NOTE: the more fields are included, the larger the message will be -
 *   leading to longer airtime and a higher risk of packet loss
 *
 * @generated from enum meshtastic.Config.PositionConfig.PositionFlags
 */
export const Config_PositionConfig_PositionFlags = /*@__PURE__*/
  tsEnum(Config_PositionConfig_PositionFlagsSchema);

/**
 * Describes the enum meshtastic.Config.PositionConfig.GpsMode.
 */
export const Config_PositionConfig_GpsModeSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 1, 1);

/**
 * @generated from enum meshtastic.Config.PositionConfig.GpsMode
 */
export const Config_PositionConfig_GpsMode = /*@__PURE__*/
  tsEnum(Config_PositionConfig_GpsModeSchema);

/**
 * Describes the message meshtastic.Config.PowerConfig.
 * Use `create(Config_PowerConfigSchema)` to create a new message.
 */
export const Config_PowerConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_config, 0, 2);

/**
 * Describes the message meshtastic.Config.NetworkConfig.
 * Use `create(Config_NetworkConfigSchema)` to create a new message.
 */
export const Config_NetworkConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_config, 0, 3);

/**
 * Describes the message meshtastic.Config.NetworkConfig.IpV4Config.
 * Use `create(Config_NetworkConfig_IpV4ConfigSchema)` to create a new message.
 */
export const Config_NetworkConfig_IpV4ConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_config, 0, 3, 0);

/**
 * Describes the enum meshtastic.Config.NetworkConfig.AddressMode.
 */
export const Config_NetworkConfig_AddressModeSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 3, 0);

/**
 * @generated from enum meshtastic.Config.NetworkConfig.AddressMode
 */
export const Config_NetworkConfig_AddressMode = /*@__PURE__*/
  tsEnum(Config_NetworkConfig_AddressModeSchema);

/**
 * Describes the enum meshtastic.Config.NetworkConfig.ProtocolFlags.
 */
export const Config_NetworkConfig_ProtocolFlagsSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 3, 1);

/**
 *
 * Available flags auxiliary network protocols
 *
 * @generated from enum meshtastic.Config.NetworkConfig.ProtocolFlags
 */
export const Config_NetworkConfig_ProtocolFlags = /*@__PURE__*/
  tsEnum(Config_NetworkConfig_ProtocolFlagsSchema);

/**
 * Describes the message meshtastic.Config.DisplayConfig.
 * Use `create(Config_DisplayConfigSchema)` to create a new message.
 */
export const Config_DisplayConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_config, 0, 4);

/**
 * Describes the enum meshtastic.Config.DisplayConfig.GpsCoordinateFormat.
 */
export const Config_DisplayConfig_GpsCoordinateFormatSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 4, 0);

/**
 *
 * How the GPS coordinates are displayed on the OLED screen.
 *
 * @generated from enum meshtastic.Config.DisplayConfig.GpsCoordinateFormat
 */
export const Config_DisplayConfig_GpsCoordinateFormat = /*@__PURE__*/
  tsEnum(Config_DisplayConfig_GpsCoordinateFormatSchema);

/**
 * Describes the enum meshtastic.Config.DisplayConfig.DisplayUnits.
 */
export const Config_DisplayConfig_DisplayUnitsSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 4, 1);

/**
 *
 * Unit display preference
 *
 * @generated from enum meshtastic.Config.DisplayConfig.DisplayUnits
 */
export const Config_DisplayConfig_DisplayUnits = /*@__PURE__*/
  tsEnum(Config_DisplayConfig_DisplayUnitsSchema);

/**
 * Describes the enum meshtastic.Config.DisplayConfig.OledType.
 */
export const Config_DisplayConfig_OledTypeSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 4, 2);

/**
 *
 * Override OLED outo detect with this if it fails.
 *
 * @generated from enum meshtastic.Config.DisplayConfig.OledType
 */
export const Config_DisplayConfig_OledType = /*@__PURE__*/
  tsEnum(Config_DisplayConfig_OledTypeSchema);

/**
 * Describes the enum meshtastic.Config.DisplayConfig.DisplayMode.
 */
export const Config_DisplayConfig_DisplayModeSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 4, 3);

/**
 * @generated from enum meshtastic.Config.DisplayConfig.DisplayMode
 */
export const Config_DisplayConfig_DisplayMode = /*@__PURE__*/
  tsEnum(Config_DisplayConfig_DisplayModeSchema);

/**
 * Describes the enum meshtastic.Config.DisplayConfig.CompassOrientation.
 */
export const Config_DisplayConfig_CompassOrientationSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 4, 4);

/**
 * @generated from enum meshtastic.Config.DisplayConfig.CompassOrientation
 */
export const Config_DisplayConfig_CompassOrientation = /*@__PURE__*/
  tsEnum(Config_DisplayConfig_CompassOrientationSchema);

/**
 * Describes the message meshtastic.Config.LoRaConfig.
 * Use `create(Config_LoRaConfigSchema)` to create a new message.
 */
export const Config_LoRaConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_config, 0, 5);

/**
 * Describes the enum meshtastic.Config.LoRaConfig.RegionCode.
 */
export const Config_LoRaConfig_RegionCodeSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 5, 0);

/**
 * @generated from enum meshtastic.Config.LoRaConfig.RegionCode
 */
export const Config_LoRaConfig_RegionCode = /*@__PURE__*/
  tsEnum(Config_LoRaConfig_RegionCodeSchema);

/**
 * Describes the enum meshtastic.Config.LoRaConfig.ModemPreset.
 */
export const Config_LoRaConfig_ModemPresetSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 5, 1);

/**
 *
 * Standard predefined channel settings
 * Note: these mappings must match ModemPreset Choice in the device code.
 *
 * @generated from enum meshtastic.Config.LoRaConfig.ModemPreset
 */
export const Config_LoRaConfig_ModemPreset = /*@__PURE__*/
  tsEnum(Config_LoRaConfig_ModemPresetSchema);

/**
 * Describes the message meshtastic.Config.BluetoothConfig.
 * Use `create(Config_BluetoothConfigSchema)` to create a new message.
 */
export const Config_BluetoothConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_config, 0, 6);

/**
 * Describes the enum meshtastic.Config.BluetoothConfig.PairingMode.
 */
export const Config_BluetoothConfig_PairingModeSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_config, 0, 6, 0);

/**
 * @generated from enum meshtastic.Config.BluetoothConfig.PairingMode
 */
export const Config_BluetoothConfig_PairingMode = /*@__PURE__*/
  tsEnum(Config_BluetoothConfig_PairingModeSchema);

/**
 * Describes the message meshtastic.Config.SecurityConfig.
 * Use `create(Config_SecurityConfigSchema)` to create a new message.
 */
export const Config_SecurityConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_config, 0, 7);

/**
 * Describes the message meshtastic.Config.SessionkeyConfig.
 * Use `create(Config_SessionkeyConfigSchema)` to create a new message.
 */
export const Config_SessionkeyConfigSchema = /*@__PURE__*/
  messageDesc(file_meshtastic_config, 0, 8);

