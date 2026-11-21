// Spread Operator

const numbers1 = [1, 2, 3];

const numbers2 = [
  ...numbers1,
  4,
  5
];

console.log(numbers2);


// Spread with Objects

const employee = {
  name: "Pragya",
  role: "Developer"
};

const updatedEmployee = {
  ...employee,
  city: "Mumbai"
};

console.log(updatedEmployee);


// Rest Operator

function add(...numbers) {
  return numbers.reduce(
    (sum, num) => sum + num,
    0
  );
}

console.log(add(10, 20, 30));


// Array Destructuring with Rest

const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow"
];

const [firstColor, ...remainingColors] = colors;

console.log(firstColor);
console.log(remainingColors);