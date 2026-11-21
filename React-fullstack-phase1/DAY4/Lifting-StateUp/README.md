# Lifting State Up

Lifting State Up means moving state from a Child Component to a common Parent Component so that multiple components can share the same data.

The Parent Component becomes the source of truth.

---

## Why Lifting State Up?

Suppose:

- SearchBar needs search text.
- EmployeeList needs search text.

Instead of storing state separately, store it in the Parent Component.

---

## Data Flow

```text
Parent Component
       |
       |
  -------------
  |           |
SearchBar  EmployeeList
```

Both components use the same state.

---

## Benefits

- Shared Data
- Easier Management
- Better Component Communication
- Consistent UI

---

## Important Points

- State should be stored in the closest common Parent.
- Child Components receive data via Props.
- Child Components update data using Callback Functions.

---

## Summary

- Lifting State Up allows components to share data.
- Parent manages the state.
- Child Components communicate through Props.