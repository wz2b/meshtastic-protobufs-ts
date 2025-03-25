// @generated by protoc-gen-es v2.2.5 with parameter "target=js+dts,import_extension=js"
// @generated from file meshtastic/telemetry.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file meshtastic/telemetry.proto.
 */
export declare const file_meshtastic_telemetry: GenFile;

/**
 *
 * Key native device metrics such as battery level
 *
 * @generated from message meshtastic.DeviceMetrics
 */
export declare type DeviceMetrics = Message<"meshtastic.DeviceMetrics"> & {
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
export declare const DeviceMetricsSchema: GenMessage<DeviceMetrics>;

/**
 *
 * Weather station or other environmental metrics
 *
 * @generated from message meshtastic.EnvironmentMetrics
 */
export declare type EnvironmentMetrics = Message<"meshtastic.EnvironmentMetrics"> & {
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
export declare const EnvironmentMetricsSchema: GenMessage<EnvironmentMetrics>;

/**
 *
 * Power Metrics (voltage / current / etc)
 *
 * @generated from message meshtastic.PowerMetrics
 */
export declare type PowerMetrics = Message<"meshtastic.PowerMetrics"> & {
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
export declare const PowerMetricsSchema: GenMessage<PowerMetrics>;

/**
 *
 * Air quality metrics
 *
 * @generated from message meshtastic.AirQualityMetrics
 */
export declare type AirQualityMetrics = Message<"meshtastic.AirQualityMetrics"> & {
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
export declare const AirQualityMetricsSchema: GenMessage<AirQualityMetrics>;

/**
 *
 * Local device mesh statistics
 *
 * @generated from message meshtastic.LocalStats
 */
export declare type LocalStats = Message<"meshtastic.LocalStats"> & {
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
export declare const LocalStatsSchema: GenMessage<LocalStats>;

/**
 *
 * Health telemetry metrics
 *
 * @generated from message meshtastic.HealthMetrics
 */
export declare type HealthMetrics = Message<"meshtastic.HealthMetrics"> & {
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
export declare const HealthMetricsSchema: GenMessage<HealthMetrics>;

/**
 *
 * Types of Measurements the telemetry module is equipped to handle
 *
 * @generated from message meshtastic.Telemetry
 */
export declare type Telemetry = Message<"meshtastic.Telemetry"> & {
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
export declare const TelemetrySchema: GenMessage<Telemetry>;

/**
 *
 * NAU7802 Telemetry configuration, for saving to flash
 *
 * @generated from message meshtastic.Nau7802Config
 */
export declare type Nau7802Config = Message<"meshtastic.Nau7802Config"> & {
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
export declare const Nau7802ConfigSchema: GenMessage<Nau7802Config>;

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
export declare const TelemetrySensorTypeSchema: GenEnum<TelemetrySensorType>;

