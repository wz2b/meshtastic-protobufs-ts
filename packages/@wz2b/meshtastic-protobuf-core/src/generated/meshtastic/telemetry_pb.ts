// @generated by protoc-gen-es v2.2.5 with parameter "target=ts,import_extension=js"
// @generated from file meshtastic/telemetry.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file meshtastic/telemetry.proto.
 */
export const file_meshtastic_telemetry: GenFile = /*@__PURE__*/
  fileDesc("ChptZXNodGFzdGljL3RlbGVtZXRyeS5wcm90bxIKbWVzaHRhc3RpYyLzAQoNRGV2aWNlTWV0cmljcxIaCg1iYXR0ZXJ5X2xldmVsGAEgASgNSACIAQESFAoHdm9sdGFnZRgCIAEoAkgBiAEBEiAKE2NoYW5uZWxfdXRpbGl6YXRpb24YAyABKAJIAogBARIYCgthaXJfdXRpbF90eBgEIAEoAkgDiAEBEhsKDnVwdGltZV9zZWNvbmRzGAUgASgNSASIAQFCEAoOX2JhdHRlcnlfbGV2ZWxCCgoIX3ZvbHRhZ2VCFgoUX2NoYW5uZWxfdXRpbGl6YXRpb25CDgoMX2Fpcl91dGlsX3R4QhEKD191cHRpbWVfc2Vjb25kcyKCBwoSRW52aXJvbm1lbnRNZXRyaWNzEhgKC3RlbXBlcmF0dXJlGAEgASgCSACIAQESHgoRcmVsYXRpdmVfaHVtaWRpdHkYAiABKAJIAYgBARIgChNiYXJvbWV0cmljX3ByZXNzdXJlGAMgASgCSAKIAQESGwoOZ2FzX3Jlc2lzdGFuY2UYBCABKAJIA4gBARIUCgd2b2x0YWdlGAUgASgCSASIAQESFAoHY3VycmVudBgGIAEoAkgFiAEBEhAKA2lhcRgHIAEoDUgGiAEBEhUKCGRpc3RhbmNlGAggASgCSAeIAQESEAoDbHV4GAkgASgCSAiIAQESFgoJd2hpdGVfbHV4GAogASgCSAmIAQESEwoGaXJfbHV4GAsgASgCSAqIAQESEwoGdXZfbHV4GAwgASgCSAuIAQESGwoOd2luZF9kaXJlY3Rpb24YDSABKA1IDIgBARIXCgp3aW5kX3NwZWVkGA4gASgCSA2IAQESEwoGd2VpZ2h0GA8gASgCSA6IAQESFgoJd2luZF9ndXN0GBAgASgCSA+IAQESFgoJd2luZF9sdWxsGBEgASgCSBCIAQESFgoJcmFkaWF0aW9uGBIgASgCSBGIAQESGAoLcmFpbmZhbGxfMWgYEyABKAJIEogBARIZCgxyYWluZmFsbF8yNGgYFCABKAJIE4gBARIaCg1zb2lsX21vaXN0dXJlGBUgASgNSBSIAQESHQoQc29pbF90ZW1wZXJhdHVyZRgWIAEoAkgViAEBQg4KDF90ZW1wZXJhdHVyZUIUChJfcmVsYXRpdmVfaHVtaWRpdHlCFgoUX2Jhcm9tZXRyaWNfcHJlc3N1cmVCEQoPX2dhc19yZXNpc3RhbmNlQgoKCF92b2x0YWdlQgoKCF9jdXJyZW50QgYKBF9pYXFCCwoJX2Rpc3RhbmNlQgYKBF9sdXhCDAoKX3doaXRlX2x1eEIJCgdfaXJfbHV4QgkKB191dl9sdXhCEQoPX3dpbmRfZGlyZWN0aW9uQg0KC193aW5kX3NwZWVkQgkKB193ZWlnaHRCDAoKX3dpbmRfZ3VzdEIMCgpfd2luZF9sdWxsQgwKCl9yYWRpYXRpb25CDgoMX3JhaW5mYWxsXzFoQg8KDV9yYWluZmFsbF8yNGhCEAoOX3NvaWxfbW9pc3R1cmVCEwoRX3NvaWxfdGVtcGVyYXR1cmUiigIKDFBvd2VyTWV0cmljcxIYCgtjaDFfdm9sdGFnZRgBIAEoAkgAiAEBEhgKC2NoMV9jdXJyZW50GAIgASgCSAGIAQESGAoLY2gyX3ZvbHRhZ2UYAyABKAJIAogBARIYCgtjaDJfY3VycmVudBgEIAEoAkgDiAEBEhgKC2NoM192b2x0YWdlGAUgASgCSASIAQESGAoLY2gzX2N1cnJlbnQYBiABKAJIBYgBAUIOCgxfY2gxX3ZvbHRhZ2VCDgoMX2NoMV9jdXJyZW50Qg4KDF9jaDJfdm9sdGFnZUIOCgxfY2gyX2N1cnJlbnRCDgoMX2NoM192b2x0YWdlQg4KDF9jaDNfY3VycmVudCKFBQoRQWlyUXVhbGl0eU1ldHJpY3MSGgoNcG0xMF9zdGFuZGFyZBgBIAEoDUgAiAEBEhoKDXBtMjVfc3RhbmRhcmQYAiABKA1IAYgBARIbCg5wbTEwMF9zdGFuZGFyZBgDIAEoDUgCiAEBEh8KEnBtMTBfZW52aXJvbm1lbnRhbBgEIAEoDUgDiAEBEh8KEnBtMjVfZW52aXJvbm1lbnRhbBgFIAEoDUgEiAEBEiAKE3BtMTAwX2Vudmlyb25tZW50YWwYBiABKA1IBYgBARIbCg5wYXJ0aWNsZXNfMDN1bRgHIAEoDUgGiAEBEhsKDnBhcnRpY2xlc18wNXVtGAggASgNSAeIAQESGwoOcGFydGljbGVzXzEwdW0YCSABKA1ICIgBARIbCg5wYXJ0aWNsZXNfMjV1bRgKIAEoDUgJiAEBEhsKDnBhcnRpY2xlc181MHVtGAsgASgNSAqIAQESHAoPcGFydGljbGVzXzEwMHVtGAwgASgNSAuIAQESEAoDY28yGA0gASgNSAyIAQFCEAoOX3BtMTBfc3RhbmRhcmRCEAoOX3BtMjVfc3RhbmRhcmRCEQoPX3BtMTAwX3N0YW5kYXJkQhUKE19wbTEwX2Vudmlyb25tZW50YWxCFQoTX3BtMjVfZW52aXJvbm1lbnRhbEIWChRfcG0xMDBfZW52aXJvbm1lbnRhbEIRCg9fcGFydGljbGVzXzAzdW1CEQoPX3BhcnRpY2xlc18wNXVtQhEKD19wYXJ0aWNsZXNfMTB1bUIRCg9fcGFydGljbGVzXzI1dW1CEQoPX3BhcnRpY2xlc181MHVtQhIKEF9wYXJ0aWNsZXNfMTAwdW1CBgoEX2NvMiKfAgoKTG9jYWxTdGF0cxIWCg51cHRpbWVfc2Vjb25kcxgBIAEoDRIbChNjaGFubmVsX3V0aWxpemF0aW9uGAIgASgCEhMKC2Fpcl91dGlsX3R4GAMgASgCEhYKDm51bV9wYWNrZXRzX3R4GAQgASgNEhYKDm51bV9wYWNrZXRzX3J4GAUgASgNEhoKEm51bV9wYWNrZXRzX3J4X2JhZBgGIAEoDRIYChBudW1fb25saW5lX25vZGVzGAcgASgNEhcKD251bV90b3RhbF9ub2RlcxgIIAEoDRITCgtudW1fcnhfZHVwZRgJIAEoDRIUCgxudW1fdHhfcmVsYXkYCiABKA0SHQoVbnVtX3R4X3JlbGF5X2NhbmNlbGVkGAsgASgNInsKDUhlYWx0aE1ldHJpY3MSFgoJaGVhcnRfYnBtGAEgASgNSACIAQESEQoEc3BPMhgCIAEoDUgBiAEBEhgKC3RlbXBlcmF0dXJlGAMgASgCSAKIAQFCDAoKX2hlYXJ0X2JwbUIHCgVfc3BPMkIOCgxfdGVtcGVyYXR1cmUi7QIKCVRlbGVtZXRyeRIMCgR0aW1lGAEgASgHEjMKDmRldmljZV9tZXRyaWNzGAIgASgLMhkubWVzaHRhc3RpYy5EZXZpY2VNZXRyaWNzSAASPQoTZW52aXJvbm1lbnRfbWV0cmljcxgDIAEoCzIeLm1lc2h0YXN0aWMuRW52aXJvbm1lbnRNZXRyaWNzSAASPAoTYWlyX3F1YWxpdHlfbWV0cmljcxgEIAEoCzIdLm1lc2h0YXN0aWMuQWlyUXVhbGl0eU1ldHJpY3NIABIxCg1wb3dlcl9tZXRyaWNzGAUgASgLMhgubWVzaHRhc3RpYy5Qb3dlck1ldHJpY3NIABItCgtsb2NhbF9zdGF0cxgGIAEoCzIWLm1lc2h0YXN0aWMuTG9jYWxTdGF0c0gAEjMKDmhlYWx0aF9tZXRyaWNzGAcgASgLMhkubWVzaHRhc3RpYy5IZWFsdGhNZXRyaWNzSABCCQoHdmFyaWFudCI+Cg1OYXU3ODAyQ29uZmlnEhIKCnplcm9PZmZzZXQYASABKAUSGQoRY2FsaWJyYXRpb25GYWN0b3IYAiABKAIqkQQKE1RlbGVtZXRyeVNlbnNvclR5cGUSEAoMU0VOU09SX1VOU0VUEAASCgoGQk1FMjgwEAESCgoGQk1FNjgwEAISCwoHTUNQOTgwOBADEgoKBklOQTI2MBAEEgoKBklOQTIxORAFEgoKBkJNUDI4MBAGEgkKBVNIVEMzEAcSCQoFTFBTMjIQCBILCgdRTUM2MzEwEAkSCwoHUU1JODY1OBAKEgwKCFFNQzU4ODNMEAsSCQoFU0hUMzEQDBIMCghQTVNBMDAzSRANEgsKB0lOQTMyMjEQDhIKCgZCTVAwODUQDxIMCghSQ1dMOTYyMBAQEgkKBVNIVDRYEBESDAoIVkVNTDc3MDAQEhIMCghNTFg5MDYzMhATEgsKB09QVDMwMDEQFBIMCghMVFIzOTBVVhAVEg4KClRTTDI1OTExRk4QFhIJCgVBSFQxMBAXEhAKDERGUk9CT1RfTEFSSxAYEgsKB05BVTc4MDIQGRIKCgZCTVAzWFgQGhIMCghJQ00yMDk0OBAbEgwKCE1BWDE3MDQ4EBwSEQoNQ1VTVE9NX1NFTlNPUhAdEgwKCE1BWDMwMTAyEB4SDAoITUxYOTA2MTQQHxIJCgVTQ0Q0WBAgEgsKB1JBRFNFTlMQIRIKCgZJTkEyMjYQIhIQCgxERlJPQk9UX1JBSU4QIxIKCgZEUFMzMTAQJBIMCghSQUsxMjAzNRAlQmQKE2NvbS5nZWVrc3ZpbGxlLm1lc2hCD1RlbGVtZXRyeVByb3Rvc1oiZ2l0aHViLmNvbS9tZXNodGFzdGljL2dvL2dlbmVyYXRlZKoCFE1lc2h0YXN0aWMuUHJvdG9idWZzugIAYgZwcm90bzM");

