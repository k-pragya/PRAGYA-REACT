# Event Handling Between Components

React allows communication from a Child Component to a Parent Component by passing functions as Props.

The Parent Component sends a function, and the Child Component calls that function when an event occurs.

---

## Passing Functions as Props

Parent Component:

```jsx
<EmployeeCard
  onDelete={deleteEmployee}
/>
```

Child Component:

```jsx
<button onClick={onDelete}>
  Delete
</button>
```

---

## Child to Parent Communication

Data normally flows from Parent to Child using Props.

To communicate back to the Parent:

1. Parent creates a function.
2. Parent passes the function as a Prop.
3. Child calls the function.

---

## Common Use Cases

- Delete Employee
- Add Employee
- Form Submission
- Updating Parent State

---

## Important Points

- Functions can be passed as Props.
- Child Components can trigger Parent actions.
- This enables Child-to-Parent communication.

---

## Summary

- Parent passes functions as Props.
- Child invokes those functions.
- Used for handling events across components.