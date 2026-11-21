# Functional Components

Functional Components are JavaScript functions that return JSX. They are the most commonly used type of component in modern React applications.

With the introduction of Hooks, Functional Components can now manage state and lifecycle features just like Class Components.

---

## Why Functional Components?

- Easy to write and understand
- Less code compared to Class Components
- Support React Hooks
- Preferred approach in modern React

---

## Creating a Functional Component

### Syntax

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}
```

A Functional Component must return JSX.

---

## Using a Functional Component

```jsx
function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
```

---

## Reusable Components

A Functional Component can be used multiple times.

```jsx
function Welcome() {
  return <h1>Welcome</h1>;
}

function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}
```

---

## Functional Components with Props

```jsx
function EmployeeCard({ name }) {
  return <h2>{name}</h2>;
}
```

Usage:

```jsx
<EmployeeCard name="Pragya" />
```

---

## Functional Components with State

```jsx
import { useState } from "react";

function Counter() {

  const [count, setCount] =
    useState(0);

  return (
    <button
      onClick={() =>
        setCount(count + 1)
      }
    >
      {count}
    </button>
  );
}
```

---

## Functional vs Class Components

| Functional Components | Class Components |
|------------|------------|
| Simpler Syntax | More Boilerplate Code |
| Uses Hooks | Uses Lifecycle Methods |
| Preferred Approach | Older Approach |
| Easy to Read | More Complex |

---

## Important Points

- Functional Components are JavaScript functions.
- They return JSX.
- They can receive Props.
- They can manage State using Hooks.
- They are the preferred way of building React applications.

---

## Summary

- Functional Components are the foundation of modern React.
- They are reusable and easy to maintain.
- They support Props and Hooks.
- Most React applications today use Functional Components instead of Class Components.