/**
 *
 * Key native device metrics such as battery level
 *
 * @generated from message meshtastic.DeviceMetrics
 */
export type DeviceMetrics = Message<"meshtastic.DeviceMetrics"> & {
  /**
   *
   * 0-100 (>100 means powered)
   *
   * @generated from field: optional uint32 battery_level = 1;
   */
  batteryLevel?: number;

  /**
   *
   * Voltage measured
   *
   * @generated from field: optional float voltage = 2;
   */
  voltage?: number;

  /**
   *
   * Utilization for the current channel, including well formed TX, RX and malformed RX (aka noise).
   *
   * @generated from field: optional float channel_utilization = 3;
   */
  channelUtilization?: number;

  /**
   *
   * Percent of airtime for transmission used within the last hour.
   *
   * @generated from field: optional float air_util_tx = 4;
   */
  airUtilTx?: number;

  /**
   *
   * How long the device has been running since the last reboot (in seconds)
   *
   * @generated from field: optional uint32 uptime_seconds = 5;
   */
  uptimeSeconds?: number;
};

/**
 * Describes the message meshtastic.DeviceMetrics.
 * Use `create(DeviceMetricsSchema)` to create a new message.
 */
export const DeviceMetricsSchema: GenMessage<DeviceMetrics> = /*@__PURE__*/
  messageDesc(file_meshtastic_telemetry, 0);

