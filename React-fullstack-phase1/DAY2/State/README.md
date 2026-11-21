# State

State is a built-in React feature used to store and manage data within a component. When state changes, React automatically updates the UI.

State makes components dynamic and interactive.

---

## Why State?

Without State:

```jsx
function Counter() {
  let count = 0;

  return <h2>{count}</h2>;
}
```

The value will not update on the screen.

With State:

```jsx
const [count, setCount] = useState(0);
```

React automatically updates the UI whenever the state changes.

---

## useState Hook

State is commonly managed using the `useState()` Hook.

### Syntax

```jsx
const [state, setState] = useState(initialValue);
```

Example:

```jsx
const [count, setCount] = useState(0);
```

Where:

- `count` → Current state value
- `setCount` → Function to update state
- `0` → Initial value

---

## Updating State

```jsx
setCount(count + 1);
```

Every time this runs, React re-renders the component with the updated value.

---

## Example

```jsx
const [count, setCount] = useState(0);

<button
  onClick={() => setCount(count + 1)}
>
  Increment
</button>
```

---

## State with Strings

```jsx
const [name, setName] = useState("Pragya");
```

Updating:

```jsx
setName("Rohit");
```

---

## State with Objects

```jsx
const [employee, setEmployee] =
useState({
  name: "Pragya",
  role: "Developer"
});
```

Updating:

```jsx
setEmployee({
  ...employee,
  role: "Senior Developer"
});
```

---

## React Usage

State is commonly used for:

- Counters
- Forms
- Search Functionality
- Show/Hide Components
- API Data Storage

---

## Important Points

- State stores component data.
- Updating state re-renders the component.
- useState() is the most commonly used Hook.
- State should be updated using setter functions.
- State makes React applications interactive.

---

## Summary

- State is used to manage data in a component.
- useState() creates and manages state.
- UI updates automatically when state changes.
- Widely used in forms, counters, and search functionality.