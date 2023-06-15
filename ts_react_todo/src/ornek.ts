/**
 * Diziler gerçekte Array objeleridir. Yani Array class'ının
 * instancelarıdır. Array class'ının tanımlanmasına baktığımızda
 * şu şekilde bir ifade görürüz:
 *    [n: number]: T;
 * Bu tanımlama değişen miktarda keylerin eklenebileceğini
 * bu keylerin sayısal ifade olması gerektiğini belirtir.
 */

const arr1 = new Array<string>();
arr1[0] = "euro";
arr1[1] = "sterlin";
arr1[2] = "dolar";

/**
 * Objeler ile diziler birbirine benzerler. Obje property'lerine
 * aynı dizilerdeki gibi köşeli parantezlerle erişilebilir. Dizlerde
 * köşeli parantez arasına sayısal ifade yazılırken objelerde
 * string ifade yazılır.
 */
const obj1 = {
  dolar: "amerikan doları",
  euro: "avrupa eurosu",
  sterlin: "ingiliz sterlini",
  "örnek key burası": "test",
};
console.log(obj1["dolar"], obj1.dolar);
obj1["örnek key burası"];

const arr2: string[] = [];
