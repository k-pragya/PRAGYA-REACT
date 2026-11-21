// Understanding Components

function Header() {
  return "Header Component";
}

function Footer() {
  return "Footer Component";
}

console.log(Header());

console.log(Footer());

// Reusability Example

function EmployeeCard(name) {
  return `Employee: ${name}`;
}

console.log(EmployeeCard("Pragya"));

console.log(EmployeeCard("Rohit"));

console.log(EmployeeCard("Prakriti"));