/**
 *
 * Weather station or other environmental metrics
 *
 * @generated from message meshtastic.EnvironmentMetrics
 */
export type EnvironmentMetrics = Message<"meshtastic.EnvironmentMetrics"> & {
  /**
   *
   * Temperature measured
   *
   * @generated from field: optional float temperature = 1;
   */
  temperature?: number;

  /**
   *
   * Relative humidity percent measured
   *
   * @generated from field: optional float relative_humidity = 2;
   */
  relativeHumidity?: number;

  /**
   *
   * Barometric pressure in hPA measured
   *
   * @generated from field: optional float barometric_pressure = 3;
   */
  barometricPressure?: number;

  /**
   *
   * Gas resistance in MOhm measured
   *
   * @generated from field: optional float gas_resistance = 4;
   */
  gasResistance?: number;

  /**
   *
   * Voltage measured (To be depreciated in favor of PowerMetrics in Meshtastic 3.x)
   *
   * @generated from field: optional float voltage = 5;
   */
  voltage?: number;

  /**
   *
   * Current measured (To be depreciated in favor of PowerMetrics in Meshtastic 3.x)
   *
   * @generated from field: optional float current = 6;
   */
  current?: number;

  /**
   *
   * relative scale IAQ value as measured by Bosch BME680 . value 0-500.
   * Belongs to Air Quality but is not particle but VOC measurement. Other VOC values can also be put in here.
   *
   * @generated from field: optional uint32 iaq = 7;
   */
  iaq?: number;

  /**
   *
   * RCWL9620 Doppler Radar Distance Sensor, used for water level detection. Float value in mm.
   *
   * @generated from field: optional float distance = 8;
   */
  distance?: number;

  /**
   *
   * VEML7700 high accuracy ambient light(Lux) digital 16-bit resolution sensor.
   *
   * @generated from field: optional float lux = 9;
   */
  lux?: number;

  /**
   *
   * VEML7700 high accuracy white light(irradiance) not calibrated digital 16-bit resolution sensor.
   *
   * @generated from field: optional float white_lux = 10;
   */
  whiteLux?: number;

  /**
   *
   * Infrared lux
   *
   * @generated from field: optional float ir_lux = 11;
   */
  irLux?: number;

  /**
   *
   * Ultraviolet lux
   *
   * @generated from field: optional float uv_lux = 12;
   */
  uvLux?: number;

  /**
   *
   * Wind direction in degrees
   * 0 degrees = North, 90 = East, etc...
   *
   * @generated from field: optional uint32 wind_direction = 13;
   */
  windDirection?: number;

  /**
   *
   * Wind speed in m/s
   *
   * @generated from field: optional float wind_speed = 14;
   */
  windSpeed?: number;

  /**
   *
   * Weight in KG
   *
   * @generated from field: optional float weight = 15;
   */
  weight?: number;

  /**
   *
   * Wind gust in m/s
   *
   * @generated from field: optional float wind_gust = 16;
   */
  windGust?: number;

  /**
   *
   * Wind lull in m/s
   *
   * @generated from field: optional float wind_lull = 17;
   */
  windLull?: number;

  /**
   *
   * Radiation in µR/h
   *
   * @generated from field: optional float radiation = 18;
   */
  radiation?: number;

  /**
   *
   * Rainfall in the last hour in mm
   *
   * @generated from field: optional float rainfall_1h = 19;
   */
  rainfall1h?: number;

  /**
   *
   * Rainfall in the last 24 hours in mm
   *
   * @generated from field: optional float rainfall_24h = 20;
   */
  rainfall24h?: number;

  /**
   *
   * Soil moisture measured (% 1-100)
   *
   * @generated from field: optional uint32 soil_moisture = 21;
   */
  soilMoisture?: number;

  /**
   *
   * Soil temperature measured (*C)
   *
   * @generated from field: optional float soil_temperature = 22;
   */
  soilTemperature?: number;
};

