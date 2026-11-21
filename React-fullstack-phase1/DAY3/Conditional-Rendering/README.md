# Conditional Rendering

Conditional Rendering is the process of displaying different UI elements based on a condition.

It allows React applications to show, hide, or switch content dynamically.

---

## Why Conditional Rendering?

In real-world applications, content often depends on:

- User Login Status
- Loading State
- API Responses
- User Roles
- Show/Hide Features

Conditional Rendering helps display the appropriate UI.

---

## Using if Statement

```jsx
function App() {

  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  }

  return <h1>Please Login</h1>;
}
```

---

## Using Ternary Operator

```jsx
function App() {

  const isLoggedIn = true;

  return (
    <h1>
      {
        isLoggedIn
          ? "Welcome User"
          : "Please Login"
      }
    </h1>
  );
}
```

---

## Using Logical && Operator

Used when content should only appear if the condition is true.

```jsx
function App() {

  const showMessage = true;

  return (
    <div>
      {
        showMessage &&
        <h2>Hello React</h2>
      }
    </div>
  );
}
```

---

## Show / Hide Component

```jsx
{
  showDetails &&
  <EmployeeCard />
}
```

Component appears only when `showDetails` is true.

---

## React Usage

Conditional Rendering is commonly used for:

- Login/Logout Screens
- Loading Indicators
- Error Messages
- Search Results
- Show/Hide Components

---

## Important Points

- UI changes based on conditions.
- if statement can be used for complex conditions.
- Ternary operator is commonly used in JSX.
- && operator is used to display content conditionally.

---

## Summary

- Conditional Rendering shows different UI based on conditions.
- Supports if statements, ternary operators, and && operators.
- Helps create dynamic and interactive applications.