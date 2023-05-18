/**
 * Interface: interface'in bünyesinde bulunan soyut methodları
 * class'lar tarafından implement edilmesini mecbur bırakan bir yapı.
 */

// normal şartlarda class'ların birbiriyle hiçbir bağı yoktur, her class kendi
// başına ayrı yapıya sahiptir. Aşağıdaki class'ların benzer method isimlerine
// sahip olmasına rağmen birbiriyle hiçbir bağlantısı yoktur.
class ExampleClass5 {
  method_1(): void {
    console.log("ExampleClass5::method_1 çağırıldı.");
  }

  method_2(p1: string, p2: number): string {
    console.log("ExampleClass5::method_2 çağırıldı, parametreler: ", p1, p2);

    return "test";
  }
}

class ExampleClass6 {
  method_1(p1: number, p2: string, p3: boolean): void {
    console.log("ExampleClass6::method_1 çağırıldı, parametreler: ", p1, p2);
  }
}

// Fakat bazı durumlarda benzer işlemleri yapan ve benzer methodlara sahip
// olması gereken class'lara ihtiyacımız vardır. Bu durumda ihtiyacımız olan
// şey interface tanımlayarak bu methodların nasıl tanımlanması gerektiğini
// belirtebiliriz. Aşağıdaki örnekte payment işlemi için bir interface tanımladık.

interface PaymentInterface {
  get_payment_url(): string;

  verify_payment(one_time_password: string): boolean;

  get_balance(currency: string): number;
}

interface ExampleInterface {
  method_1(): number;

  method_2(p1: string): void;
}

class GarantiPayment implements PaymentInterface, ExampleInterface {
  verify_payment(one_time_password: string): boolean {
    console.log(
      "GarantiPayment::verify_payment method invoked, params:",
      one_time_password
    );
    return true;
  }

  get_balance(currency: string): number {
    console.log("GarantiPayment::get_balance method invoked");

    return 1000;
  }

  method_1(): number {
    throw new Error("Method not implemented.");
  }

  method_2(p1: string): void {
    throw new Error("Method not implemented.");
  }

  get_payment_url(): string {
    console.log("GarantiPayment::get_payment_url method invoked");

    return "garanti bank payment url";
  }
}

class FinansBankPayment implements PaymentInterface {
  get_payment_url(): string {
    console.log("FinansBankPayment::get_payment_url method invoked");

    return "finans bank payment url";
  }

  verify_payment(one_time_password: string): boolean {
    console.log(
      "FinansBankPayment::verify_payment method invoked, params:",
      one_time_password
    );

    return true;
  }

  get_balance(currency: string): number {
    console.log("FinansBankPayment::get_balance method invoked");

    return 100;
  }
}

function detect_payment_service(selected_bank: string): PaymentInterface {
  if (selected_bank === "garanti") {
    return new GarantiPayment();
  } else if (selected_bank === "finans") {
    return new FinansBankPayment();
  } else {
    throw new Error("Wrong bank selected.");
  }
}

function start_payment(selected_bank: string) {
  let paymentObject: PaymentInterface = detect_payment_service(selected_bank);

  let url: string = paymentObject.get_payment_url();

  return url;
}

function verify_payment(selected_bank: string, one_time_password: string) {
  let paymentObject: PaymentInterface = detect_payment_service(selected_bank);

  const verificationResult = paymentObject.verify_payment(one_time_password);

  if (verificationResult === true) {
    return "OK";
  } else {
    return "FAILED";
  }
}
