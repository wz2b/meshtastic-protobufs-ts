// @generated by protoc-gen-es v2.2.5 with parameter "target=ts,import_extension=js"
// @generated from file meshtastic/portnums.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file meshtastic/portnums.proto.
 */
export const file_meshtastic_portnums: GenFile = /*@__PURE__*/
  fileDesc("ChltZXNodGFzdGljL3BvcnRudW1zLnByb3RvEgptZXNodGFzdGljKssECgdQb3J0TnVtEg8KC1VOS05PV05fQVBQEAASFAoQVEVYVF9NRVNTQUdFX0FQUBABEhcKE1JFTU9URV9IQVJEV0FSRV9BUFAQAhIQCgxQT1NJVElPTl9BUFAQAxIQCgxOT0RFSU5GT19BUFAQBBIPCgtST1VUSU5HX0FQUBAFEg0KCUFETUlOX0FQUBAGEh8KG1RFWFRfTUVTU0FHRV9DT01QUkVTU0VEX0FQUBAHEhAKDFdBWVBPSU5UX0FQUBAIEg0KCUFVRElPX0FQUBAJEhgKFERFVEVDVElPTl9TRU5TT1JfQVBQEAoSDQoJQUxFUlRfQVBQEAsSDQoJUkVQTFlfQVBQECASEQoNSVBfVFVOTkVMX0FQUBAhEhIKDlBBWENPVU5URVJfQVBQECISDgoKU0VSSUFMX0FQUBBAEhUKEVNUT1JFX0ZPUldBUkRfQVBQEEESEgoOUkFOR0VfVEVTVF9BUFAQQhIRCg1URUxFTUVUUllfQVBQEEMSCwoHWlBTX0FQUBBEEhEKDVNJTVVMQVRPUl9BUFAQRRISCg5UUkFDRVJPVVRFX0FQUBBGEhQKEE5FSUdIQk9SSU5GT19BUFAQRxIPCgtBVEFLX1BMVUdJThBIEhIKDk1BUF9SRVBPUlRfQVBQEEkSEwoPUE9XRVJTVFJFU1NfQVBQEEoSGAoUUkVUSUNVTFVNX1RVTk5FTF9BUFAQTBIQCgtQUklWQVRFX0FQUBCAAhITCg5BVEFLX0ZPUldBUkRFUhCBAhIICgNNQVgQ/wNCXQoTY29tLmdlZWtzdmlsbGUubWVzaEIIUG9ydG51bXNaImdpdGh1Yi5jb20vbWVzaHRhc3RpYy9nby9nZW5lcmF0ZWSqAhRNZXNodGFzdGljLlByb3RvYnVmc7oCAGIGcHJvdG8z");

/**
 *
 * For any new 'apps' that run on the device or via sister apps on phones/PCs they should pick and use a
 * unique 'portnum' for their application.
 * If you are making a new app using meshtastic, please send in a pull request to add your 'portnum' to this
 * master table.
 * PortNums should be assigned in the following range:
 * 0-63   Core Meshtastic use, do not use for third party apps
 * 64-127 Registered 3rd party apps, send in a pull request that adds a new entry to portnums.proto to  register your application
 * 256-511 Use one of these portnums for your private applications that you don't want to register publically
 * All other values are reserved.
 * Note: This was formerly a Type enum named 'typ' with the same id #
 * We have change to this 'portnum' based scheme for specifying app handlers for particular payloads.
 * This change is backwards compatible by treating the legacy OPAQUE/CLEAR_TEXT values identically.
 *
 * @generated from enum meshtastic.PortNum
 */
export enum PortNum {
  /**
   *
   * Deprecated: do not use in new code (formerly called OPAQUE)
   * A message sent from a device outside of the mesh, in a form the mesh does not understand
   * NOTE: This must be 0, because it is documented in IMeshService.aidl to be so
   * ENCODING: binary undefined
   *
   * @generated from enum value: UNKNOWN_APP = 0;
   */
  UNKNOWN_APP = 0,

  /**
   *
   * A simple UTF-8 text message, which even the little micros in the mesh
   * can understand and show on their screen eventually in some circumstances
   * even signal might send messages in this form (see below)
   * ENCODING: UTF-8 Plaintext (?)
   *
   * @generated from enum value: TEXT_MESSAGE_APP = 1;
   */
  TEXT_MESSAGE_APP = 1,

