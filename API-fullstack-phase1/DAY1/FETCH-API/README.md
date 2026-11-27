# Fetching Data in React

## Overview

Fetching data from APIs is an important part of React applications. APIs provide data from servers, and React components can retrieve and display that data dynamically. React commonly uses the Fetch API along with Hooks such as useEffect and useState to handle API calls.

---

## Using Fetch API

The Fetch API is a built-in JavaScript feature used to send HTTP requests and receive data from servers.

Example:

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

---

## Understanding Async API Calls

API requests do not return data immediately. Since they take time to complete, JavaScript handles them asynchronously using async and await.

Example:

```javascript
const fetchEmployees = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await response.json();
  console.log(data);
};
```

Benefits:
- Non-blocking operations
- Better user experience
- Cleaner and readable code using async/await

---

## Handling API Responses

After data is received from an API, it is usually stored in React state and displayed on the screen.

Example:

```javascript
const [employees, setEmployees] = useState([]);

setEmployees(data);
```

---

## Error Handling

Errors can occur because of network failures, invalid URLs, or server issues. These errors should be handled using try-catch blocks.

Example:

```javascript
try {
  const response = await fetch(API_URL);
  const data = await response.json();
} catch (error) {
  console.log(error);
}
```

Benefits:
- Prevents application crashes
- Displays meaningful error messages
- Improves reliability

---

## Workflow

1. Component loads.
2. useEffect executes.
3. Fetch API request is sent.
4. Data is received from server.
5. Data is stored in state.
6. UI re-renders and displays data.
7. Errors are handled if the request fails.

---

## Difference Between REST API and Fetch API

| REST API | Fetch API |
|-----------|------------|
| REST API is a set of architectural rules used to create web services. | Fetch API is a JavaScript API used to make HTTP requests. |
| It provides data from the server. | It requests and receives data from the server. |
| It is a backend/web service concept. | It is a client-side JavaScript feature. |
| REST APIs expose endpoints such as `/users`, `/employees`, `/products`, etc. | Fetch API is used to call those endpoints. |
| Supports HTTP methods like GET, POST, PUT, and DELETE. | Uses HTTP methods to interact with REST APIs. |
| Example: `https://jsonplaceholder.typicode.com/users` | Example: `fetch("https://jsonplaceholder.typicode.com/users")` |
| Defines how data is exchanged between systems. | Retrieves and processes that data in applications. |

### Example

#### REST API Endpoint

```text
https://jsonplaceholder.typicode.com/users
```

This endpoint provides user data from the server.

#### Fetch API Call

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

This Fetch API call requests data from the REST API and displays it.

### Workflow

```text
React Application
        ↓
     Fetch API
        ↓
      REST API
        ↓
     JSON Data
        ↓
     React UI
```

## Conclusion

Fetching data in React allows applications to communicate with servers and display dynamic information. By combining Fetch API, async/await, useState, and useEffect, developers can efficiently retrieve, manage, and render data while handling errors gracefully.

REST API and Fetch API are not the same. A REST API provides data through endpoints, while the Fetch API is a JavaScript mechanism used to consume that data from the client side.
