//  AND opreations
// useful when we need extract bit that we are intersted in
const andBytes1 = 1;
const andBytes2 = 1001;

const andBytes = andBytes1 & andBytes2;
console.log("0001 AND 1001 = " + andBytes);

// OR operations
// usefull when we want to set a specific bit
const orBytes1 = 1;
const orBytes2 = 1001;

const orBytes = orBytes1 | orBytes2;
console.log("0001 OR 1001 = " + orBytes);

// XOR operations
// usefull when we want to flip a specifi bit
const xorBytes1 = 1;
const xorBytes2 = 1001;

const xorBytes = xorBytes1 ^ xorBytes2;
console.log("0001 XOR 1001 = " + xorBytes);

// shift operations
// usefull when we want to shift (left or right) and pad with zeros
// or when we want to multiply or devide by 2
// ">>" to shift to the right, "<<" to the left
const shiftBytes1 = 1001;

// devide by two
const shiftRightBytes = shiftBytes1 >> 1;
// multiply by two
const shiftLeftBytes = shiftBytes1 << 1;
console.log("1001 shifted to the right by 1 = " + shiftRightBytes);
console.log("1001 shifted to the left by 1 = " + shiftLeftBytes);
