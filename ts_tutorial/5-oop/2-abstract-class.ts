/**
 * Abstract class: Kelime anlamı olarak soyut sınıf anlamına gelir.
 * Teknik olarak ise bazı methodların implement edildiği, bazılarının
 * ise implement edilme işleminin child class'a bırakıldığı  classlardır.
 *
 * Kurallar:
 * 1- `abstract class` ifadesiyle başlar.
 *
 * 2- Abstract class'ların instance'ları oluşamaz, bunları extend
 *    eden child class'ların instance'ları oluşabilir. Dolayısıyla
 *    parent class'taki tüm soyut methodlar implement edilmek zorundadır.
 *
 * 3- Abstract class'lar birbirlerini yine abstract olarak
 *    extend ettiğinde parent class'taki abstract methodlar
 *    implement edilme zorunlu değildir.
 */

abstract class ExampleAbstractClass1 {
  prop_1: number = 10;
  prop_2: string = "example value";

  example_method_1(): void {
    console.log("ExampleAbstractClass1::example_method_1 invoked.");
  }

  // Bu method soyut bir methoddur, implementasyonu mevcut değildir,
  // child class tarafından bu methodun implementasyonu yapılacaktır.
  abstract example_method_2(): number;
}

class ExampleClass1 extends ExampleAbstractClass1 {
  // Parent class'tan gelen abstract (soyut) methodu burada implement ettik.
  example_method_2(): number {
    console.log("ExampleClass1::example_method_2 invoked.");
    return 20;
  }
}

class ExampleClass2 extends ExampleAbstractClass1 {
  prop_3: object = {};

  example_method_2(): number {
    this.prop_3 = {
      foo: "foo",
      bar: "bar",
    };

    console.log("ExampleClass2::example_method_2 invoked.");
    return 30;
  }
}

let obj_1 = new ExampleClass1();
obj_1.example_method_1();
obj_1.example_method_2();

let obj_2 = new ExampleClass2();
obj_2.example_method_1();
obj_2.example_method_2();
console.log("obj_2::prop_3 = ", obj_2.prop_3);

////////////////////////////////////////////////
// abstract class'larda constructor kullanımı:

abstract class ExampleAbstractClass2 {
  prop_1: boolean;
  prop_2: string;
  prop_3: string;

  constructor(prop_1: boolean, prop_2: string, prop_3: string) {
    this.prop_1 = prop_1;
    this.prop_2 = prop_2;
    this.prop_3 = prop_3;
  }
}

abstract class ExampleAbstractClass3 {
  constructor(
    protected prop_1: boolean,
    protected prop_2: string,
    protected prop_3: string
  ) {
    // burada initialization işlemi dışındaki işlemler yapmak mümkün.
  }

  // abstract fonksiyonlarda gövde yazılmaz ama geri dönüş türü
  // mutlaka yazılmalı.
  abstract example_abstract_fn_1(): string;

  // never type'ını hatırlarsak, bir fonksiyonun dönüş türü olarak
  // belirtildiğinde bu şu anlama gelir: Bu fonksiyondan
  // hiçbirşey dönmez sadece exception throw edilir.
  abstract example_exception_thrower(error_message: string): never;
}

/**
 * Erişim belirteçlerini `constructor` parametreleri ile kullanıldığında
 * bu parametreler class property'si haline gelir. `ExampleAbstractClass2`
 * class'ındaki gibi bir tanımlama yapmak yerine `ExampleAbstractClass3`
 * class'ındaki yöntemi kullanmak daha kolay, anlaşılır ve yönetilebilir olur.
 * Bu yöntem normal classlar için de geçerli yani sadece abstract class'larda
 * kullanılabilir değil, tüm class'larda kullanılabilirdir.
 */

class ExampleClass3 extends ExampleAbstractClass3 {
  example_abstract_fn_1(): string {
    return "`example_abstract_fn_1` result bilgisi...";
  }

  example_exception_thrower(error_message: string): never {
    console.log("ExampleClass3::example_exception_thrower called.");
    throw new Error(error_message);
  }
}

let obj_3 = new ExampleClass3(true, "test", "example");
let result_3 = obj_3.example_abstract_fn_1();

// Bir exception'ı try-catch bloğu içerisinde yakalama örneği:
try {
  obj_3.example_exception_thrower("Lütfen şifrenizi giriniz.");
} catch (err: any) {
  console.log("Bir hata oluştu, hata mesajı: ", err.message);
}
