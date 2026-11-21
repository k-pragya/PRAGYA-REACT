const numbers = [1, 2, 3, 4, 5];

// map()

const doubled =
numbers.map(num => num * 2);

console.log("Doubled:", doubled);

// filter()

const evenNumbers =
numbers.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);

// reduce()

const total =
numbers.reduce(
  (sum, num) => sum + num,
  0
);

console.log("Total:", total);

// Real Example

const employees = [
  { id: 1, name: "Pragya", salary: 50000 },
  { id: 2, name: "Rohit", salary: 60000 }
];

const employeeNames =
employees.map(employee => employee.name);

const highSalaryEmployees =
employees.filter(
  employee => employee.salary > 55000
);

const totalSalary =
employees.reduce(
  (total, employee) =>
  total + employee.salary,
  0
);

console.log(employeeNames);
console.log(highSalaryEmployees);
console.log(totalSalary);