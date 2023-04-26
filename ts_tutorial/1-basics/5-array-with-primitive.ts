const student_names: string[] = [];
student_names.push("ahmet berkay koçak");
student_names.push("ayşe albayrak");
student_names.push("fadime test");
student_names.push("nutuya test");
student_names.push("sevde özen");
student_names.push("emir buğra");
student_names.push("mehmet can seyhan");
console.log("student names", student_names);

const student_names_slug = student_names.map((item) => {
  return item.replaceAll(" ", "-");
});
console.log("student names slug", student_names_slug);

const city_plates: number[] = [];
city_plates.push(35);
city_plates.push(6);
city_plates.push(23);
console.log("city plates", city_plates);

const car_brands: string[] = ["bmw", "audi", "mercedes", "tofaş"];
console.log("car brands", car_brands);
