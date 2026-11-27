# CRUD Operations in React

## Topics Covered

- Create Records
- Read Records
- Update Records
- Delete Records

---

## What is CRUD?

CRUD represents the four basic operations performed on data.

| Operation | Meaning |
|-----------|----------|
| Create | Add new data |
| Read | View existing data |
| Update | Modify existing data |
| Delete | Remove existing data |

---

## Create Operation

Used to add a new record.

Example:

```jsx
setEmployees([...employees, newEmployee]);
```

---

## Read Operation

Used to display existing records.

Example:

```jsx
employees.map((employee) => (
  <li>{employee.name}</li>
))
```

---

## Update Operation

Used to modify existing records.

Example:

```jsx
employees.map((employee) =>
  employee.id === id
    ? { ...employee, name: updatedName }
    : employee
);
```

---

## Delete Operation

Used to remove records.

Example:

```jsx
employees.filter(
  (employee) => employee.id !== id
);
```

---

## Why CRUD is Important?

- Data Management
- Employee Management Systems
- Student Portals
- E-Commerce Applications
- Inventory Management Systems

---

## Easy Way To Remember

```text
C → Create → Add

R → Read → View

U → Update → Edit

D → Delete → Remove
```

---

## Conclusion

CRUD operations allow users to Create, Read, Update and Delete data. These operations form the foundation of most real-world web applications.