# React Router Basics

React Router is a library used for navigation between pages in React applications without refreshing the browser.

---

## Installing React Router

```bash
npm install react-router-dom
```

---

## BrowserRouter

Provides routing functionality to the application.

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## Route

Used to define a page.

```jsx
<Route
  path="/"
  element={<HomePage />}
/>
```

---

## Routes

Groups all routes.

```jsx
<Routes>
  <Route
    path="/"
    element={<HomePage />}
  />
</Routes>
```

---

## Link

Used for navigation.

```jsx
<Link to="/">
  Home
</Link>
```

---

## Route Parameters

Used to pass values through URLs.

```jsx
<Route
  path="/employee/:id"
  element={<EmployeeDetails />}
/>
```

Getting Parameter:

```jsx
const { id } = useParams();
```

---

## Common Use Cases

- Multi-page Applications
- Product Details Page
- Employee Details Page
- Navigation Menus

---

## Important Points

- React Router enables navigation.
- BrowserRouter wraps the application.
- Routes define paths.
- Link is used for navigation.
- useParams reads route parameters.

---

## Summary

- React Router creates single-page applications.
- Navigation happens without page refresh.
- Routes, Route, Link, and useParams are core concepts.