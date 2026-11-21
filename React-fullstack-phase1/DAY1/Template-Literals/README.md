# Template Literals

Template Literals are an ES6 feature that allows us to create strings using backticks (` `). They make it easier to include variables and multi-line text within strings.

---

## Syntax

```javascript
`text`
```

Variables can be inserted using:

```javascript
${variable}
```

---

## String Concatenation

Before ES6:

```javascript
const name = "Pragya";

console.log("Hello " + name);
```

Using Template Literals:

```javascript
const name = "Pragya";

console.log(`Hello ${name}`);
```

Output:

```text
Hello Pragya
```

---

## Using Expressions

Template Literals can evaluate expressions inside `${}`.

```javascript
const a = 10;
const b = 20;

console.log(`Sum: ${a + b}`);
```

Output:

```text
Sum: 30
```

---

## Multi-line Strings

```javascript
const message = `
Welcome
to
JavaScript
`;

console.log(message);
```

No need to use `\n` for new lines.

---

## React Usage

Displaying dynamic data:

```jsx
const name = "Pragya";

return (
  <h2>{`Welcome ${name}`}</h2>
);
```

Building messages:

```javascript
const employee = {
  name: "Pragya",
  role: "Developer"
};

console.log(
  `${employee.name} works as a ${employee.role}`
);
```

---

## Important Points

- Uses backticks (` `) instead of quotes.
- Variables are inserted using `${}`.
- Supports expressions inside strings.
- Supports multi-line strings.
- Frequently used in React applications.

---

## Summary

- Template Literals simplify string creation.
- They replace string concatenation.
- Variables and expressions can be embedded inside strings.
- Useful for dynamic content in JavaScript and React.