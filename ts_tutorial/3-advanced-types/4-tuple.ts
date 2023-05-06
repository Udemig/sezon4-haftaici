/**
 * Tuple: Diziye benzeyen ama her indexteki datanın kullanım amacının bilindiği türdür.
 *
 * Tuple'lar dizilere benzerler fakat dizilerden önemli bir farkı vardır. Dizilerin boyutu önceden
 * bilinemez ve runtime'da değişir ama tuple'ların boyutları her zaman aynıdır.
 */

type RGBColorType = [number, number, number];

let selected_color: RGBColorType = [255, 0, 0];

const red_color: RGBColorType = [255, 0, 0];
const green_color: RGBColorType = [0, 255, 0];
const dark_gray_color: RGBColorType = [10, 10, 10];

type BrowserType = [string, number, string, number, boolean];

let senger_browser: BrowserType = ["Chrome", 113, "Windows", 11, true];
let ayse_browser: BrowserType = ["Safari", 16, "Macos", 12, false];
let fadime_browser: BrowserType = ["Firefox", 112, "Ubuntu", 23, false];
let ahmet_browser: BrowserType = ["Chromium", 109, "Macos", 10, true];

type IpAddressType = [number, number, number, number];

//
type GuestMetaDataType = {
  browser: BrowserType;
  ip: IpAddressType;
  country_area:
    | "europe"
    | "middle east"
    | "asia"
    | "america"
    | "canada"
    | "others";
};

let example_guest: GuestMetaDataType = {
  browser: ["Chrome", 113, "Windows", 11, true],
  ip: [192, 168, 10, 24],
  country_area: "europe",
};

console.log(
  `Guest browser info: ${example_guest.browser[0]} ${example_guest.browser[1]}`
);
console.log(
  `Guest operating system info: ${example_guest.browser[2]} ${example_guest.browser[3]}`
);
console.log(`Guest browser chrome compatible? : ${example_guest.browser[4]}`);
