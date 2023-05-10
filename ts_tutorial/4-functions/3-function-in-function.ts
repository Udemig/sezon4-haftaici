/**
 * Fonksiyonlar fonksiyon alabilir ve fonksiyon dönderebilir. Bu şekilde tanımlanması gereken bir
 * değişken olduğunda bunun type'ının nasıl tanımlanması gerektiğini göreceğiz.
 *
 * TODO Detaylı yorum yaz.
 */

/*

type ReturnTypeOfUseState = [any, Function];

const exampleVal: ReturnTypeOfUseState = ["test", () => {}];

type ExampleUnion = "mon" | "tue" | "wed";

const [counter, setCounter] = useState(0);

useEffect(() => {
  return () => {};
}, []);

let example_array: string[] = [
  "ahmet",
  "ayşe",
  "fadime",
  "hümeyra",
  "hüseyin",
  "nutuya",
];

for (let i = 0; i < example_array.length; i++) {
  console.log(example_array[i]);
}

example_array.forEach((item, index, original_array) => {
  console.log("burası arrow function");
});

example_array.filter((item) => item.id > 10);

const cb_func = (item, index) => {
  return item.id * 2;
};

example_array.map(cb_func);

*/

/**
 * 1. Bir fonksiyon tanımlayalım ve ilk parametresi fonksiyon olsun.
 *    Buradaki örnek gerçek bir dünya problemine (senaryoya) göre değil, sadece
 *    nasıl tanımlandığını görebilmek için yapıyoruz.
 */

type FunctionGettingFunctionType = (param1: () => number) => string;

const exampleFn: FunctionGettingFunctionType = (
  param1: () => number
): string => {
  // DİKKAT! `param1` bir fonksiyondur ve çağırılabilir ve gelen değer bir değişkene aktarılabilir.
  const result = param1();

  if (result < 0) {
    return "negatif değer girildi";
  } else if (result === 0) {
    return "sıfır değeri girildi";
  } else if (result < 5) {
    return "beşten küçük bir değer girildi";
  } else {
    return "beş veya beşten büyük bir değer girildi";
  }
};

const example_fn_result = exampleFn(() => {
  return 10;
});

console.log("example_fn_result: ", example_fn_result);

/**
 * 1.1. Şimdi gerçek bir problemi çözelim. Dizilerin elemanlarını parametreden gelen fonksiyona
 *      gönderen bir fonksiyon yazalım (forEach gibi).
 */

type CustomForEachFuncType = (
  param1: (item: any, index: number) => void,
  param2: any[]
) => void;

const customForEach: CustomForEachFuncType = (
  param1: (item: any, index: number) => void,
  param2: any[]
): void => {
  console.log(">> customForEach_1 fonksiyonu çağırıldı.");

  // Burası fonksiyonun implement edildiği yer.
  for (let i = 0; i < param2.length; i++) {
    console.log(">> for döngüsü index: ", i);

    // DİKKAT! tam olarak burada param1 fonksiyonunu çağırıyoruz.
    param1(param2[i], i);
  }
};

let student_names_1: string[] = [
  "ahmet",
  "ayşe",
  "fadime",
  "gökhan",
  "hümeyra",
  "hüseyin",
];

console.log(">> customForEach_1 fonksiyonu çağırılıyor.");

customForEach((item, index) => {
  console.log(
    `>> parametreden gelen fonksiyon çağırıldı, item: ${item} index: ${index}`
  );
}, student_names_1);

console.log("-------------------------------------------------------------");
console.log(">> customForEach_1 fonksiyonu tekrar çağırılıyor.");

customForEach((item, index) => {
  // customForEach_1 fonksiyonuna gönderilen parametredeki fonksiyonun içeriği ihtiyaca göre değişebilir.
  console.log(
    ">> Parametreden gönderilen fonksiyona gelen değerler:",
    item,
    index
  );

  console.log(">> İsim: ", item, ">> Length: ", item.length);
}, student_names_1);

/**
 * 1.2. `filter()` fonksiyonunun benzerini yapalım.
 */
// filter fonksiyonunun kullanım örneği:
//let filtered_items = student_names_1.filter((item, index) => {
//  return item.length > 5;
//});

console.log("-------------------------------------------------------------");

/**
 * Parametreye gelecek olan fonksiyonun türünü ayrı bir type olarak belirtip ihtiyaç duyduğumuz
 * yerlerde bu türü kullanarak daha okunabilir ve kontrollü şekilde yazabiliriz.
 */
type UserDefinedFilterFuncType = (p1: any, p2: number, p3: any[]) => boolean;

type CustomFilterFnType = (
  // tür tanımlaması yapılırken parametre isimleri sadece tanımlama amacıyla kullanılır ve
  // farklı isimler verilebilir.
  param1: UserDefinedFilterFuncType,
  param2: any[]
) => any[];

const customFilter: CustomFilterFnType = (
  filterFunc: UserDefinedFilterFuncType,
  original_array: any[]
) => {
  console.log(">> customFilter fonksiyonu çağırıldı.");

  const filtered_array: any[] = [];

  // i, j, k, m ifadeleri genelde döngü indisini (indexini) tutmak için kullanıldığından dolayı bu tarz
  // değişkenlere uzun isim verilmeye gerek görülmez.
  for (let i = 0; i < original_array.length; i++) {
    console.log(">> for loop: ", i);

    // DİKKAT! Parametreden gelen `filterFunc` fonksiyonu burada çağırılıyor.
    let filterResult = filterFunc(original_array[i], i, original_array);

    console.log(">> filterResult: ", filterResult);

    // biraz yakın gelecek zamandaki dolarları hatırlayalım...
    // $ $ 💸 💸 💸 🤑 🤑

    // filterFunc'tan true dönerse bu itemi filtered_array'e ekle, dönmezse hiçbirşey yapma.
    if (filterResult) {
      filtered_array.push(original_array[i]);
    }
  }

  console.log(">> filtered_array: ", filtered_array);

  return filtered_array;
};

console.log(">> Custom filter fonksiyonu çağırılıyor.");

const filter_result = customFilter((item, index, orig_arr) => {
  console.log(">> filterFunc params: ", item, index);

  // buraya örnek bir şart ifadesi yazalım.
  //return item.length > 4 || index % 2 == 0;
  return index % 2 == 0;
}, student_names_1);

console.log(">> filter_result: ", filter_result);

// ek bilgiler:
// dizi elemanlarını doğrudan değişkene aktarmak (array desctruct)
const [, , , ucuncu_eleman, dorduncu_eleman, besinci_eleman] = student_names_1;

let eleman_3 = student_names_1[3];
let eleman_4 = student_names_1[4];
let eleman_5 = student_names_1[5];

console.log(dorduncu_eleman, student_names_1);

// spread operator
[...student_names_1];

let obj1 = {
  id: 1,
  firstname: "test",
  lastname: "test",
};

// spread operator
let result2 = { ...obj1, firstname: "foo" };
