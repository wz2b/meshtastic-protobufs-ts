import * as crypto from "crypto";

/**
 * Decrypts a Meshtastic payload using AES-256-CTR mode.
 *
 * @param encryptedData Buffer containing the encrypted data (not base64)
 * @param key 32-byte encryption key (Buffer)
 * @param from Source node ID (number)
 * @param id Packet ID (number)
 * @returns Decrypted Buffer
 */
export function decryptMeshtastic(from: number, id: number, encryptedData: Buffer, key: Buffer): Buffer {
    // Construct 16-byte nonce: 8 bytes ID, 8 bytes FROM — both little-endian
    const nonce = Buffer.alloc(16);

    console.log("Nonce:", nonce.toString("hex"));
    console.log("key:  ", key.toString("hex"));

    nonce.writeBigUInt64LE(BigInt(id), 0);     // First 8 bytes: id
    nonce.writeBigUInt64LE(BigInt(from), 8);   // Next 8 bytes: from

    let algorithm;
    if (key.length === 16) {
        algorithm = "aes-128-ctr";
    } else if (key.length === 32) {
        algorithm = "aes-256-ctr";
    } else {
        throw new Error("Invalid key length. Key must be 16 bytes for AES-128 or 32 bytes for AES-256.");
    }

    const decipher = crypto.createDecipheriv(algorithm, key, nonce);
    const decrypted = Buffer.concat([
        decipher.update(encryptedData),
        decipher.final()
    ]);

    console.log("Data: ", decrypted.toString("hex"));
    return decrypted;
}
