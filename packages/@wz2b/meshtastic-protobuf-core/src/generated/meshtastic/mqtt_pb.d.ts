// @generated by protoc-gen-es v2.2.5 with parameter "target=js+dts,import_extension=js"
// @generated from file meshtastic/mqtt.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { HardwareModel, MeshPacket } from "./mesh_pb.js";
import type { Config_DeviceConfig_Role, Config_LoRaConfig_ModemPreset, Config_LoRaConfig_RegionCode } from "./config_pb.js";

/**
 * Describes the file meshtastic/mqtt.proto.
 */
export declare const file_meshtastic_mqtt: GenFile;

/**
 *
 * This message wraps a MeshPacket with extra metadata about the sender and how it arrived.
 *
 * @generated from message meshtastic.ServiceEnvelope
 */
export declare type ServiceEnvelope = Message<"meshtastic.ServiceEnvelope"> & {
  /**
   *
   * The (probably encrypted) packet
   *
   * @generated from field: meshtastic.MeshPacket packet = 1;
   */
  packet?: MeshPacket;

  /**
   *
   * The global channel ID it was sent on
   *
   * @generated from field: string channel_id = 2;
   */
  channelId: string;

  /**
   *
   * The sending gateway node ID. Can we use this to authenticate/prevent fake
   * nodeid impersonation for senders? - i.e. use gateway/mesh id (which is authenticated) + local node id as
   * the globally trusted nodenum
   *
   * @generated from field: string gateway_id = 3;
   */
  gatewayId: string;
};

/**
 * Describes the message meshtastic.ServiceEnvelope.
 * Use `create(ServiceEnvelopeSchema)` to create a new message.
 */
export declare const ServiceEnvelopeSchema: GenMessage<ServiceEnvelope>;

/**
 *
 * Information about a node intended to be reported unencrypted to a map using MQTT.
 *
 * @generated from message meshtastic.MapReport
 */
export declare type MapReport = Message<"meshtastic.MapReport"> & {
  /**
   *
   * A full name for this user, i.e. "Kevin Hester"
   *
   * @generated from field: string long_name = 1;
   */
  longName: string;

  /**
   *
   * A VERY short name, ideally two characters.
   * Suitable for a tiny OLED screen
   *
   * @generated from field: string short_name = 2;
   */
  shortName: string;

  /**
   *
   * Role of the node that applies specific settings for a particular use-case
   *
   * @generated from field: meshtastic.Config.DeviceConfig.Role role = 3;
   */
  role: Config_DeviceConfig_Role;

  /**
   *
   * Hardware model of the node, i.e. T-Beam, Heltec V3, etc...
   *
   * @generated from field: meshtastic.HardwareModel hw_model = 4;
   */
  hwModel: HardwareModel;

  /**
   *
   * Device firmware version string
   *
   * @generated from field: string firmware_version = 5;
   */
  firmwareVersion: string;

  /**
   *
   * The region code for the radio (US, CN, EU433, etc...)
   *
   * @generated from field: meshtastic.Config.LoRaConfig.RegionCode region = 6;
   */
  region: Config_LoRaConfig_RegionCode;

  /**
   *
   * Modem preset used by the radio (LongFast, MediumSlow, etc...)
   *
   * @generated from field: meshtastic.Config.LoRaConfig.ModemPreset modem_preset = 7;
   */
  modemPreset: Config_LoRaConfig_ModemPreset;

  /**
   *
   * Whether the node has a channel with default PSK and name (LongFast, MediumSlow, etc...)
   * and it uses the default frequency slot given the region and modem preset.
   *
   * @generated from field: bool has_default_channel = 8;
   */
  hasDefaultChannel: boolean;

  /**
   *
   * Latitude: multiply by 1e-7 to get degrees in floating point
   *
   * @generated from field: sfixed32 latitude_i = 9;
   */
  latitudeI: number;

  /**
   *
   * Longitude: multiply by 1e-7 to get degrees in floating point
   *
   * @generated from field: sfixed32 longitude_i = 10;
   */
  longitudeI: number;

  /**
   *
   * Altitude in meters above MSL
   *
   * @generated from field: int32 altitude = 11;
   */
  altitude: number;

  /**
   *
   * Indicates the bits of precision for latitude and longitude set by the sending node
   *
   * @generated from field: uint32 position_precision = 12;
   */
  positionPrecision: number;

  /**
   *
   * Number of online nodes (heard in the last 2 hours) this node has in its list that were received locally (not via MQTT)
   *
   * @generated from field: uint32 num_online_local_nodes = 13;
   */
  numOnlineLocalNodes: number;
};

/**
 * Describes the message meshtastic.MapReport.
 * Use `create(MapReportSchema)` to create a new message.
 */
export declare const MapReportSchema: GenMessage<MapReport>;

