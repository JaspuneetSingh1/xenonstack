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
