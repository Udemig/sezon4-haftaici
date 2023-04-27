/**
 * Bazen typescriptte bir değişkenin farklı türlerden datalar alması
 * gerektiği durumlar oluşabilir. Bu durumda `any` type'ını kullanabiliriz.
 * `any` türünden tanımlanan bir değişken her türden değer alabilir.
 * Bu açıdan any'nin kullanımı klasik javascripte benzer.
 *
 * Fakat normal şartlarda any'nin kullanımı typescript'e uygun değildir.
 * Acil durumlarda any iş görür fakat durumun aciliyeti geçtikten sonra
 * mutlakaa code review yapılarak `any` türünden olan tüm değişkenlerin
 * gerçek türlerinin yazılması gerekir.
 *
 * Bunun dışında da yine `any` type'ının kullanıldığı daha farklı durumlar
 * ilerleyen zamanlarda görebiliriz.
 */

let example_variable: any = "test";
console.log("example var:", typeof example_variable, example_variable);

example_variable = 10;
console.log("example var:", typeof example_variable, example_variable);

example_variable = false;
console.log("example var:", typeof example_variable, example_variable);

let example_2: any = {
  id: 1,
  firstname: "ahmet",
};

example_2 = "senger";
example_2 = {
  name: "turgay",
  lastname: "çelen",
};
