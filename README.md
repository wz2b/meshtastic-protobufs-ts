# Meshtastic Javascript and Typescript libraries
for use with or without Node-Red

## Description

This package provides TypeScript-compatible protobuf message definitions for Meshtastic devices, compiled from the
official .proto files. It allows decoding and working with encrypted and map traffic in environments like Node-RED, MQTT
pipelines, or standalone TypeScript applications.

It includes:

✅ All .proto files from the Meshtastic project.  For the exact version,
see the [VERSION](./packages/@wz2b/meshtastic-protobuf-core/VERSION) file.

✅ Precompiled TypeScript/JavaScript classes (via protoc-gen-es)

✅ Licensing and version information for traceability

Use this package directly or as a dependency in higher-level projects like @wz2b/node-red-meshtastic-protobuf to handle
Meshtastic traffic in flow-based IoT or edge computing setups.

## License

This project is licensed under the GNU General Public License v3.0 (GPLv3).  
See the [LICENSE](./LICENSE) file for details.

### Included Meshtastic Protobuf Definitions

This project includes `.proto` files sourced from the [Meshtastic project](https://github.com/meshtastic/protobufs) (tag
`latest`), which are also licensed under GPLv3.

The relevant license file is included alongside the protobufs in [
`src/proto/LICENSE`](./packages/@wz2b/meshtastic-protobuf-core/src/proto/LICENSE).
