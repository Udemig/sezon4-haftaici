type ExampleType2 = {
  example_prop: () => {};
};

class EniacComputer {
  processor_speed: number = 0;
  energy_consumption: number = 0;
  weight: number = 0;
  brand: string;
  owner_name: string;

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
