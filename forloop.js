let fullName = "Jaspuneet Singh";
let incomes = [10000, 1000, 11000]
let total = 0

for(const char of fullName){

  console.log(char);

}

for (const income of incomes){
  console.log(income)
  total +=income
}


console.log(`${fullName} has ${total}`);
