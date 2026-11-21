# Spread & Rest Operators

Spread (`...`) and Rest (`...`) Operators were introduced in ES6. Although they use the same syntax, they serve different purposes.

- Spread Operator → Expands elements
- Rest Operator → Collects elements

---

## Spread Operator

The Spread Operator is used to expand arrays or objects into individual elements.

### Syntax

```javascript
...
```

### Example: Arrays

```javascript
const numbers1 = [1, 2, 3];
const numbers2 = [...numbers1, 4, 5];

console.log(numbers2);
```

Output:

```text
[1, 2, 3, 4, 5]
```

### Example: Objects

```javascript
const employee = {
  name: "Pragya"
};

const employeeDetails = {
  ...employee,
  role: "Developer"
};

console.log(employeeDetails);
```

---

## Rest Operator

The Rest Operator collects multiple values into a single array.

### Syntax

```javascript
...variableName
```

### Example

```javascript
function add(...numbers) {
  console.log(numbers);
}

add(10, 20, 30);
```

Output:

```text
[10, 20, 30]
```

---

## React Usage

Updating state without changing the original data:

```javascript
const newEmployees = [
  ...employees,
  {
    id: 4,
    name: "Rahul"
  }
];
```

Copying objects:

```javascript
const updatedEmployee = {
  ...employee,
  role: "Senior Developer"
};
```

---

## Important Points

- Spread expands values.
- Rest collects values.
- Both use `...` syntax.
- Spread is commonly used for copying arrays and objects.
- Frequently used in React state updates.

---

## Summary

- Spread Operator expands arrays or objects.
- Rest Operator collects values into an array.
- Both improve code readability.
- Widely used in modern JavaScript and React.