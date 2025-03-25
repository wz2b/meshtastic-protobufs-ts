// @generated by protoc-gen-es v2.2.5 with parameter "target=js+dts,import_extension=js"
// @generated from file meshtastic/channel.proto (package meshtastic, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file meshtastic/channel.proto.
 */
export declare const file_meshtastic_channel: GenFile;

/**
 *
 * This information can be encoded as a QRcode/url so that other users can configure
 * their radio to join the same channel.
 * A note about how channel names are shown to users: channelname-X
 * poundsymbol is a prefix used to indicate this is a channel name (idea from @professr).
 * Where X is a letter from A-Z (base 26) representing a hash of the PSK for this
 * channel - so that if the user changes anything about the channel (which does
 * force a new PSK) this letter will also change. Thus preventing user confusion if
 * two friends try to type in a channel name of "BobsChan" and then can't talk
 * because their PSKs will be different.
 * The PSK is hashed into this letter by "0x41 + [xor all bytes of the psk ] modulo 26"
 * This also allows the option of someday if people have the PSK off (zero), the
 * users COULD type in a channel name and be able to talk.
 * FIXME: Add description of multi-channel support and how primary vs secondary channels are used.
 * FIXME: explain how apps use channels for security.
 * explain how remote settings and remote gpio are managed as an example
 *
 * @generated from message meshtastic.ChannelSettings
 */
export declare type ChannelSettings = Message<"meshtastic.ChannelSettings"> & {
  /**
   *
   * Deprecated in favor of LoraConfig.channel_num
   *
   * @generated from field: uint32 channel_num = 1 [deprecated = true];
   * @deprecated
   */
  channelNum: number;

  /**
   *
   * A simple pre-shared key for now for crypto.
   * Must be either 0 bytes (no crypto), 16 bytes (AES128), or 32 bytes (AES256).
   * A special shorthand is used for 1 byte long psks.
   * These psks should be treated as only minimally secure,
   * because they are listed in this source code.
   * Those bytes are mapped using the following scheme:
   * `0` = No crypto
   * `1` = The special "default" channel key: {0xd4, 0xf1, 0xbb, 0x3a, 0x20, 0x29, 0x07, 0x59, 0xf0, 0xbc, 0xff, 0xab, 0xcf, 0x4e, 0x69, 0x01}
   * `2` through 10 = The default channel key, except with 1 through 9 added to the last byte.
   * Shown to user as simple1 through 10
   *
   * @generated from field: bytes psk = 2;
   */
  psk: Uint8Array;

  /**
   *
   * A SHORT name that will be packed into the URL.
   * Less than 12 bytes.
   * Something for end users to call the channel
   * If this is the empty string it is assumed that this channel
   * is the special (minimally secure) "Default"channel.
   * In user interfaces it should be rendered as a local language translation of "X".
   * For channel_num hashing empty string will be treated as "X".
   * Where "X" is selected based on the English words listed above for ModemPreset
   *
   * @generated from field: string name = 3;
   */
  name: string;

  /**
   *
   * Used to construct a globally unique channel ID.
   * The full globally unique ID will be: "name.id" where ID is shown as base36.
   * Assuming that the number of meshtastic users is below 20K (true for a long time)
   * the chance of this 64 bit random number colliding with anyone else is super low.
   * And the penalty for collision is low as well, it just means that anyone trying to decrypt channel messages might need to
   * try multiple candidate channels.
   * Any time a non wire compatible change is made to a channel, this field should be regenerated.
   * There are a small number of 'special' globally known (and fairly) insecure standard channels.
   * Those channels do not have a numeric id included in the settings, but instead it is pulled from
   * a table of well known IDs.
   * (see Well Known Channels FIXME)
   *
   * @generated from field: fixed32 id = 4;
   */
  id: number;

  /**
   *
   * If true, messages on the mesh will be sent to the *public* internet by any gateway ndoe
   *
   * @generated from field: bool uplink_enabled = 5;
   */
  uplinkEnabled: boolean;

  /**
   *
   * If true, messages seen on the internet will be forwarded to the local mesh.
   *
   * @generated from field: bool downlink_enabled = 6;
   */
  downlinkEnabled: boolean;

  /**
   *
   * Per-channel module settings.
   *
   * @generated from field: meshtastic.ModuleSettings module_settings = 7;
   */
  moduleSettings?: ModuleSettings;
};

