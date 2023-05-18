/**
 * Generic tanım: Soyut type'lardır ve her type yerine geçebilirler. Bir nevi
 * joker tür gibi kullanılabilen ve sadece tanımlandıkları blok (fonksiyon,
 * interface veya class) içerisinde geçerli olan type'lardır.
 *
 * Kurallar:
 * 1- Generic Type'lar tanımlandıkları blok içerisinde geçerlidir.
 * 2- Normal isimlendirme kuralları uygulanabilir, örneğin camel case, pascal case,
 *    snake case kullanılabilir fakat genel olarak tek büyük harf şeklinde
 *    yazılırlar. Örneğin T, R, U, K, V gibi. Bu ifadeler yazılım dünyasında
 *    generic type'lar için sıklıkla kullanılır. T: type, K: key, V: value,
 *    U: array gibi anlamlarda kullanılabilirler.
 */

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// 1- Fonksiyonlarda generic type tanımlamak:
function get_random_items<T>(arr: T[], count: number): T[] {
  // ÖDEV: Bu fonksiyonu implement et.
  for (let i = 0; i < arr.length; i++) {
    //
  }

  return [];
}

let arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2: string[] = ["ahmet", "mehmet", "ayşe", "fatma"];
let arr3: boolean[] = [true, false, false, true, true, true, false];

let arr1_result: number[] = get_random_items(arr1, 3);
let arr2_result: string[] = get_random_items(arr2, 2);

let arr1_map_result: string[] = arr1.map((item, index) => {
  return "test";
});

// 2- Class'lar üzerinde generic type tanımlamak:

class LinkedList<T> {
  private items: T[] = [];

  add(item: T): LinkedList<T> {
    this.items.push(item);
    return this;
  }

  remove(index: number): LinkedList<T> {
    this.items.splice(index, 1);

    return this;
  }

  get(index: number): T {
    return this.items[index];
  }
}

let list_1 = new LinkedList<number>();

// method chain örneği
list_1.add(10).add(20).add(30);

let list_2 = new LinkedList<string>();

list_2.add("test").add("örnek");

// 3- interface üzerinde generic type tanımlamak:
interface CollectionInterface<GenericType1, GenericType2> {
  add(item: GenericType1): void;
  remove(index: number): void;

  [index_no: number]: GenericType1;
}

class List<T> implements CollectionInterface<T, T> {
  private items: any[] = [];

  set(index: number, value: T) {
    this[index] = value;
  }

  add(item: any): void {
    this.items.push(item);
  }

  remove(index: number): void {
    this.items.splice(index, 1);
  }

  [index_no: number]: T;
}

class LinkedList2<T> implements CollectionInterface<T, number> {
  add(item: T): void {
    throw new Error("Method not implemented.");
  }

  remove(index: number): void {
    throw new Error("Method not implemented.");
  }

  [index_no: number]: T;
}

let list_3: List<number> = new List<number>();
let list_4: List<string> = new List<string>();

list_3.set(0, 10);
list_3.set(1, 20);
list_3.set(2, 30);
list_3.set(3, 40);

console.log("list 3 ilk eleman: ", list_3[0]);

let arr_5: string[] = ["foo", "bar", "baz", "kuu"];

arr_5[0];
