// Object Destructuring

const employee = {
  name: "Pragya",
  role: "Developer",
  city: "Mumbai"
};

const { name, role } = employee;

console.log(name);
console.log(role);


// Array Destructuring

const colors = [
  "Red",
  "Blue",
  "Green"
];

const [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);


// Default Value

const { country = "India" } = employee;

console.log(country);


// Function Parameter Destructuring

function displayEmployee({ name, role }) {
  console.log(`${name} - ${role}`);
}

displayEmployee(employee);