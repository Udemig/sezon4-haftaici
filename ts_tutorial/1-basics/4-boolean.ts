/**
 * boolean türü çok basit bir türdür, sadece true veya false değerlerini
 * alabilir. Kullanımı oldukça kolaydır. Tek dikkat edilmesi gereken
 * nokta karşılaştırma işlemlerinden dönen değerin boolean olduğundan
 * emin olmak gerekir veya karşılaşdırma işlemlerinin doğru yapıldığından
 * emin olmak gerekir.
 */

const today_attended: boolean = false;
console.log("today attended", today_attended);

let compare_result: boolean = 10 > 0;
console.log("compare result", compare_result);

const ten: number = 10;
const zero: number = 0;

compare_result = ten === zero;
console.log("compare result", compare_result);
