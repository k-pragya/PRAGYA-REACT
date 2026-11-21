# Destructuring

Destructuring is an ES6 feature that allows us to extract values from objects and arrays and store them in variables in a cleaner way.

Without destructuring:

```javascript
const employee = {
  name: "Pragya",
  role: "Developer"
};

const name = employee.name;
const role = employee.role;
```

With destructuring:

```javascript
const { name, role } = employee;
```

---

## Object Destructuring

Used to extract values from objects.

### Syntax

```javascript
const { property1, property2 } = object;
```

### Example

```javascript
const employee = {
  name: "Pragya",
  role: "Developer"
};

const { name, role } = employee;

console.log(name);
console.log(role);
```

---

## Array Destructuring

Used to extract values from arrays.

### Syntax

```javascript
const [value1, value2] = array;
```

### Example

```javascript
const colors = ["Red", "Blue", "Green"];

const [firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);
```

---

## Assigning Default Values

```javascript
const employee = {
  name: "Pragya"
};

const { city = "Mumbai" } = employee;

console.log(city);
```

Output:

```text
Mumbai
```

---

## Destructuring in React

### Props

```jsx
function EmployeeCard({ name, role }) {
  return (
    <h2>
      {name} - {role}
    </h2>
  );
}
```

### useState

```jsx
const [count, setCount] = useState(0);
```

---

## Important Points

- Works with objects and arrays.
- Makes code cleaner and shorter.
- Frequently used with React Props.
- Frequently used with useState().
- Improves code readability.

---

## Summary

- Object destructuring extracts values from objects.
- Array destructuring extracts values from arrays.
- Default values can be assigned.
- Commonly used in React applications.