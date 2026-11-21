# useEffect Hook

The `useEffect` Hook is used to perform side effects in Functional Components.

A side effect is any operation that happens outside of rendering the UI, such as:

- Fetching data from an API
- Setting timers
- Updating the document title
- Adding event listeners

---

## Importing useEffect

```jsx
import { useEffect } from "react";
```

---

## Syntax

```jsx
useEffect(() => {

  // Side Effect

}, []);
```

The first argument is a callback function.

The second argument is called the Dependency Array.

---

## Running Once on Component Mount

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

Runs only once when the component loads.

---

## Running on State Change

```jsx
useEffect(() => {
  console.log("Count Updated");
}, [count]);
```

Runs whenever `count` changes.

---

## Running After Every Render

```jsx
useEffect(() => {
  console.log("Component Rendered");
});
```

Runs after every render.

---

## Cleanup Function

Used to clean resources before a component is removed.

```jsx
useEffect(() => {

  return () => {
    console.log("Component Unmounted");
  };

}, []);
```

---

## API Call Example

```jsx
useEffect(() => {

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data));

}, []);
```

---

## Common Use Cases

- API Calls
- Timers
- Event Listeners
- Component Lifecycle Operations

---

## Important Points

- useEffect handles side effects.
- Dependency array controls when useEffect runs.
- Empty array `[]` means run once.
- Cleanup functions run before unmounting.
- Frequently used for API calls.

---

## Summary

- useEffect is used for side effects.
- It replaces lifecycle methods in Functional Components.
- The dependency array controls execution.
- One of the most important React Hooks.