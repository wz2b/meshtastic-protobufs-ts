#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Check if the protobufs directory exists and is not empty
if [ -d "meshtastic" ] && [ "$(ls -A meshtastic)" ]; then
  echo "protobufs directory exists. Performing git pull..."
  cd meshtastic
  git fetch --tags
  git checkout master
  git pull origin master
else
  echo "Cloning the Meshtastic protobuf library..."
  git clone https://github.com/meshtastic/protobufs.git meshtastic
  cd meshtastic
fi

# Fetch the latest release tag using GitHub API
latest_tag=$(curl -s https://api.github.com/repos/meshtastic/protobufs/releases/latest | jq -r .tag_name)
echo "Latest tag: $latest_tag"

# Checkout the latest release tag
git fetch --tags
git checkout tags/$latest_tag

# Go back to root so npm install is in the correct directory
cd ..

# Install dependencies (including protoc-gen-es)
npm install

# Generate TypeScript files using @bufbuild/protobuf
echo 'Generating TypeScript objects'
mkdir -p generated

npx protoc \
  --plugin=protoc-gen-es=./node_modules/.bin/protoc-gen-es \
  --experimental_allow_proto3_optional \
  --es_out=target=js+dts,mode=development,import_extension=ts:./generated \
  --proto_path=meshtastic \
  meshtastic/meshtastic/*.proto

# Generate an index file for exports
echo 'Generating index.ts'
echo "export * from './generated';" > generated/index.ts

# Package the library
npm pack

# Publish to npm (optional)
# npm publish
