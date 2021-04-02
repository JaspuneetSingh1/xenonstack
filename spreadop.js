//spread operator
let person = {
  name: "John",
  age: 20,
  city: "Canada"
}

let employee = {
  ...person,
  salary: 50000,
  position: "Software Developer"
}

console.log(employee);

//rest operator
function add (...num) {
  console.log(num);

}

console.log(4,5,6,7)


//arrow function
const menu = (food, drink) => `I'm going to have ${food} for a snack and a ${drink} in the evening.`

console.log(menu("chicken","fanta"));


//if single item is to be passed, then parenthesis are not needed.
const menu = food => `I'm going to have ${food} for a snack and a ${drink} in the evening.`

console.log(menu("chicken","fanta"));


//include() function usage
let numArray = [1,2,3,4,5];

if(numArray.includes(2)) {
  console.log("2 exists");
} else {
  console.log("2 doesnt exist in the array.") 
};
