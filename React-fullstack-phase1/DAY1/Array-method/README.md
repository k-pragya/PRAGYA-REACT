# Array Methods (map, filter, reduce)

Array methods are built-in JavaScript functions used to perform operations on arrays. They are widely used in React for rendering lists, searching data, and calculations.

## map()

Creates a new array by transforming each element of an existing array.

### Syntax

```javascript
array.map(callbackFunction)
```

### Example

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
```

Output:

```text
[2, 4, 6]
```

---

## filter()

Creates a new array containing only elements that satisfy a condition.

### Syntax

```javascript
array.filter(callbackFunction)
```

### Example

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers =
numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
```

Output:

```text
[2, 4]
```

---

## reduce()

Reduces an array to a single value.

### Syntax

```javascript
array.reduce(callbackFunction, initialValue)
```

### Example

```javascript
const numbers = [1, 2, 3, 4];

const total =
numbers.reduce(
  (sum, num) => sum + num,
  0
);

console.log(total);
```

Output:

```text
10
```

---

## React Usage

### map()

Used to display lists.

```jsx
employees.map(employee =>
  <h2 key={employee.id}>
    {employee.name}
  </h2>
)
```

### filter()

Used for search functionality.

```javascript
employees.filter(
  employee =>
  employee.name.includes(search)
)
```

### reduce()

Used for calculations such as totals.

```javascript
const totalSalary =
employees.reduce(
  (total, employee) =>
  total + employee.salary,
  0
)
```

---

## Summary

- map() → Transform data
- filter() → Select data
- reduce() → Calculate a single value
- Frequently used in React applications