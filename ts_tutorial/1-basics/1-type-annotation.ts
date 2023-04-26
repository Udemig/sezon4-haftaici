/**
 * -> Tür tanımlama işlemi nasıl yapılır?
 *
 * Değişken yazıldıktan sonra iki nokta üst üste konulur ve tür yazılır.
 * Sonra eşittir diyerek o türden bir değer ataması yapılır.
 */

let firstname: string = "ahmet";
firstname = "mehmet";

let age: number = 0;
age = 15;

let is_graduated: boolean = false;

is_graduated = true;

/**
 * Eğer bir değişkenin türü belirtilmemişse o değişkenin türü
 * ilk atanan değerin türüdür. Bu otomatik tür belirleme işlemi
 * typescript tarafından yapılır.
 */
let lastname = "koçak";
lastname = "test";

// typeof ifadesi kendinden sonra gelen değişkenin "primitive tür" ismini verir.
console.log("lastname type: ", typeof lastname);

console.log(`merhaba, benim adım ${firstname}`);
