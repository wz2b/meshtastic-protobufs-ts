// @generated by protoc-gen-es v2.2.5 with parameter "target=js+dts,import_extension=js"
// @generated from file meshtastic/portnums.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import { enumDesc, fileDesc, tsEnum } from "@bufbuild/protobuf/codegenv1";

/**
 * Describes the file meshtastic/portnums.proto.
 */
export const file_meshtastic_portnums = /*@__PURE__*/
  fileDesc("ChltZXNodGFzdGljL3BvcnRudW1zLnByb3RvEgptZXNodGFzdGljKssECgdQb3J0TnVtEg8KC1VOS05PV05fQVBQEAASFAoQVEVYVF9NRVNTQUdFX0FQUBABEhcKE1JFTU9URV9IQVJEV0FSRV9BUFAQAhIQCgxQT1NJVElPTl9BUFAQAxIQCgxOT0RFSU5GT19BUFAQBBIPCgtST1VUSU5HX0FQUBAFEg0KCUFETUlOX0FQUBAGEh8KG1RFWFRfTUVTU0FHRV9DT01QUkVTU0VEX0FQUBAHEhAKDFdBWVBPSU5UX0FQUBAIEg0KCUFVRElPX0FQUBAJEhgKFERFVEVDVElPTl9TRU5TT1JfQVBQEAoSDQoJQUxFUlRfQVBQEAsSDQoJUkVQTFlfQVBQECASEQoNSVBfVFVOTkVMX0FQUBAhEhIKDlBBWENPVU5URVJfQVBQECISDgoKU0VSSUFMX0FQUBBAEhUKEVNUT1JFX0ZPUldBUkRfQVBQEEESEgoOUkFOR0VfVEVTVF9BUFAQQhIRCg1URUxFTUVUUllfQVBQEEMSCwoHWlBTX0FQUBBEEhEKDVNJTVVMQVRPUl9BUFAQRRISCg5UUkFDRVJPVVRFX0FQUBBGEhQKEE5FSUdIQk9SSU5GT19BUFAQRxIPCgtBVEFLX1BMVUdJThBIEhIKDk1BUF9SRVBPUlRfQVBQEEkSEwoPUE9XRVJTVFJFU1NfQVBQEEoSGAoUUkVUSUNVTFVNX1RVTk5FTF9BUFAQTBIQCgtQUklWQVRFX0FQUBCAAhITCg5BVEFLX0ZPUldBUkRFUhCBAhIICgNNQVgQ/wNCXQoTY29tLmdlZWtzdmlsbGUubWVzaEIIUG9ydG51bXNaImdpdGh1Yi5jb20vbWVzaHRhc3RpYy9nby9nZW5lcmF0ZWSqAhRNZXNodGFzdGljLlByb3RvYnVmc7oCAGIGcHJvdG8z");

/**
 * Describes the enum meshtastic.PortNum.
 */
export const PortNumSchema = /*@__PURE__*/
  enumDesc(file_meshtastic_portnums, 0);

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
export const PortNum = /*@__PURE__*/
  tsEnum(PortNumSchema);

