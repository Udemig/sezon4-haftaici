/**
 * Typescript'te bir değişkene atanan herşeyin türü olmak zorundadır. Bunlara fonksiyonlarda dahildir.
 * Çünkü fonksiyonların değişkenlere atanması mümkündür.
 *
 * Bu konunun amacı bir değişkene atanan fonksiyonun prototipinin (veya başka bir deyişle türünün)
 * nasıl oluşturulduğunu görmektir. Bunun için öncelikle farklı yöntemlerle oluşturulan
 * fonksiyonları kısaca hatırlayalım. Ardından 2, 3 ve 4. yöntemler için nasıl tür oluşturulur
 * bunları göreceğiz.
 *
 */

/**
 * Kaç şekilde fonksiyon tanımlanır?
 * 1- function yöntemi.
 * 2- Arrow function yöntemi.
 * 3- Single line arrow function yöntemi.
 * 4- Nameless function yöntemi
 */

// 1- function yöntemi: Doğrudan fonksiyonun ismi yazılarak tanımlanır.
function example_function() {
  console.log("Burası örnek bir fonksiyondur.");
}

// 2- Arrow function: Bu fonksiyonlar bir değişkene atanan fonksiyonlardır.
let example_fn = () => {
  console.log("Örnek arrow function");
};

[].forEach((item) => {
  // burası arrow functiondır.
});

// 3- Single line arrow function
const toplama_fonksiyonu = (i1: number, i2: number) => i1 + i2;
console.log(toplama_fonksiyonu(5, 6));

let result = [1, 2, 3, 4].map((item) => item * 2);
console.log("result:", result);

// 4- Nameless function yöntemi
const carpim_islemi = function (i1: number, i2: number) {
  return i1 * i2;
};

/**
 * Öncelikle basit olarak bir toplama fonksiyonunu ele alalım.
 */

type TwoParamMathOperationFuncType = (no1: number, no2: number) => number;

const sum_fn: TwoParamMathOperationFuncType = (
  no1: number,
  no2: number
): number => {
  return no1 + no2;
};

const subtraction_fn: TwoParamMathOperationFuncType = (
  no1: number,
  no2: number
): number => {
  return no1 - no2;
};

const multiplication_fn: TwoParamMathOperationFuncType = (
  no1: number,
  no2: number
): number => {
  return no1 - no2;
};

const division_fn: TwoParamMathOperationFuncType = (
  no1: number,
  no2: number
): number => {
  return no1 - no2;
};

console.log(sum_fn(1, 2));

type NoParamFuncType = () => void;

const print_hello_world: NoParamFuncType = (): void => {
  console.log("Hello World");
};
print_hello_world();

/**
 * Senaryo: Örneğin notification gönderen fonksiyonlar lazım olduğunu düşünelim.. Mail, sms, whatsapp, telegram gibi
 * sistemler üzerinden kullanıcılara notification göndermek isteyelim. Bu durumda her farklı platform için
 * aynı parametreleri alıp aynı türde değer döndüren ama içeriği farklı olan fonksiyonlara ihtiyacımız vardır.
 */

// TODO Farklı isimler verebiliriz, bu isimleri sonra tartışalım.
type NotificationSenderFuncType = (userId: number, message: string) => boolean;

const mailNotificationSender: NotificationSenderFuncType = (
  userId: number,
  message: string
): boolean => {
  console.log("Mail gönderiliyor, lütfen bekleyin...");

  // ... burada mail gönderim işleminin yapıldığını farzedelim.

  console.log("Mail gönderim işlemi tamamlandı, sonuç geri döndürülüyor.");

  return true;
  //return false;
};

const smsNotificationSender: NotificationSenderFuncType = (
  userId: number,
  message: string
): boolean => {
  console.log("SMS gönderiliyor, lütfen bekleyin...");

  // ... burada sms gönderim işleminin yapıldığını farzedelim.

  console.log("SMS gönderim işlemi tamamlandı, sonuç geri döndürülüyor.");

  return true;
  //return false;
};

const signalNotificationSender: NotificationSenderFuncType = (
  userId: number,
  message: string
): boolean => {
  console.log("Signal mesajı gönderiliyor, lütfen bekleyin...");

  // ... burada mesaj gönderim işleminin yapıldığını farzedelim.

  console.log(
    "Signal mesajı gönderim işlemi tamamlandı, sonuç geri döndürülüyor."
  );

  return true;
  //return false;
};

// Eğer elimizde notification göndermek için bir type yoksa her fonksiyon farklı şekillerde tanımlanabilir.
// Bu da karmaşaya sebep olur. Bu yüzden fonksiyonların type'larını belirterek projeyi yaparsak daha
// doğru bir geliştirme yöntemi uygulamış oluruz.
const telegramNotificationSender = (
  message: string,
  user: object,
  timeout: number
) => {
  return;
};

// Bu fonksiyon hayali bir fonksiyon olsun, senaryo gereği çalıştığını farzedelim.
function login() {
  // user ve request objelerinin hayali objeler olduğunu farzedelim.

  let user: any = {};
  let request: any = {};

  if (user.last_ip !== request.client_ip()) {
    const message =
      "Farklı bir ip ile giriş yaptınız, bu işlem bilginiz dışındaysa lütfen şifrenizi değiştirin.";

    smsNotificationSender(user.id, message);
    mailNotificationSender(user.id, message);
    signalNotificationSender(user.id, message);
  }
}