/**
 * Describes the message meshtastic.EnvironmentMetrics.
 * Use `create(EnvironmentMetricsSchema)` to create a new message.
 */
export const EnvironmentMetricsSchema: GenMessage<EnvironmentMetrics> = /*@__PURE__*/
  messageDesc(file_meshtastic_telemetry, 1);

/**
 *
 * Power Metrics (voltage / current / etc)
 *
 * @generated from message meshtastic.PowerMetrics
 */
export type PowerMetrics = Message<"meshtastic.PowerMetrics"> & {
  /**
   *
   * Voltage (Ch1)
   *
   * @generated from field: optional float ch1_voltage = 1;
   */
  ch1Voltage?: number;

  /**
   *
   * Current (Ch1)
   *
   * @generated from field: optional float ch1_current = 2;
   */
  ch1Current?: number;

  /**
   *
   * Voltage (Ch2)
   *
   * @generated from field: optional float ch2_voltage = 3;
   */
  ch2Voltage?: number;

  /**
   *
   * Current (Ch2)
   *
   * @generated from field: optional float ch2_current = 4;
   */
  ch2Current?: number;

  /**
   *
   * Voltage (Ch3)
   *
   * @generated from field: optional float ch3_voltage = 5;
   */
  ch3Voltage?: number;

  /**
   *
   * Current (Ch3)
   *
   * @generated from field: optional float ch3_current = 6;
   */
  ch3Current?: number;
};

