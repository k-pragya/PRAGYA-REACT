# JavaScript ES6+ Fundamentals

## Introduction

JavaScript is one of the most widely used programming languages in the world. It is primarily used to make web pages interactive and dynamic.

Originally, JavaScript was used only in browsers, but today it can be used for:

- Frontend Development (React, Angular, Vue)
- Backend Development (Node.js)
- Mobile Applications
- Desktop Applications
- Game Development

As JavaScript evolved, a major update called ES6 (ECMAScript 2015) was introduced.

ES6 added many powerful features that made JavaScript easier to read, write, and maintain.

Modern React applications heavily depend on ES6+ concepts.

---

## What is ECMAScript?

ECMAScript is the official standard that JavaScript follows.

Examples:

| Version | Features |
|----------|----------|
| ES5 | Traditional JavaScript |
| ES6 | let, const, arrow functions, classes |
| ES7+ | Async/Await and newer features |

When developers say "modern JavaScript", they usually mean ES6 and above.

---

## Why Learn ES6 Before React?

React code heavily uses:

- Arrow Functions
- Template Literals
- Destructuring
- Spread Operator
- Modules
- Promises
- Async/Await

Without understanding ES6, learning React becomes difficult.

---

# Variables

Variables are containers used to store data.

Example:

```javascript
let name = "Pragya";
```

Here:

- let → Variable declaration keyword
- name → Variable name
- Pragya → Value stored

---

## Types of Variables

Modern JavaScript provides:

### let

Used when values can change.

Example:

```javascript
let city = "Mumbai";

city = "Pune";
```

Output:

```text
Pune
```

---

### const

Used when value should not change.

Example:

```javascript
const company = "Capgemini";
```

Trying to reassign:

```javascript
company = "Microsoft";
```

Produces:

```text
TypeError
```

---

### Why Avoid var?

Older JavaScript used:

```javascript
var age = 20;
```

Problems:

- Function scoped
- Can be redeclared accidentally
- Can create unexpected bugs

Modern development prefers:

```javascript
let
const
```

---

# Data Types

JavaScript supports:

### String

```javascript
let name = "Pragya";
```

### Number

```javascript
let age = 24;
```

### Boolean

```javascript
let isActive = true;
```

### Array

```javascript
let skills = ["React", "JavaScript"];
```

### Object

```javascript
let employee = {
    name: "Pragya",
    role: "Developer"
};
```

---

# Operators

## Arithmetic Operators

```javascript
+
-
*
/
%
```

Example:

```javascript
console.log(10 + 5);
console.log(10 - 5);
```

---

## Comparison Operators

```javascript
==
===
!=
>
<
>=
<=
```

Example:

```javascript
console.log(10 > 5);
```

Output:

```text
true
```

---

## Logical Operators

```javascript
&&
||
!
```

Example:

```javascript
let age = 25;

console.log(age > 18 && age < 60);
```

Output:

```text
true
```

---

# Functions

Functions allow us to group reusable code.

Example:

```javascript
function greet() {
    console.log("Hello");
}
```

Calling Function:

```javascript
greet();
```

Output:

```text
Hello
```

---

# Arrays

Arrays store multiple values.

Example:

```javascript
const fruits = [
  "Apple",
  "Mango",
  "Banana"
];
```

Accessing values:

```javascript
console.log(fruits[0]);
```

Output:

```text
Apple
```

---

# Objects

Objects store data as key-value pairs.

Example:

```javascript
const employee = {
  name: "Pragya",
  role: "Developer"
};
```

Accessing:

```javascript
console.log(employee.name);
```

Output:

```text
Pragya
```

---

# Summary

After learning this topic, you should understand:

✅ What JavaScript is

✅ What ECMAScript means

✅ Why ES6 is important

✅ Variables (let and const)

✅ Data Types

✅ Operators

✅ Functions

✅ Arrays

✅ Objects

These concepts form the foundation for learning React.