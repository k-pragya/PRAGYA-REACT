# Lists & Keys

Lists are used to display multiple items dynamically in React. Instead of writing the same JSX repeatedly, we can use the `map()` method to render data from an array.

Keys help React identify which items have changed, been added, or removed.

---

## Rendering Lists

The `map()` method is commonly used to display a list of items.

### Example

```jsx
const employees = [
  "Pragya",
  "Rohit",
  "Prakriti"
];

function App() {
  return (
    <div>
      {
        employees.map(employee =>
          <h2>{employee}</h2>
        )
      }
    </div>
  );
}
```

---

## What are Keys?

A Key is a unique identifier assigned to elements created inside a list.

### Syntax

```jsx
key={uniqueValue}
```

### Example

```jsx
const employees = [
  { id: 1, name: "Pragya" },
  { id: 2, name: "Rohit" }
];

employees.map(employee =>
  <h2 key={employee.id}>
    {employee.name}
  </h2>
)
```

---

## Why are Keys Important?

Keys help React:

- Track list items efficiently
- Improve performance
- Update only changed elements
- Avoid rendering issues

---

## Dynamic List Rendering

```jsx
const products = [
  {
    id: 1,
    name: "Laptop"
  },
  {
    id: 2,
    name: "Mouse"
  }
];
```

```jsx
{
  products.map(product => (
    <h3 key={product.id}>
      {product.name}
    </h3>
  ))
}
```

---

## Common Mistakes

### Missing Key

```jsx
employees.map(employee =>
  <h2>{employee.name}</h2>
)
```

React will display a warning.

### Correct

```jsx
employees.map(employee =>
  <h2 key={employee.id}>
    {employee.name}
  </h2>
)
```

---

## React Usage

Lists and Keys are commonly used for:

- Employee Lists
- Product Lists
- Search Results
- API Data Display
- Table Rendering

---

## Important Points

- `map()` is used to render lists.
- Each list item should have a unique key.
- Keys improve React performance.
- IDs are preferred as keys.

---

## Summary

- Lists display multiple items dynamically.
- React uses `map()` for rendering lists.
- Keys uniquely identify list items.
- Lists and Keys are used extensively in React applications.