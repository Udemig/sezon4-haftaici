/**
 * Büyük ölçekli projelerde exception'ların yönetilebilir olması önem arzeder.
 * Bu yönetimi sağlamanın en iyi yöntemlerinden biri de exceptionları ihtiyaca
 * göre bir algoritma çerçevesinde fırlatan bir fonksiyon yazmaktır. Bu
 * fonksiyonlardan hiçbir değer dönmez, sadece hata fırlatılır.
 * İşte bu tarz özelleştirilmiş fonksiyonlar için `void` kullanmak yerine
 * `never` kullanılırsa daha anlamlı olur. Çünkü `void` dediğimizde hata
 * fırlatılmaz ve herşeyin yolunda gittiği düşünülür ama `never` dediğimizde
 * mutlaka o fonksiyondan bir hata fırlatılacağı anlaşılır.
 *
 */

function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

function saveToDb2(data: any): void {
  // farzedelim ki burada data kayıt edilmeye çalışılıyor ama
  // veritabanı bağlantısında bir hata oluştuğunu ve bu yüzden
  // hata fırlatıldığını düşünelim.

  if (true) {
    console.log("Şu data db'ye kaydediliyor:", data);
  } else {
    throwError("DB bağlantısı koptu.");
  }
}

try {
  saveToDb2({
    id: 1,
    firstname: "ahmet",
  });
} catch (err) {
  // fırlatılan exception'ı burada yakalarız ve hata durumunu loglarız veya
  // ihtiyaca göre farklı işlemler yaptırırız.
  console.error(err);
}
