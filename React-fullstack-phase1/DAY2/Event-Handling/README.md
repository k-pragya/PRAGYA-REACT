# Event Handling

Event Handling in React is used to perform actions when a user interacts with the application.

Common events include:

- Button Click
- Input Change
- Form Submit
- Mouse Hover

React handles events using functions called event handlers.

---

## Syntax

```jsx
<button onClick={handleClick}>
  Click Me
</button>
```

When the button is clicked, the `handleClick` function is executed.

---

## Click Event

### Example

```jsx
function App() {

  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

---

## Passing Arguments

```jsx
function greet(name) {
  alert(`Hello ${name}`);
}

<button
  onClick={() => greet("Pragya")}
>
  Greet
</button>
```

---

## Input Change Event

Used to capture user input.

```jsx
<input
  onChange={(event) =>
    console.log(event.target.value)
  }
/>
```

---

## Form Submit Event

```jsx
function handleSubmit(event) {

  event.preventDefault();

  console.log("Form Submitted");
}
```

```jsx
<form onSubmit={handleSubmit}>
  <button type="submit">
    Submit
  </button>
</form>
```

`event.preventDefault()` prevents page refresh.

---

## React Usage

Events are commonly used for:

- Form Handling
- Search Functionality
- Button Actions
- Show/Hide Components
- Navigation

---

## Important Points

- React events use camelCase.
- Event handlers are functions.
- Events can access the event object.
- Arrow functions are commonly used with events.

---

## Summary

- Event Handling responds to user actions.
- onClick handles button clicks.
- onChange handles input changes.
- onSubmit handles form submissions.
- Essential for creating interactive React applications.