/**
 * Describes the message meshtastic.PowerMetrics.
 * Use `create(PowerMetricsSchema)` to create a new message.
 */
export const PowerMetricsSchema: GenMessage<PowerMetrics> = /*@__PURE__*/
  messageDesc(file_meshtastic_telemetry, 2);

/**
 *
 * Air quality metrics
 *
 * @generated from message meshtastic.AirQualityMetrics
 */
export type AirQualityMetrics = Message<"meshtastic.AirQualityMetrics"> & {
  /**
   *
   * Concentration Units Standard PM1.0
   *
   * @generated from field: optional uint32 pm10_standard = 1;
   */
  pm10Standard?: number;

  /**
   *
   * Concentration Units Standard PM2.5
   *
   * @generated from field: optional uint32 pm25_standard = 2;
   */
  pm25Standard?: number;

  /**
   *
   * Concentration Units Standard PM10.0
   *
   * @generated from field: optional uint32 pm100_standard = 3;
   */
  pm100Standard?: number;

  /**
   *
   * Concentration Units Environmental PM1.0
   *
   * @generated from field: optional uint32 pm10_environmental = 4;
   */
  pm10Environmental?: number;

  /**
   *
   * Concentration Units Environmental PM2.5
   *
   * @generated from field: optional uint32 pm25_environmental = 5;
   */
  pm25Environmental?: number;

  /**
   *
   * Concentration Units Environmental PM10.0
   *
   * @generated from field: optional uint32 pm100_environmental = 6;
   */
  pm100Environmental?: number;

  /**
   *
   * 0.3um Particle Count
   *
   * @generated from field: optional uint32 particles_03um = 7;
   */
  particles03um?: number;

  /**
   *
   * 0.5um Particle Count
   *
   * @generated from field: optional uint32 particles_05um = 8;
   */
  particles05um?: number;

  /**
   *
   * 1.0um Particle Count
   *
   * @generated from field: optional uint32 particles_10um = 9;
   */
  particles10um?: number;

  /**
   *
   * 2.5um Particle Count
   *
   * @generated from field: optional uint32 particles_25um = 10;
   */
  particles25um?: number;

  /**
   *
   * 5.0um Particle Count
   *
   * @generated from field: optional uint32 particles_50um = 11;
   */
  particles50um?: number;

  /**
   *
   * 10.0um Particle Count
   *
   * @generated from field: optional uint32 particles_100um = 12;
   */
  particles100um?: number;

  /**
   *
   * 10.0um Particle Count
   *
   * @generated from field: optional uint32 co2 = 13;
   */
  co2?: number;
};

/**
 * Describes the message meshtastic.AirQualityMetrics.
 * Use `create(AirQualityMetricsSchema)` to create a new message.
 */
export const AirQualityMetricsSchema: GenMessage<AirQualityMetrics> = /*@__PURE__*/
  messageDesc(file_meshtastic_telemetry, 3);

/**
 *
 * Local device mesh statistics
 *
 * @generated from message meshtastic.LocalStats
 */
