/*
Hashing is a one way function, so it means if you hash some text twice, 
you will get the same Hash.

Hash functions it can be used to produce:
- hash
- fingerPrint
- checksum
- message digest

the hash function takes variable length values, but produce 
fixed lenghts hashes


properties of a hash function:
1- fast to compute a hash
2- hard to restore the message from the hash value (one way)
3- hard to find messages with the same hash
4- similar messages should have a very different value


Attacks: 

1- collision hash
2- preimage attack
3- second preimage attack


MD5 hashes can brute forced with collision attacks, 
and you can't trust that if you have the same hash values
that it will have the same input!.

SHA - 1 160 bit output, is not fully secure anymore.

SHA - 
*/
