# React Hooks Introduction

Hooks are special functions introduced in React 16.8 that allow Functional Components to use React features such as State and Lifecycle methods.

Before Hooks, only Class Components could manage state and lifecycle functionality.

Hooks made Functional Components more powerful and are now the preferred approach in React.

---

## Why Hooks?

Before Hooks:

- State was managed using Class Components.
- Lifecycle methods were available only in Class Components.
- More code was required.

Hooks allow us to use these features directly inside Functional Components.

---

## Rules of Hooks

### 1. Call Hooks at the Top Level

✅ Correct

```jsx
const [count, setCount] = useState(0);
```

❌ Incorrect

```jsx
if (true) {
  useState(0);
}
```

---

### 2. Call Hooks Only Inside React Functions

✅ Functional Components

```jsx
function App() {
  const [count, setCount] = useState(0);
}
```

✅ Custom Hooks

```jsx
function useCounter() {
}
```

---

## Common React Hooks

### useState

Used to manage state.

```jsx
const [count, setCount] = useState(0);
```

---

### useEffect

Used for side effects such as:

- API Calls
- Timers
- Event Listeners

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

---

## Benefits of Hooks

- Less code
- Easier to understand
- Reusable logic
- Better code organization
- No need for Class Components

---

## React Usage

Hooks are commonly used for:

- Managing State
- API Calls
- Form Handling
- Search Functionality
- Component Lifecycle

---

## Important Points

- Hooks work only in Functional Components.
- Hooks make Functional Components powerful.
- useState and useEffect are the most commonly used Hooks.
- Hooks simplify React development.

---

## Summary

- Hooks allow Functional Components to use React features.
- Introduced in React 16.8.
- Replace many uses of Class Components.
- useState and useEffect are the most important Hooks.