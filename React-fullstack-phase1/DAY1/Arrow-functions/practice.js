// No Parameters

const greet = () => {
  console.log("Hello");
};

greet();

// One Parameter

const square = num => num * num;

console.log(square(5));

// Multiple Parameters

const add = (a, b) => a + b;

console.log(add(10, 20));

// Returning Objects

const getEmployee = () => ({
  id: 1,
  name: "Pragya",
  role: "Software Engineer"
});

console.log(getEmployee());

// Array Methods

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled);

// Real World Example

const employees = [
  {
    id: 1,
    name: "Pragya"
  },
  {
    id: 2,
    name: "Rohit"
  }
];

employees.forEach(
  employee => console.log(employee.name)
);