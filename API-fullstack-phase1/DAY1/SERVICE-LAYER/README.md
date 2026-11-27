# Service Layer Best Practices

## Topics Covered

- Creating API Service Files
- Separating Business Logic from UI
- Environment Variables for API URLs

---

## What is a Service Layer?

A Service Layer is a dedicated folder that contains all API-related code.

Instead of writing API calls inside React components, they are moved to service files.

---

## Why Use a Service Layer?

- Cleaner Components
- Better Code Reusability
- Easier Maintenance
- Centralized API Management
- Better Project Structure

---

## Without Service Layer

```jsx
axios.get("https://jsonplaceholder.typicode.com/users");
```

API call is directly inside the component.

---

## With Service Layer

```jsx
import { getEmployees } from "../services/employeeService";
```

Component only calls the function.

```jsx
const data = await getEmployees();
```

---

## Environment Variables

Environment Variables store configuration values outside the code.

Example:

```env
VITE_API_URL=https://jsonplaceholder.typicode.com
```

---

## Benefits of Environment Variables

- Easy URL Management
- Different URLs for Dev/Test/Prod
- Improved Security
- No Hardcoded URLs

---

## Project Structure

```text
src
|
|-- components
|     EmployeeList.jsx
|
|-- services
|     employeeService.js
|
|-- .env
```

---

## Conclusion

A Service Layer separates API logic from UI code, while Environment Variables help manage API URLs efficiently. Together they improve maintainability and scalability.