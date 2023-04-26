/**
 * string, sıklıkla kullandığımız bir type'tır. Typescript'te tüm stringler
 * utf-8 (yada utf-16 da olabilir) olduğu için emoji ve farklı alfabelere
 * ait olan string ifadelerini de içerebilir.
 */

let example_name: string = "ahmet";
console.log(example_name);

example_name = "ayşe";
console.log(example_name);

// çoklu satırlı stringleri bu şekilde yazabiliriz.
example_name = `bu örnek bir
çoklu satır
yazım ifadesidir.
😀 😃 😄 😁 😆
你去哪儿?
我去食堂吃饭。
`;
console.log(example_name);

example_name = "ahmet" + "berkay" + "koçak";
console.log(example_name);

// Dizilerdeki join() fonksiyonu string dönderir.
example_name = ["emir", "buğra", "köksalan"].join(" ");

console.log(example_name);
