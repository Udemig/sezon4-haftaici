/**
 * Javascriptin kendisi bazı primitive türlere sahiptir. Aynı türler
 * Typescript'te de mevcuttur. Bu primitive türlerin isimleri şunlardır:
 *
 *   - number
 *   - string
 *   - boolean
 *   - array
 *   - object
 *
 */

let price: number;

// decimal formatta sayı yazmak:
price = 100;
console.log("price: ", price);

price = 500_000_000_000;
console.log("price: ", price);

price = 5e11; // 5 * 10 ^ 11
console.log("price: ", price);

// hexadecimal formatta sayı yazmak:
let color = 0xfc;
console.log("color: ", color);

color = 0xfffffc;
console.log("color: ", color);

// binary formatta sayı yazmak:
let example_binary = 0b010110100101;
console.log("example_binary: ", example_binary);

example_binary = 0b110110;
console.log("example_binary: ", example_binary);

// octal formatta sayı yazmak:
let octal_example = 0o10;
console.log("octal_example: ", octal_example);

octal_example = 0o11;
console.log("octal_example: ", octal_example);

// kayar noktalı sayı:

let float_example: number = 10.5;
console.log("float_example: ", float_example);

float_example = 345345.934875924;
console.log("float_example: ", float_example);

//color : '#ff0000'
//color: rgb(255, 0, 0)
