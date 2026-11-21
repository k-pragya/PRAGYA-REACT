# Forms in React

Forms are used to collect user input. React uses Controlled Components to manage form data through State.

---

## Controlled Components

A Controlled Component is an input element whose value is controlled by React State.

```jsx
const [name, setName] =
  useState("");
```

---

## Handling Form Input

```jsx
<input
  value={name}
  onChange={(e) =>
    setName(e.target.value)
  }
/>
```

---

## Form Submission

```jsx
function handleSubmit(e) {

  e.preventDefault();

  console.log(name);
}
```

---

## Basic Validation

```jsx
if(name.trim() === "") {
  alert("Name Required");
}
```

---

## Common Use Cases

- Registration Forms
- Login Forms
- Employee Forms
- Search Forms

---

## Important Points

- Controlled Components use State.
- onChange updates State.
- onSubmit handles form submission.
- Validation improves data quality.

---

## Summary

- Form data is managed using State.
- Controlled Components are preferred.
- Validation ensures correct user input.