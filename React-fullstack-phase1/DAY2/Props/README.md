# Props

Props (Properties) are used to pass data from a Parent Component to a Child Component.

They make components reusable by allowing different data to be passed each time a component is used.

---

## Why Props?

Without Props:

```jsx
function EmployeeCard() {
  return <h2>Pragya</h2>;
}
```

The component always displays the same data.

With Props:

```jsx
function EmployeeCard(props) {
  return <h2>{props.name}</h2>;
}
```

Now the component can display different data.

---

## Passing Props

Parent Component:

```jsx
<EmployeeCard name="Pragya" />
```

Child Component:

```jsx
function EmployeeCard(props) {
  return <h2>{props.name}</h2>;
}
```

Output:

```text
Pragya
```

---

## Multiple Props

```jsx
<EmployeeCard
  name="Pragya"
  role="Developer"
/>
```

```jsx
function EmployeeCard(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
    </>
  );
}
```

---

## Destructuring Props

Instead of:

```jsx
function EmployeeCard(props) {
  return <h2>{props.name}</h2>;
}
```

Use:

```jsx
function EmployeeCard({ name }) {
  return <h2>{name}</h2>;
}
```

This is the preferred approach.

---

## React Usage

Props are commonly used for:

- Passing employee details
- Product information
- User data
- Reusable components

Example:

```jsx
<EmployeeCard
  name="Pragya"
  role="Software Engineer"
/>
```

---

## Important Points

- Props pass data from Parent to Child.
- Props are read-only.
- Components become reusable with Props.
- Destructuring Props improves readability.

---

## Summary

- Props stands for Properties.
- Used for Parent-to-Child communication.
- Makes components reusable.
- Props cannot be modified by the child component.