  /**
   *
   * Reserved for built-in GPIO/example app.
   * See remote_hardware.proto/HardwareMessage for details on the message sent/received to this port number
   * ENCODING: Protobuf
   *
   * @generated from enum value: REMOTE_HARDWARE_APP = 2;
   */
  REMOTE_HARDWARE_APP = 2,

  /**
   *
   * The built-in position messaging app.
   * Payload is a Position message.
   * ENCODING: Protobuf
   *
   * @generated from enum value: POSITION_APP = 3;
   */
  POSITION_APP = 3,

  /**
   *
   * The built-in user info app.
   * Payload is a User message.
   * ENCODING: Protobuf
   *
   * @generated from enum value: NODEINFO_APP = 4;
   */
  NODEINFO_APP = 4,

  /**
   *
   * Protocol control packets for mesh protocol use.
   * Payload is a Routing message.
   * ENCODING: Protobuf
   *
   * @generated from enum value: ROUTING_APP = 5;
   */
  ROUTING_APP = 5,

  /**
   *
   * Admin control packets.
   * Payload is a AdminMessage message.
   * ENCODING: Protobuf
   *
   * @generated from enum value: ADMIN_APP = 6;
   */
  ADMIN_APP = 6,

  /**
   *
   * Compressed TEXT_MESSAGE payloads.
   * ENCODING: UTF-8 Plaintext (?) with Unishox2 Compression
   * NOTE: The Device Firmware converts a TEXT_MESSAGE_APP to TEXT_MESSAGE_COMPRESSED_APP if the compressed
   * payload is shorter. There's no need for app developers to do this themselves. Also the firmware will decompress
   * any incoming TEXT_MESSAGE_COMPRESSED_APP payload and convert to TEXT_MESSAGE_APP.
   *
   * @generated from enum value: TEXT_MESSAGE_COMPRESSED_APP = 7;
   */
  TEXT_MESSAGE_COMPRESSED_APP = 7,

  /**
   *
   * Waypoint payloads.
   * Payload is a Waypoint message.
   * ENCODING: Protobuf
   *
   * @generated from enum value: WAYPOINT_APP = 8;
   */
  WAYPOINT_APP = 8,

  /**
   *
   * Audio Payloads.
   * Encapsulated codec2 packets. On 2.4 GHZ Bandwidths only for now
   * ENCODING: codec2 audio frames
   * NOTE: audio frames contain a 3 byte header (0xc0 0xde 0xc2) and a one byte marker for the decompressed bitrate.
   * This marker comes from the 'moduleConfig.audio.bitrate' enum minus one.
   *
   * @generated from enum value: AUDIO_APP = 9;
   */
  AUDIO_APP = 9,

  /**
   *
   * Same as Text Message but originating from Detection Sensor Module.
   * NOTE: This portnum traffic is not sent to the public MQTT starting at firmware version 2.2.9
   *
   * @generated from enum value: DETECTION_SENSOR_APP = 10;
   */
  DETECTION_SENSOR_APP = 10,

  /**
   *
   * Same as Text Message but used for critical alerts.
   *
   * @generated from enum value: ALERT_APP = 11;
   */
  ALERT_APP = 11,

  /**
   *
   * Provides a 'ping' service that replies to any packet it receives.
   * Also serves as a small example module.
   * ENCODING: ASCII Plaintext
   *
   * @generated from enum value: REPLY_APP = 32;
   */
  REPLY_APP = 32,

  /**
   *
   * Used for the python IP tunnel feature
   * ENCODING: IP Packet. Handled by the python API, firmware ignores this one and pases on.
   *
   * @generated from enum value: IP_TUNNEL_APP = 33;
   */
  IP_TUNNEL_APP = 33,

  /**
   *
   * Paxcounter lib included in the firmware
   * ENCODING: protobuf
   *
   * @generated from enum value: PAXCOUNTER_APP = 34;
   */
  PAXCOUNTER_APP = 34,

  /**
   *
   * Provides a hardware serial interface to send and receive from the Meshtastic network.
   * Connect to the RX/TX pins of a device with 38400 8N1. Packets received from the Meshtastic
   * network is forwarded to the RX pin while sending a packet to TX will go out to the Mesh network.
   * Maximum packet size of 240 bytes.
   * Module is disabled by default can be turned on by setting SERIAL_MODULE_ENABLED = 1 in SerialPlugh.cpp.
   * ENCODING: binary undefined
   *
   * @generated from enum value: SERIAL_APP = 64;
   */
  SERIAL_APP = 64,

