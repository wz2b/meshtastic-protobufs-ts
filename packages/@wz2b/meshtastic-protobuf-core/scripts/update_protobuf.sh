#!/bin/bash

# Exit on error
set -e

# Fetch the latest release tag using GitHub API
latest_tag=$(curl -s https://api.github.com/repos/meshtastic/protobufs/releases/latest | jq -r .tag_name)
echo "Latest tag: $latest_tag"

# Set variables
VERSION=$latest_tag
TAR_URL="https://github.com/meshtastic/protobufs/archive/refs/tags/${VERSION}.tar.gz"
TMP_DIR=".tmp_proto"
PROTO_DIR="packages/@wz2b/meshtastic-protobuf-core/src/proto"
PROTO_SRC_SUBDIR="meshtastic"

# Clean and prepare directories
rm -rf "$TMP_DIR"
mkdir -p "$TMP_DIR"
mkdir -p "$PROTO_DIR"

# Download and extract the tarball, stripping the top-level folder
curl -L "$TAR_URL" | tar -xz --strip-components=1 -C "$TMP_DIR"

# Copy .proto files from meshtastic/ into the core project's src/proto
cp "$TMP_DIR/$PROTO_SRC_SUBDIR"/*.proto "$PROTO_DIR"

# Copy LICENSE file to the same destination
cp "$TMP_DIR/LICENSE" "$PROTO_DIR/LICENSE"

# Create VERSION file to record where these came from
echo "version: $VERSION" > "$PROTO_DIR/VERSION"
echo "source: $TAR_URL" >> "$PROTO_DIR/VERSION"

# Clean up temp folder
rm -rf "$TMP_DIR"

echo "Protobuf files successfully updated to $VERSION"
