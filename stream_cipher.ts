// the key in generated using PRNG (psudo random generator)

// the Encryption works by OXR the plaintext with key
// the Decryption works by OXR the ciphertext with key

// it is safe enough to use if the key is long and random

// the same key (keystream) must never be reused!
// we can use the same key but we have to modify it
// everytime it's used, for example we can
// add a unique nonce to the key
// the nonce dont have to be encrypted, and it can be :
// incremental or timestamp or random, or combinations of the previous
