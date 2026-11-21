# React Fundamentals

React is a JavaScript library used for building user interfaces (UI). It was developed by Meta (Facebook).

React helps developers build fast, reusable, and interactive web applications using components.

---

## Why React?

Before React, webpages were often built using HTML, CSS, and JavaScript separately.

As applications became larger, managing code became difficult.

React solves this by:

- Breaking UI into reusable components
- Updating the UI efficiently
- Managing application state
- Improving code maintainability

---

## Features of React

### Component-Based Architecture

Applications are divided into small reusable components.

Example:

```text
Web Page
│
├── Header
├── Sidebar
├── Main Content
└── Footer
```

---

### Virtual DOM

React creates a virtual copy of the DOM and updates only the changed parts, making applications faster.

---

### Reusable Components

A component can be created once and used multiple times.

Example:

```jsx
<EmployeeCard />
<EmployeeCard />
<EmployeeCard />
```

---

### One-Way Data Flow

Data flows from Parent Component to Child Component using Props.

```text
Parent → Child
```

---

## React Application Structure

A typical React project contains:

```text
src/
├── components/
├── pages/
├── services/
├── App.jsx
└── main.jsx
```

---

## React Workflow

1. Create Components
2. Combine Components
3. Manage State
4. Handle Events
5. Render UI

---

## Important Points

- React is a JavaScript library.
- React uses Components to build UI.
- React follows One-Way Data Binding.
- React uses Virtual DOM for performance.
- Components are reusable.

---

## Summary

- React helps build modern web applications.
- UI is divided into reusable components.
- Data flows from Parent to Child.
- React applications are fast and easy to maintain.