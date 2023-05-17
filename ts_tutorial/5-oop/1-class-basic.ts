type ExampleType2 = {
  example_prop: () => {};
};

class EniacComputer {
  private processor_speed: number = 0;
  protected energy_consumption: number = 0;
  public weight: number = 0;
  public brand: string;
  public owner_name: string;

  constructor(brand: string, owner_name: string) {
    this.brand = brand;
    this.owner_name = owner_name;
  }

  // class'ın içerisindeki fonksiyonlara method ismi verilir.
  printBrand(): void {
    console.log("Brand: ", this.brand);
  }

  printOwnerName(): void {
    console.log("Owner: ", this.owner_name);
  }
}

const kemal_sunals_computer: EniacComputer = new EniacComputer(
  "amerika",
  "Kemal Sunal"
);

//kemal_sunals_computer.brand = "amerika";
kemal_sunals_computer.printBrand();
kemal_sunals_computer.printOwnerName();

const baris_mancos_computer: EniacComputer = new EniacComputer(
  "Kanada",
  "Barış Manço"
);
//baris_mancos_computer.brand = "kanada";
baris_mancos_computer.printBrand();
baris_mancos_computer.printOwnerName();

const example_date: Date = new Date();
console.log(
  `${example_date.getDate()} - ${example_date.getMonth()} - ${example_date.getFullYear()}`
);

/**
 * Inheritence: Class'ların birbirini extend etmesi işlemine verilen isimdir.
 * Bir class başka bir class'ın özelliklerini almak ve yeni özellikler
 * eklemek gerektiğinde yapılır. Bunu sağlamak için `extends` keyword'ü
 * kullanılır.
 */

class IntelBasedComputer extends EniacComputer {
  monitor_size: number = 0;
  keyboard_layout: "iso" | "csa" | "butterfly" = "iso";
  case_type: "tower" | "mini" = "tower";

  // union type'lar alt alta yazılabilir.
  protected operating_system:
    | "unix"
    | "linux"
    | "dos"
    | "windows3.1"
    | "windows95"
    | null = null;

  protected is_opened: boolean = false;

  /**
   * Yeni class'ta da constructor tanımlamak mümkün. Bu constructor'ın
   * parametreli veya parametresiz olabilir, öncekiyle aynı olmak zorunluluğu
   * yoktur. Parent class'ın constructor'ını ezerken uygulayabileceğimiz
   * birkaç yöntem vardır. Bu yöntemler:
   *
   * 1- Child constructor'da parametre yoksa o zaman parent constructor'ın
   *    parametrelerini hardcode şekilde yazarız.
   * 2- Child constructor'dan gerekli olan tüm parametreleri alırız veya
   *    bazı parametreleri alırız.
   */
  constructor(brand: string) {
    // super() ifadesi parent class'ın constructor'ına işaret eder.r
    super(brand, "");
  }

  start() {
    this.is_opened = true;
    console.log(this.owner_name + "'in bilgisayar başlatılıyor");
  }

  shutdown() {
    this.is_opened = false;

    console.log(this.owner_name + "'in bilgisayar kapatılıyor.");
  }

  // getter amacıyla oluşturulmuş bir fonksiyon örneği.
  getIsOpened() {
    return this.is_opened;
  }

  // get ile belirtilen methodlar instance tarafında property gibi kullanılabilir.
  get isOpened() {
    console.log("isOpened getter method çağırıldı.");
    return this.is_opened;
  }

  // `operating_system` için hem get hem set fonksiyonlarını yazalım:
  setOperatingSystem(operating_system: any) {
    console.log("setOperatingSystem methodu çağırıldı.");
    this.operating_system = operating_system;
  }

  set operatingSystem(operating_system: any) {
    console.log("operatingSystem setter methodu çağırıldı.");
    this.operating_system = operating_system;
  }

  get operatingSystem() {
    console.log("operatingSystem getter methodu çağırıldı.");
    console.log("Çalışma voltajı: ", IntelBasedComputer.voltage);

    return this.operating_system;
  }

  /// buraya diğer yeni fonksiyonları eklenebilir

  static voltage: number = 220;

  /**
   * static methodlarda `this` ifadesini kullanamayız.w
   */
  static printVoltage() {
    console.log("Burası static method, voltaj: ", IntelBasedComputer.voltage);
  }
}

// instance (obje veya nesne veya object) ile class arasındaki fark nedir?

const gokhan_computer = new IntelBasedComputer("ibm");
const fadime_computer = new IntelBasedComputer("lenovo");
const nutuya_computer = new IntelBasedComputer("asus");

gokhan_computer.printBrand();
gokhan_computer.printOwnerName();

gokhan_computer.start();
console.log("Gökhanın bilgisayarı açık mı? ", gokhan_computer.getIsOpened());
//gokhan_computer.shutdown();
console.log("Gökhanın bilgisayarı açık mı? ", gokhan_computer.isOpened);

gokhan_computer.setOperatingSystem("dos");
console.log(
  "Gökhanın şuanki işletim sistemi: " + gokhan_computer.operatingSystem
);

gokhan_computer.operatingSystem = "windows95";
console.log(
  "Gökhanın şuanki işletim sistemi: " + gokhan_computer.operatingSystem
);

console.log(
  "Intel bilgisayarlar voltaj bilgisi: " + IntelBasedComputer.voltage
);
