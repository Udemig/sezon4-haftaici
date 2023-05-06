type NormalVehicleType = {
  wheel_count: number;
  fuel_type: "gasoline" | "diesel" | "lpg";
  engine_capacity: number;
  door_count: number;
};

type MinivanVehicleType = {
  wheel_count: number;
  fuel_type: "gasoline" | "diesel" | "lpg";
  engine_capacity: number;
  door_count: number;
  double_side_sliding_door: boolean;
};

type MotorcycleVehicleType = {
  wheel_count: number;
  engine_capacity: number;
};

let ahmets_car: NormalVehicleType = {
  wheel_count: 4,
  fuel_type: "gasoline",
  engine_capacity: 1.6,
  door_count: 4,
};

let ayses_car: MinivanVehicleType = {
  wheel_count: 4,
  fuel_type: "diesel",
  engine_capacity: 1.3,
  door_count: 5,
  double_side_sliding_door: true,
};

function normalVehiclePriceCalculator(vehicle: NormalVehicleType): number {
  let price = 0;

  if (vehicle.fuel_type === "diesel") {
    price += 150_000;
  } else if (vehicle.fuel_type === "gasoline") {
    price += 100_000;
  } else if (vehicle.fuel_type === "lpg") {
    price += 90_000;
  }

  if (vehicle.engine_capacity <= 1) {
    price += 50_000;
  } else if (vehicle.engine_capacity <= 1.6) {
    price += 70_000;
  } else if (vehicle.engine_capacity < 2) {
    price += 80_000;
  } else if (vehicle.engine_capacity >= 2) {
    price += 110_000;
  }

  return price;
}

function minivanVehiclePriceCalculator(vehicle: MinivanVehicleType): number {
  let price = 0;

  if (vehicle.fuel_type === "diesel") {
    price += 150_000;
  } else if (vehicle.fuel_type === "gasoline") {
    price += 100_000;
  } else if (vehicle.fuel_type === "lpg") {
    price += 90_000;
  }

  if (vehicle.engine_capacity <= 1) {
    price += 50_000;
  } else if (vehicle.engine_capacity <= 1.6) {
    price += 70_000;
  } else if (vehicle.engine_capacity < 2) {
    price += 80_000;
  } else if (vehicle.engine_capacity >= 2) {
    price += 110_000;
  }

  if (vehicle.double_side_sliding_door) {
    price += 20_000;
  } else {
    price += 10_000;
  }

  return price;
}

let ahmets_car_price = normalVehiclePriceCalculator(ahmets_car);
console.log("ahmets_car_price", ahmets_car_price);

let example_car_price = normalVehiclePriceCalculator({
  wheel_count: 4,
  fuel_type: "lpg",
  engine_capacity: 1.2,
  door_count: 4,
});
console.log("example_car_price 1", example_car_price);

example_car_price = normalVehiclePriceCalculator({
  wheel_count: 4,
  fuel_type: "gasoline",
  door_count: 2,
  engine_capacity: 3,
});
console.log("example_car_price 2", example_car_price);

let ayses_car_price = minivanVehiclePriceCalculator(ayses_car);
console.log("ayses_car_price", ayses_car_price);

let example_minivan_price = minivanVehiclePriceCalculator({
  door_count: 5,
  double_side_sliding_door: true,
  engine_capacity: 1.8,
  fuel_type: "lpg",
  wheel_count: 4,
});
console.log("example_minivan_price 1", example_minivan_price);

/**
 * Örnek Senaryo: Ziyaretçinin tarayıcı bilgilerini logladığımız servisler olduğunu düşünelim. Bu servislere
 * data göndermek için her servise ait farklı fonksiyonlara ihtiyacımız vardır.
 */

type VisitorType = {
  // TODO Fill here
  id?: number;
  fullname?: number;
  registered_at?: string;
  selected_menu: "mainpage" | "about_us" | "contact" | "blog";
};

type OperatingSystemNameType =
  | "macos"
  | "windows"
  | "linux"
  | "android"
  | "ios";

type BrowserNameType = "chrome" | "firefox" | "ie" | "safari";

type BrowserInfoType = [
  BrowserNameType | "others",
  number,
  OperatingSystemNameType | "others",
  number,
  boolean,
  boolean
];

// $(window).on('click', () => {
//     // burada loglama işlemini yaptığımızı düşünelim.
// })

type UserBehaviourLoggerFuncType = (
  visitor: VisitorType,
  browser: BrowserInfoType
) => boolean;

const systemVisitorLogger: UserBehaviourLoggerFuncType = (
  visitor: VisitorType,
  browser: BrowserInfoType
): boolean => {
  console.log("System visitor logger function executed.");

  return true;
};

const netlifyVisitorLogger: UserBehaviourLoggerFuncType = (
  visitor: VisitorType,
  browser: BrowserInfoType
): boolean => {
  console.log("Netlify visitor logger function executed.");

  return true;
};

const vercelVisitorLogger = (
  visitor: VisitorType,
  browser: BrowserInfoType
): boolean => {
  console.log("Vercel visitor logger function executed.");

  return true;
};

// senaryo gereği config datasına göre tercih edilen servisi belirleyip ilgili fonksiyonu çağıralım.
const preferred_logger_service = "netlify";

// Bu datayı ziyaretçi sitemize geldiği anda tarayıcı bilgisini okuyarak ve cookie bilgilerini
// okuyarak oluşturduğumuzu farzedelim.
const visitor: VisitorType = {
  selected_menu: "mainpage",
};
const visitor_browser: BrowserInfoType = [
  "chrome",
  110,
  "windows",
  11,
  false,
  true,
];

if (preferred_logger_service === "sytstem") {
  systemVisitorLogger(visitor, visitor_browser);
} else if (preferred_logger_service === "netlify") {
  netlifyVisitorLogger(visitor, visitor_browser);
} else if (preferred_logger_service === "vercel") {
  vercelVisitorLogger(visitor, visitor_browser);
}