/**
 * Describes the message meshtastic.ChannelSettings.
 * Use `create(ChannelSettingsSchema)` to create a new message.
 */
export declare const ChannelSettingsSchema: GenMessage<ChannelSettings>;

/**
 *
 * This message is specifically for modules to store per-channel configuration data.
 *
 * @generated from message meshtastic.ModuleSettings
 */
export declare type ModuleSettings = Message<"meshtastic.ModuleSettings"> & {
  /**
   *
   * Bits of precision for the location sent in position packets.
   *
   * @generated from field: uint32 position_precision = 1;
   */
  positionPrecision: number;

  /**
   *
   * Controls whether or not the phone / clients should mute the current channel
   * Useful for noisy public channels you don't necessarily want to disable
   *
   * @generated from field: bool is_client_muted = 2;
   */
  isClientMuted: boolean;
};

/**
 * Describes the message meshtastic.ModuleSettings.
 * Use `create(ModuleSettingsSchema)` to create a new message.
 */
export declare const ModuleSettingsSchema: GenMessage<ModuleSettings>;

/**
 *
 * A pair of a channel number, mode and the (sharable) settings for that channel
 *
 * @generated from message meshtastic.Channel
 */
export declare type Channel = Message<"meshtastic.Channel"> & {
  /**
   *
   * The index of this channel in the channel table (from 0 to MAX_NUM_CHANNELS-1)
   * (Someday - not currently implemented) An index of -1 could be used to mean "set by name",
   * in which case the target node will find and set the channel by settings.name.
   *
   * @generated from field: int32 index = 1;
   */
  index: number;

  /**
   *
   * The new settings, or NULL to disable that channel
   *
   * @generated from field: meshtastic.ChannelSettings settings = 2;
   */
  settings?: ChannelSettings;

  /**
   *
   * TODO: REPLACE
   *
   * @generated from field: meshtastic.Channel.Role role = 3;
   */
  role: Channel_Role;
};

/**
 * Describes the message meshtastic.Channel.
 * Use `create(ChannelSchema)` to create a new message.
 */
export declare const ChannelSchema: GenMessage<Channel>;

/**
 *
 * How this channel is being used (or not).
 * Note: this field is an enum to give us options for the future.
 * In particular, someday we might make a 'SCANNING' option.
 * SCANNING channels could have different frequencies and the radio would
 * occasionally check that freq to see if anything is being transmitted.
 * For devices that have multiple physical radios attached, we could keep multiple PRIMARY/SCANNING channels active at once to allow
 * cross band routing as needed.
 * If a device has only a single radio (the common case) only one channel can be PRIMARY at a time
 * (but any number of SECONDARY channels can't be sent received on that common frequency)
 *
 * @generated from enum meshtastic.Channel.Role
 */
export enum Channel_Role {
  /**
   *
   * This channel is not in use right now
   *
   * @generated from enum value: DISABLED = 0;
   */
  DISABLED = 0,

  /**
   *
   * This channel is used to set the frequency for the radio - all other enabled channels must be SECONDARY
   *
   * @generated from enum value: PRIMARY = 1;
   */
  PRIMARY = 1,

  /**
   *
   * Secondary channels are only used for encryption/decryption/authentication purposes.
   * Their radio settings (freq etc) are ignored, only psk is used.
   *
   * @generated from enum value: SECONDARY = 2;
   */
  SECONDARY = 2,
}

/**
 * Describes the enum meshtastic.Channel.Role.
 */
export declare const Channel_RoleSchema: GenEnum<Channel_Role>;