  /**
   *
   * STORE_FORWARD_APP (Work in Progress)
   * Maintained by Jm Casler (MC Hamster) : jm@casler.org
   * ENCODING: Protobuf
   *
   * @generated from enum value: STORE_FORWARD_APP = 65;
   */
  STORE_FORWARD_APP = 65,

  /**
   *
   * Optional port for messages for the range test module.
   * ENCODING: ASCII Plaintext
   * NOTE: This portnum traffic is not sent to the public MQTT starting at firmware version 2.2.9
   *
   * @generated from enum value: RANGE_TEST_APP = 66;
   */
  RANGE_TEST_APP = 66,

  /**
   *
   * Provides a format to send and receive telemetry data from the Meshtastic network.
   * Maintained by Charles Crossan (crossan007) : crossan007@gmail.com
   * ENCODING: Protobuf
   *
   * @generated from enum value: TELEMETRY_APP = 67;
   */
  TELEMETRY_APP = 67,

  /**
   *
   * Experimental tools for estimating node position without a GPS
   * Maintained by Github user a-f-G-U-C (a Meshtastic contributor)
   * Project files at https://github.com/a-f-G-U-C/Meshtastic-ZPS
   * ENCODING: arrays of int64 fields
   *
   * @generated from enum value: ZPS_APP = 68;
   */
  ZPS_APP = 68,

  /**
   *
   * Used to let multiple instances of Linux native applications communicate
   * as if they did using their LoRa chip.
   * Maintained by GitHub user GUVWAF.
   * Project files at https://github.com/GUVWAF/Meshtasticator
   * ENCODING: Protobuf (?)
   *
   * @generated from enum value: SIMULATOR_APP = 69;
   */
  SIMULATOR_APP = 69,

  /**
   *
   * Provides a traceroute functionality to show the route a packet towards
   * a certain destination would take on the mesh. Contains a RouteDiscovery message as payload.
   * ENCODING: Protobuf
   *
   * @generated from enum value: TRACEROUTE_APP = 70;
   */
  TRACEROUTE_APP = 70,

  /**
   *
   * Aggregates edge info for the network by sending out a list of each node's neighbors
   * ENCODING: Protobuf
   *
   * @generated from enum value: NEIGHBORINFO_APP = 71;
   */
  NEIGHBORINFO_APP = 71,

  /**
   *
   * ATAK Plugin
   * Portnum for payloads from the official Meshtastic ATAK plugin
   *
   * @generated from enum value: ATAK_PLUGIN = 72;
   */
  ATAK_PLUGIN = 72,

  /**
   *
   * Provides unencrypted information about a node for consumption by a map via MQTT
   *
   * @generated from enum value: MAP_REPORT_APP = 73;
   */
  MAP_REPORT_APP = 73,

  /**
   *
   * PowerStress based monitoring support (for automated power consumption testing)
   *
   * @generated from enum value: POWERSTRESS_APP = 74;
   */
  POWERSTRESS_APP = 74,

  /**
   *
   * Reticulum Network Stack Tunnel App
   * ENCODING: Fragmented RNS Packet. Handled by Meshtastic RNS interface
   *
   * @generated from enum value: RETICULUM_TUNNEL_APP = 76;
   */
  RETICULUM_TUNNEL_APP = 76,

  /**
   *
   * Private applications should use portnums >= 256.
   * To simplify initial development and testing you can use "PRIVATE_APP"
   * in your code without needing to rebuild protobuf files (via [regen-protos.sh](https://github.com/meshtastic/firmware/blob/master/bin/regen-protos.sh))
   *
   * @generated from enum value: PRIVATE_APP = 256;
   */
  PRIVATE_APP = 256,

  /**
   *
   * ATAK Forwarder Module https://github.com/paulmandal/atak-forwarder
   * ENCODING: libcotshrink
   *
   * @generated from enum value: ATAK_FORWARDER = 257;
   */
  ATAK_FORWARDER = 257,

  /**
   *
   * Currently we limit port nums to no higher than this value
   *
   * @generated from enum value: MAX = 511;
   */
  MAX = 511,
}

/**
 * Describes the enum meshtastic.PortNum.
 */
export const PortNumSchema: GenEnum<PortNum> = /*@__PURE__*/
  enumDesc(file_meshtastic_portnums, 0);

