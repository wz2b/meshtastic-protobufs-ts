// @generated by protoc-gen-es v2.2.5 with parameter "target=js+dts,import_extension=js"
// @generated from file meshtastic/localonly.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Config_BluetoothConfig, Config_DeviceConfig, Config_DisplayConfig, Config_LoRaConfig, Config_NetworkConfig, Config_PositionConfig, Config_PowerConfig, Config_SecurityConfig } from "./config_pb.js";
import type { ModuleConfig_AmbientLightingConfig, ModuleConfig_AudioConfig, ModuleConfig_CannedMessageConfig, ModuleConfig_DetectionSensorConfig, ModuleConfig_ExternalNotificationConfig, ModuleConfig_MQTTConfig, ModuleConfig_NeighborInfoConfig, ModuleConfig_PaxcounterConfig, ModuleConfig_RangeTestConfig, ModuleConfig_RemoteHardwareConfig, ModuleConfig_SerialConfig, ModuleConfig_StoreForwardConfig, ModuleConfig_TelemetryConfig } from "./module_config_pb.js";

/**
 * Describes the file meshtastic/localonly.proto.
 */
export declare const file_meshtastic_localonly: GenFile;

/**
 * @generated from message meshtastic.LocalConfig
 */
export declare type LocalConfig = Message<"meshtastic.LocalConfig"> & {
  /**
   *
   * The part of the config that is specific to the Device
   *
   * @generated from field: meshtastic.Config.DeviceConfig device = 1;
   */
  device?: Config_DeviceConfig;

  /**
   *
   * The part of the config that is specific to the GPS Position
   *
   * @generated from field: meshtastic.Config.PositionConfig position = 2;
   */
  position?: Config_PositionConfig;

  /**
   *
   * The part of the config that is specific to the Power settings
   *
   * @generated from field: meshtastic.Config.PowerConfig power = 3;
   */
  power?: Config_PowerConfig;

  /**
   *
   * The part of the config that is specific to the Wifi Settings
   *
   * @generated from field: meshtastic.Config.NetworkConfig network = 4;
   */
  network?: Config_NetworkConfig;

  /**
   *
   * The part of the config that is specific to the Display
   *
   * @generated from field: meshtastic.Config.DisplayConfig display = 5;
   */
  display?: Config_DisplayConfig;

  /**
   *
   * The part of the config that is specific to the Lora Radio
   *
   * @generated from field: meshtastic.Config.LoRaConfig lora = 6;
   */
  lora?: Config_LoRaConfig;

  /**
   *
   * The part of the config that is specific to the Bluetooth settings
   *
   * @generated from field: meshtastic.Config.BluetoothConfig bluetooth = 7;
   */
  bluetooth?: Config_BluetoothConfig;

  /**
   *
   * A version integer used to invalidate old save files when we make
   * incompatible changes This integer is set at build time and is private to
   * NodeDB.cpp in the device code.
   *
   * @generated from field: uint32 version = 8;
   */
  version: number;

  /**
   *
   * The part of the config that is specific to Security settings
   *
   * @generated from field: meshtastic.Config.SecurityConfig security = 9;
   */
  security?: Config_SecurityConfig;
};

/**
 * Describes the message meshtastic.LocalConfig.
 * Use `create(LocalConfigSchema)` to create a new message.
 */
export declare const LocalConfigSchema: GenMessage<LocalConfig>;

/**
 * @generated from message meshtastic.LocalModuleConfig
 */
export declare type LocalModuleConfig = Message<"meshtastic.LocalModuleConfig"> & {
  /**
   *
   * The part of the config that is specific to the MQTT module
   *
   * @generated from field: meshtastic.ModuleConfig.MQTTConfig mqtt = 1;
   */
  mqtt?: ModuleConfig_MQTTConfig;

  /**
   *
   * The part of the config that is specific to the Serial module
   *
   * @generated from field: meshtastic.ModuleConfig.SerialConfig serial = 2;
   */
  serial?: ModuleConfig_SerialConfig;

  /**
   *
   * The part of the config that is specific to the ExternalNotification module
   *
   * @generated from field: meshtastic.ModuleConfig.ExternalNotificationConfig external_notification = 3;
   */
  externalNotification?: ModuleConfig_ExternalNotificationConfig;

  /**
   *
   * The part of the config that is specific to the Store & Forward module
   *
   * @generated from field: meshtastic.ModuleConfig.StoreForwardConfig store_forward = 4;
   */
  storeForward?: ModuleConfig_StoreForwardConfig;

  /**
   *
   * The part of the config that is specific to the RangeTest module
   *
   * @generated from field: meshtastic.ModuleConfig.RangeTestConfig range_test = 5;
   */
  rangeTest?: ModuleConfig_RangeTestConfig;

  /**
   *
   * The part of the config that is specific to the Telemetry module
   *
   * @generated from field: meshtastic.ModuleConfig.TelemetryConfig telemetry = 6;
   */
  telemetry?: ModuleConfig_TelemetryConfig;

  /**
   *
   * The part of the config that is specific to the Canned Message module
   *
   * @generated from field: meshtastic.ModuleConfig.CannedMessageConfig canned_message = 7;
   */
  cannedMessage?: ModuleConfig_CannedMessageConfig;

  /**
   *
   * The part of the config that is specific to the Audio module
   *
   * @generated from field: meshtastic.ModuleConfig.AudioConfig audio = 9;
   */
  audio?: ModuleConfig_AudioConfig;

  /**
   *
   * The part of the config that is specific to the Remote Hardware module
   *
   * @generated from field: meshtastic.ModuleConfig.RemoteHardwareConfig remote_hardware = 10;
   */
  remoteHardware?: ModuleConfig_RemoteHardwareConfig;

  /**
   *
   * The part of the config that is specific to the Neighbor Info module
   *
   * @generated from field: meshtastic.ModuleConfig.NeighborInfoConfig neighbor_info = 11;
   */
  neighborInfo?: ModuleConfig_NeighborInfoConfig;

  /**
   *
   * The part of the config that is specific to the Ambient Lighting module
   *
   * @generated from field: meshtastic.ModuleConfig.AmbientLightingConfig ambient_lighting = 12;
   */
  ambientLighting?: ModuleConfig_AmbientLightingConfig;

  /**
   *
   * The part of the config that is specific to the Detection Sensor module
   *
   * @generated from field: meshtastic.ModuleConfig.DetectionSensorConfig detection_sensor = 13;
   */
  detectionSensor?: ModuleConfig_DetectionSensorConfig;

  /**
   *
   * Paxcounter Config
   *
   * @generated from field: meshtastic.ModuleConfig.PaxcounterConfig paxcounter = 14;
   */
  paxcounter?: ModuleConfig_PaxcounterConfig;

  /**
   *
   * A version integer used to invalidate old save files when we make
   * incompatible changes This integer is set at build time and is private to
   * NodeDB.cpp in the device code.
   *
   * @generated from field: uint32 version = 8;
   */
  version: number;
};

/**
 * Describes the message meshtastic.LocalModuleConfig.
 * Use `create(LocalModuleConfigSchema)` to create a new message.
 */
export declare const LocalModuleConfigSchema: GenMessage<LocalModuleConfig>;