export type LocalStats = Message<"meshtastic.LocalStats"> & {
  /**
   *
   * How long the device has been running since the last reboot (in seconds)
   *
   * @generated from field: uint32 uptime_seconds = 1;
   */
  uptimeSeconds: number;

  /**
   *
   * Utilization for the current channel, including well formed TX, RX and malformed RX (aka noise).
   *
   * @generated from field: float channel_utilization = 2;
   */
  channelUtilization: number;

  /**
   *
   * Percent of airtime for transmission used within the last hour.
   *
   * @generated from field: float air_util_tx = 3;
   */
  airUtilTx: number;

  /**
   *
   * Number of packets sent
   *
   * @generated from field: uint32 num_packets_tx = 4;
   */
  numPacketsTx: number;

  /**
   *
   * Number of packets received (both good and bad)
   *
   * @generated from field: uint32 num_packets_rx = 5;
   */
  numPacketsRx: number;

  /**
   *
   * Number of packets received that are malformed or violate the protocol
   *
   * @generated from field: uint32 num_packets_rx_bad = 6;
   */
  numPacketsRxBad: number;

  /**
   *
   * Number of nodes online (in the past 2 hours)
   *
   * @generated from field: uint32 num_online_nodes = 7;
   */
  numOnlineNodes: number;

  /**
   *
   * Number of nodes total
   *
   * @generated from field: uint32 num_total_nodes = 8;
   */
  numTotalNodes: number;

  /**
   *
   * Number of received packets that were duplicates (due to multiple nodes relaying).
   * If this number is high, there are nodes in the mesh relaying packets when it's unnecessary, for example due to the ROUTER/REPEATER role.
   *
   * @generated from field: uint32 num_rx_dupe = 9;
   */
  numRxDupe: number;

  /**
   *
   * Number of packets we transmitted that were a relay for others (not originating from ourselves).
   *
   * @generated from field: uint32 num_tx_relay = 10;
   */
  numTxRelay: number;

  /**
   *
   * Number of times we canceled a packet to be relayed, because someone else did it before us.
   * This will always be zero for ROUTERs/REPEATERs. If this number is high, some other node(s) is/are relaying faster than you.
   *
   * @generated from field: uint32 num_tx_relay_canceled = 11;
   */
  numTxRelayCanceled: number;
};

/**
 * Describes the message meshtastic.LocalStats.
 * Use `create(LocalStatsSchema)` to create a new message.
 */
export const LocalStatsSchema: GenMessage<LocalStats> = /*@__PURE__*/
  messageDesc(file_meshtastic_telemetry, 4);

/**
 *
 * Health telemetry metrics
 *
 * @generated from message meshtastic.HealthMetrics
 */
export type HealthMetrics = Message<"meshtastic.HealthMetrics"> & {
  /**
   *
   * Heart rate (beats per minute)
   *
   * @generated from field: optional uint32 heart_bpm = 1;
   */
  heartBpm?: number;

  /**
   *
   * SpO2 (blood oxygen saturation) level
   *
   * @generated from field: optional uint32 spO2 = 2;
   */
  spO2?: number;

  /**
   *
   * Body temperature in degrees Celsius
   *
   * @generated from field: optional float temperature = 3;
   */
  temperature?: number;
};

/**
 * Describes the message meshtastic.HealthMetrics.
 * Use `create(HealthMetricsSchema)` to create a new message.
 */
export const HealthMetricsSchema: GenMessage<HealthMetrics> = /*@__PURE__*/
  messageDesc(file_meshtastic_telemetry, 5);

/**
 *
 * Types of Measurements the telemetry module is equipped to handle
 *
 * @generated from message meshtastic.Telemetry
 */
