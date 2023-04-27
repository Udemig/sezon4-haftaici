/**
 * Bazen bir değişken birden fazla farklı türde değer alması gerekebilir.
 * Örneğin bir değişken bazen number bazen null değer alması gerekebilir.
 * Bu durumda pipe işareti kullanarak birden fazla değer veya type
 * belirtilir. Union type'ın avantajı farklı değerlerin belirtilmesi
 * konusunda daha net görülebilir. Örneğina aşağıdaki "RoleKeyType"
 * ifadesindeki gibi bir union type belirtirsek o zaman bu değişken
 * burada belirtilen değerler dışında birşey alması engellenir.
 * Bu sayede daha net bir type belirtmiş oluruz.
 *
 */

// Union type'ı değişkenden sonra belirtmek mümkündür.
let parent_id: number | null = 15;
console.log("parent id:", typeof parent_id, parent_id);

parent_id = null;
console.log("parent id:", typeof parent_id, parent_id);

// Ayrıca union type'ları bir type ismine atamak da mümkündür.
export type RoleKeyType = "admin" | "client" | "craftsman";

let role_key: RoleKeyType = "admin";

role_key = "client";

// Yukarıda oluşturduğumuz union type'ı değişkenler üzerinde bu şekilde
// kullanabiliyoruz.
let current_user_role: RoleKeyType = "client";

// ... bu satırda işlemler yaptığımızı düşünelim

current_user_role = "craftsman";

// ... bu satırda işlemler yaptığımızı düşünelim

current_user_role = "admin";

// Normal şartlarda union typelar tek satırda yazılır ama eğer değerler
// çok fazlaysa bunu aşağıdaki gibi alt satırlara ayırmak mümkündür.
let user_age:
  | null
  | number
  | string
  | true
  | 3.14159
  | { foo: string }
  | "çocuk"
  | "ergen"
  | "yetişkin"
  | "orta yaş"
  | "orta yaş üstü"
  | "yaşlı"
  | "bir ayağı çukurda";

user_age = null;

user_age = 10;

user_age = true;
user_age = 3.141591;
user_age = {
  foo: "test",
};
