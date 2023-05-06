/**
 * Enum: Enumeration (numaralandırmak) ifadesinin kısaltmasıdır.
 *
 *
 */

// Örneğin haftanın günlerini union olarak tanımlayalım.
type WeekDayType = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

enum WeekDayEnum {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

let today: WeekDayEnum = WeekDayEnum.friday;

enum MonthNameEnum {
  January,
  February,
  March,
  April,
}

let this_month: MonthNameEnum = MonthNameEnum.February;

if ((this_month as MonthNameEnum) === MonthNameEnum.April) {
  console.log("Şuan nisan ayındayız.");
} else {
  console.log("Şuan nisan ayında değiliz.");
}

switch (this_month as MonthNameEnum) {
  case MonthNameEnum.January:
    console.log("Ocak ayındayız.");
    break;

  case MonthNameEnum.April:
    console.log("Nisan ayındayız.");
    break;

  default:
    console.log("Diğer aylardan birindeyiz");
    break;
}
