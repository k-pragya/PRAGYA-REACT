// Basic Example

const empname = "Pragya";

console.log(`Hello ${empname}`);


// Using Expressions

const a = 10;
const b = 20;

console.log(`Sum: ${a + b}`);


// Multi-line String

const message = `
Welcome
to
JavaScript
`;

console.log(message);


// Real Example

const employee = {
  name: "Pragya",
  role: "Software Engineer",
  city: "Mumbai"
};

console.log(
  `${employee.name} works as a ${employee.role} in ${employee.city}`
);


// Inside Array

const skills = [
  "HTML",
  "CSS",
  "JavaScript"
];

skills.forEach(skill =>
  console.log(`Skill: ${skill}`)
);