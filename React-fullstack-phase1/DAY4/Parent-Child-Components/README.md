# Parent & Child Components

React applications are built using multiple components. Components can communicate with each other by passing data from a Parent Component to a Child Component using Props.

This helps create reusable and maintainable applications.

---

## Parent Component

A Parent Component is the component that sends data.

```jsx
<EmployeeCard
  name="Pragya"
  role="Developer"
/>
```

---

## Child Component

A Child Component receives data through Props.

```jsx
function EmployeeCard({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}
```

---

## Reusable Components

The same component can be used multiple times with different data.

```jsx
<EmployeeCard
  name="Pragya"
  role="Developer"
/>

<EmployeeCard
  name="Rohit"
  role="Tester"
/>
```

---

## Component Composition

Component Composition means combining smaller components to create larger components.

```jsx
function Dashboard() {
  return (
    <div>
      <Header />
      <EmployeeList />
      <Footer />
    </div>
  );
}
```

---

## Important Points

- Parent components send data.
- Child components receive data using Props.
- Components can be reused multiple times.
- Component Composition improves organization.

---

## Summary

- Props are used to pass data from Parent to Child.
- Components become reusable.
- Large applications are built using smaller components.