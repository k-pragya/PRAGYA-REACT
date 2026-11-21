# JSX (JavaScript XML)

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like code inside React.

JSX makes React code easier to read and write.

---

## Why JSX?

Without JSX:

```javascript
React.createElement(
  "h1",
  null,
  "Hello React"
);
```

With JSX:

```jsx
<h1>Hello React</h1>
```

JSX is simpler and more readable.

---

## Rules of JSX

### 1. Return a Single Parent Element

Incorrect:

```jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

Correct:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

---

### 2. Use className Instead of class

HTML:

```html
<h1 class="title">
```

JSX:

```jsx
<h1 className="title">
```

---

### 3. JavaScript Expressions Use {}

```jsx
const name = "Pragya";

return (
  <h1>Hello {name}</h1>
);
```

Output:

```text
Hello Pragya
```

---

## JSX with Expressions

```jsx
const a = 10;
const b = 20;

return (
  <h1>Total: {a + b}</h1>
);
```

Output:

```text
Total: 30
```

---

## JSX with Variables

```jsx
const role = "Developer";

return (
  <p>{role}</p>
);
```

---

## Important Points

- JSX looks similar to HTML.
- JSX is not HTML.
- JavaScript code is written inside `{}`.
- JSX makes React components easier to read.
- Every React component returns JSX.

---

## Summary

- JSX stands for JavaScript XML.
- Used to write UI in React.
- Supports JavaScript expressions using `{}`.
- Makes React code cleaner and more readable.