export type Telemetry = Message<"meshtastic.Telemetry"> & {
  /**
   *
   * Seconds since 1970 - or 0 for unknown/unset
   *
   * @generated from field: fixed32 time = 1;
   */
  time: number;

  /**
   * @generated from oneof meshtastic.Telemetry.variant
   */
  variant: {
    /**
     *
     * Key native device metrics such as battery level
     *
     * @generated from field: meshtastic.DeviceMetrics device_metrics = 2;
     */
    value: DeviceMetrics;
    case: "deviceMetrics";
  } | {
    /**
     *
     * Weather station or other environmental metrics
     *
     * @generated from field: meshtastic.EnvironmentMetrics environment_metrics = 3;
     */
    value: EnvironmentMetrics;
    case: "environmentMetrics";
  } | {
    /**
     *
     * Air quality metrics
     *
     * @generated from field: meshtastic.AirQualityMetrics air_quality_metrics = 4;
     */
    value: AirQualityMetrics;
    case: "airQualityMetrics";
  } | {
    /**
     *
     * Power Metrics
     *
     * @generated from field: meshtastic.PowerMetrics power_metrics = 5;
     */
    value: PowerMetrics;
    case: "powerMetrics";
  } | {
    /**
     *
     * Local device mesh statistics
     *
     * @generated from field: meshtastic.LocalStats local_stats = 6;
     */
    value: LocalStats;
    case: "localStats";
  } | {
    /**
     *
     * Health telemetry metrics
     *
     * @generated from field: meshtastic.HealthMetrics health_metrics = 7;
     */
    value: HealthMetrics;
    case: "healthMetrics";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message meshtastic.Telemetry.
 * Use `create(TelemetrySchema)` to create a new message.
 */
export const TelemetrySchema: GenMessage<Telemetry> = /*@__PURE__*/
  messageDesc(file_meshtastic_telemetry, 6);

/**
 *
 * NAU7802 Telemetry configuration, for saving to flash
 *
 * @generated from message meshtastic.Nau7802Config
 */
export type Nau7802Config = Message<"meshtastic.Nau7802Config"> & {
  /**
   *
   * The offset setting for the NAU7802
   *
   * @generated from field: int32 zeroOffset = 1;
   */
  zeroOffset: number;

  /**
   *
   * The calibration factor for the NAU7802
   *
   * @generated from field: float calibrationFactor = 2;
   */
  calibrationFactor: number;
};

/**
 * Describes the message meshtastic.Nau7802Config.
 * Use `create(Nau7802ConfigSchema)` to create a new message.
 */
export const Nau7802ConfigSchema: GenMessage<Nau7802Config> = /*@__PURE__*/
  messageDesc(file_meshtastic_telemetry, 7);

/**
 *
 * Supported I2C Sensors for telemetry in Meshtastic
 *
 * @generated from enum meshtastic.TelemetrySensorType
 */
export enum TelemetrySensorType {
  /**
   *
   * No external telemetry sensor explicitly set
   *
   * @generated from enum value: SENSOR_UNSET = 0;
   */
  SENSOR_UNSET = 0,

  /**
   *
   * High accuracy temperature, pressure, humidity
   *
   * @generated from enum value: BME280 = 1;
   */
  BME280 = 1,

  /**
   *
   * High accuracy temperature, pressure, humidity, and air resistance
   *
   * @generated from enum value: BME680 = 2;
   */
  BME680 = 2,

  /**
   *
   * Very high accuracy temperature
   *
   * @generated from enum value: MCP9808 = 3;
   */
  MCP9808 = 3,

  /**
   *
   * Moderate accuracy current and voltage
   *
   * @generated from enum value: INA260 = 4;
   */
  INA260 = 4,

  /**
   *
   * Moderate accuracy current and voltage
   *
   * @generated from enum value: INA219 = 5;
   */
  INA219 = 5,

  /**
   *
   * High accuracy temperature and pressure
   *
   * @generated from enum value: BMP280 = 6;
   */
  BMP280 = 6,

  /**
   *
   * High accuracy temperature and humidity
   *
   * @generated from enum value: SHTC3 = 7;
   */
  SHTC3 = 7,

  /**
   *
   * High accuracy pressure
   *
   * @generated from enum value: LPS22 = 8;
   */
  LPS22 = 8,

  /**
   *
   * 3-Axis magnetic sensor
   *
   * @generated from enum value: QMC6310 = 9;
   */
  QMC6310 = 9,

  /**
   *
   * 6-Axis inertial measurement sensor
   *
   * @generated from enum value: QMI8658 = 10;
   */
  QMI8658 = 10,

  /**
   *
   * 3-Axis magnetic sensor
   *
   * @generated from enum value: QMC5883L = 11;
   */
  QMC5883L = 11,

  /**
   *
   * High accuracy temperature and humidity
   *
   * @generated from enum value: SHT31 = 12;
   */
  SHT31 = 12,

  /**
   *
   * PM2.5 air quality sensor
   *
   * @generated from enum value: PMSA003I = 13;
   */
  PMSA003I = 13,

  /**
   *
   * INA3221 3 Channel Voltage / Current Sensor
   *
   * @generated from enum value: INA3221 = 14;
   */
  INA3221 = 14,

  /**
   *
   * BMP085/BMP180 High accuracy temperature and pressure (older Version of BMP280)
   *
   * @generated from enum value: BMP085 = 15;
   */
  BMP085 = 15,

  /**
   *
   * RCWL-9620 Doppler Radar Distance Sensor, used for water level detection
   *
   * @generated from enum value: RCWL9620 = 16;
   */
  RCWL9620 = 16,

  /**
   *
   * Sensirion High accuracy temperature and humidity
   *
   * @generated from enum value: SHT4X = 17;
   */
  SHT4X = 17,

  /**
   *
   * VEML7700 high accuracy ambient light(Lux) digital 16-bit resolution sensor.
   *
   * @generated from enum value: VEML7700 = 18;
   */
  VEML7700 = 18,

  /**
   *
   * MLX90632 non-contact IR temperature sensor.
   *
   * @generated from enum value: MLX90632 = 19;
   */
  MLX90632 = 19,

  /**
   *
   * TI OPT3001 Ambient Light Sensor
   *
   * @generated from enum value: OPT3001 = 20;
   */
  OPT3001 = 20,

  /**
   *
   * Lite On LTR-390UV-01 UV Light Sensor
   *
   * @generated from enum value: LTR390UV = 21;
   */
  LTR390UV = 21,

  /**
   *
   * AMS TSL25911FN RGB Light Sensor
   *
   * @generated from enum value: TSL25911FN = 22;
   */
  TSL25911FN = 22,

  /**
   *
   * AHT10 Integrated temperature and humidity sensor
   *
   * @generated from enum value: AHT10 = 23;
   */
  AHT10 = 23,

  /**
   *
   * DFRobot Lark Weather station (temperature, humidity, pressure, wind speed and direction)
   *
   * @generated from enum value: DFROBOT_LARK = 24;
   */
  DFROBOT_LARK = 24,

  /**
   *
   * NAU7802 Scale Chip or compatible
   *
   * @generated from enum value: NAU7802 = 25;
   */
  NAU7802 = 25,

  /**
   *
   * BMP3XX High accuracy temperature and pressure
   *
   * @generated from enum value: BMP3XX = 26;
   */
  BMP3XX = 26,

  /**
   *
   * ICM-20948 9-Axis digital motion processor
   *
   * @generated from enum value: ICM20948 = 27;
   */
  ICM20948 = 27,

  /**
   *
   * MAX17048 1S lipo battery sensor (voltage, state of charge, time to go)
   *
   * @generated from enum value: MAX17048 = 28;
   */
  MAX17048 = 28,

  /**
   *
   * Custom I2C sensor implementation based on https://github.com/meshtastic/i2c-sensor
   *
   * @generated from enum value: CUSTOM_SENSOR = 29;
   */
  CUSTOM_SENSOR = 29,

  /**
   *
   * MAX30102 Pulse Oximeter and Heart-Rate Sensor
   *
   * @generated from enum value: MAX30102 = 30;
   */
  MAX30102 = 30,

  /**
   *
   * MLX90614 non-contact IR temperature sensor
   *
   * @generated from enum value: MLX90614 = 31;
   */
  MLX90614 = 31,

  /**
   *
   * SCD40/SCD41 CO2, humidity, temperature sensor
   *
   * @generated from enum value: SCD4X = 32;
   */
  SCD4X = 32,

  /**
   *
   * ClimateGuard RadSens, radiation, Geiger-Muller Tube
   *
   * @generated from enum value: RADSENS = 33;
   */
  RADSENS = 33,

  /**
   *
   * High accuracy current and voltage
   *
   * @generated from enum value: INA226 = 34;
   */
  INA226 = 34,

  /**
   *
   * DFRobot Gravity tipping bucket rain gauge
   *
   * @generated from enum value: DFROBOT_RAIN = 35;
   */
  DFROBOT_RAIN = 35,

  /**
   *
   * Infineon DPS310 High accuracy pressure and temperature
   *
   * @generated from enum value: DPS310 = 36;
   */
  DPS310 = 36,

  /**
   *
   * RAKWireless RAK12035 Soil Moisture Sensor Module
   *
   * @generated from enum value: RAK12035 = 37;
   */
  RAK12035 = 37,
}

/**
 * Describes the enum meshtastic.TelemetrySensorType.
 */
export const TelemetrySensorTypeSchema: GenEnum<TelemetrySensorType> = /*@__PURE__*/
  enumDesc(file_meshtastic_telemetry, 0);

