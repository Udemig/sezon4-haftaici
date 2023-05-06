/**
 * Primitive type'lar ile dizi tanımlarken kullandığımız yöntemi kullanarak advanced typeların dizisi
 * oluşturulabilir. Bunun için ilk olarak kendimiz bir type tanımlamalıyız.
 */
type MonthNameType = "jan" | "feb" | "mar" | "apr" | "may" | "jun" | "jul";

// Kendi tanımladığımız type'ı dizi olarak tanımlama işlemi:
const month_list_example: MonthNameType[] = ["jun", "may"];
month_list_example.push("jan");
month_list_example.push("jun");
month_list_example.push("feb");

type UserType = {
  id: number;
  fullname: string;
  city: string;
  is_admin: boolean;
  role: "student" | "instructor";
  is_continuing: boolean;
};

let users: UserType[] = [
  {
    id: 1,
    fullname: "emir buğra",
    city: "izmir",
    is_admin: false,
    is_continuing: true,
    role: "instructor",
  },
];

users.push({
  id: 2,
  fullname: "ahmet berkay",
  city: "ankara",
  is_admin: false,
  is_continuing: true,
  role: "student",
});

/**
 * Buradaki `item` değişkeninin türü otomatik olarak `UserType` olur. Çünkü forEach fonksiyonunun
 * tanımı gereği buraya gönderilen arrow fonksiyonunun ilk elemanının türünü dizinin türü olarak
 * belirtilmiştir. Bu sayede `item`  değişkeninin türünü belirtmesek de propertyler editör tarafından
 * otomatik olarak bulunabilir.
 */
users.forEach((item, index) => {
  console.log(">> Fullname:", item.fullname);
});
