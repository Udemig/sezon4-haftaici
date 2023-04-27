/**
 * `void` türü sadece fonksiyonların dönüş türünü belirtmek için kullanılır.
 * Eğer bir fonksiyondan hiçbir değer dönmemesi gerekiyorsa o zaman o
 * fonksiyonun dönüş türünü `void` olarak belirtmemiz gerekir. Aksi halde
 * o fonksiyondan bir değer döneceği zannedilir. Bu da mantıksal hatalara
 * sebebiyet verir. Bu hatalardan kaçınabilmek için hiçbirşey döndermeyen
 * fonksiyonların dönüş türü olarak `void` yazılmalıdır.
 *
 */

// Örneğin toplama fonksiyonundan mutlaka bir number türünden değer döner.
function sum(no1: number, no2: number): number {
  return no1 + no2;
}

// Ama örneğin veritabanına data kayıt yapan bir fonksiyondan
// değer döndermesi beklenmez. Bu durumda bu fonksiyonun
// dönüş türünü `void` olarak belirtmemiz gerekir. Böylece
// bu fonksiyonu kullanan yazılımcının bu fonksiyondan
// hiçbir data dönmeyeceğini bilmesini sağlamış oluruz.
function saveToDb(data: any): void {
  // datayı burada kaydettiğimizi düşünelim...
  console.log(data);

  return;
}
