# Components

Components are the building blocks of a React application. A component is a reusable piece of UI that can contain its own structure, logic, and styling.

Instead of creating an entire page in one file, React applications are divided into smaller components.

---

## Why Components?

Components help:

- Reuse code
- Organize applications
- Improve maintainability
- Build complex UIs easily

Example:

```text
Website
│
├── Header
├── Sidebar
├── Main Content
└── Footer
```

Each section can be a separate component.

---

## Creating a Component

A React component is usually a JavaScript function that returns JSX.

### Example

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}
```

---

## Using a Component

```jsx
function App() {
  return (
    <>
      <Welcome />
    </>
  );
}
```

The component name must start with a capital letter.

---

## Reusable Components

A component can be used multiple times.

```jsx
function App() {
  return (
    <>
      <Welcome />
      <Welcome />
      <Welcome />
    </>
  );
}
```

---

## Component Structure

```jsx
function ComponentName() {
  return (
    <h1>Content</h1>
  );
}

export default ComponentName;
```

---

## React Usage

Example:

```jsx
function EmployeeCard() {
  return (
    <div>
      <h2>Pragya</h2>
      <p>Developer</p>
    </div>
  );
}
```

Used in App:

```jsx
<EmployeeCard />
```

---

## Important Points

- Components are reusable UI blocks.
- Component names start with a capital letter.
- Components return JSX.
- Components help organize applications.
- React applications are built using multiple components.

---

## Summary

- Components are the foundation of React.
- They improve reusability and maintainability.
- A single application can have many components working together.