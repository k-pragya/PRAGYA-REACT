# JavaScript Modules (Import & Export)

JavaScript Modules help organize code by splitting it into multiple files. Functions, variables, or classes can be exported from one file and imported into another.

Modules improve code reusability and maintainability.

---

## Export

The `export` keyword is used to make variables, functions, or classes available to other files.

### Example

```javascript
export const company = "Capgemini";
```

Exporting a function:

```javascript
export function add(a, b) {
  return a + b;
}
```

---

## Import

The `import` keyword is used to access exported values from another file.

### Example

```javascript
import { add } from "./math.js";

console.log(add(10, 20));
```

Output:

```text
30
```

---

## Named Export

Multiple values can be exported from the same file.

```javascript
export const name = "Pragya";

export function greet() {
  console.log("Hello");
}
```

Import:

```javascript
import { name, greet } from "./data.js";
```

---

## Default Export

A file can have one default export.

```javascript
export default function greet() {
  console.log("Hello");
}
```

Import:

```javascript
import greet from "./greet.js";
```

Notice that curly braces are not used.

---

## React Usage

React projects use import and export extensively.

```jsx
import EmployeeCard from "./EmployeeCard";
```

```jsx
export default EmployeeCard;
```

Every React component is typically exported and imported using modules.

---

## Important Points

- Modules help organize code into multiple files.
- `export` shares values with other files.
- `import` accesses exported values.
- Named exports use `{}`.
- Default exports do not use `{}`.
- React applications rely heavily on modules.

---

## Summary

- Export makes code available to other files.
- Import uses code from other files.
- Supports code reusability.
- Makes large applications easier to manage.
- Essential for React development.