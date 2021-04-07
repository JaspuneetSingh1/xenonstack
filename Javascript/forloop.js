let fullName = "Jaspuneet Singh";
let incomes = [10000, 1000, 11000]
let total = 0
const students = [
  {name: "peter", city: "delhi"},
  {name: "john", city: "amritsar"},
  {name: "king", city: "kingsland"}
];

for(const char of fullName){

  console.log(char);

}

for (const income of incomes){
  console.log(income)
  total +=income
}

console.log(`${fullName} has ${total} `+"Rupees");

for(const student of students){
  console.log(student.name + " lives in " + student.city);
}
