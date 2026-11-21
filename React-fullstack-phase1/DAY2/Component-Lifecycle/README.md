# Component Lifecycle

The Component Lifecycle refers to the different stages a React component goes through from creation to removal from the screen.

In Class Components, lifecycle methods are used to control these stages. In Functional Components, the same behavior is achieved using the `useEffect()` Hook.

---

## Lifecycle Phases

### 1. Mounting

Mounting is the process of creating and displaying a component for the first time.

Example:

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

The component is mounted when it appears on the screen.

---

### 2. Updating

Updating occurs when a component's state or props change.

Example:

```jsx
setCount(count + 1);
```

React updates the UI with the latest data.

---

### 3. Unmounting

Unmounting occurs when a component is removed from the screen.

Example:

```jsx
{
  showComponent && <EmployeeCard />
}
```

When `showComponent` becomes false, the component is unmounted.

---

## Lifecycle in Functional Components

React uses the `useEffect()` hook to perform lifecycle-related operations.

### On Component Mount

```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```

Runs only once after the component is rendered.

---

### On Component Update

```jsx
useEffect(() => {
  console.log("Count Updated");
}, [count]);
```

Runs whenever `count` changes.

---

### On Component Unmount

```jsx
useEffect(() => {

  return () => {
    console.log("Component Unmounted");
  };

}, []);
```

Runs before the component is removed.

---

## React Usage

Lifecycle methods are commonly used for:

- API Calls
- Event Listeners
- Timers
- Data Fetching
- Cleanup Operations

---

## Important Points

- Components go through Mounting, Updating, and Unmounting phases.
- Functional Components use `useEffect()`.
- Cleanup functions are used during unmounting.
- Lifecycle methods help manage side effects.

---

## Summary

- Mounting → Component is created.
- Updating → State or Props change.
- Unmounting → Component is removed.
- useEffect() is used to handle lifecycle events in Functional Components.