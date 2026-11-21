# useState Hook

The `useState` Hook is used to add state to Functional Components. State allows a component to store and update data.

Whenever the state changes, React automatically re-renders the component and updates the UI.

---

## Importing useState

```jsx
import { useState } from "react";
```

---

## Syntax

```jsx
const [state, setState] =
  useState(initialValue);
```

Example:

```jsx
const [count, setCount] =
  useState(0);
```

Where:

- `count` → Current state value
- `setCount` → Function used to update state
- `0` → Initial value

---

## Updating State

```jsx
setCount(count + 1);
```

React updates the UI with the new value.

---

## Counter Example

```jsx
const [count, setCount] =
  useState(0);

<button
  onClick={() =>
    setCount(count + 1)
  }
>
  Increment
</button>
```

---

## State with Strings

```jsx
const [name, setName] =
  useState("Pragya");
```

Updating:

```jsx
setName("Rohit");
```

---

## State with Form Inputs

```jsx
const [name, setName] =
  useState("");
```

```jsx
<input
  value={name}
  onChange={(e) =>
    setName(e.target.value)
  }
/>
```

---

## Common Use Cases

- Counter Applications
- Forms
- Search Functionality
- Show/Hide Components
- Toggle Buttons

---

## Important Points

- useState is a React Hook.
- It adds state to Functional Components.
- Updating state re-renders the component.
- State should always be updated using the setter function.

---

## Summary

- useState manages component data.
- State changes automatically update the UI.
- Commonly used in forms, counters, and interactive applications.
- One of the most important React Hooks.