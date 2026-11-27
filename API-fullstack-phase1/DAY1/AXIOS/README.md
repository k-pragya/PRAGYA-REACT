# Axios

## What is Axios?

Axios is a popular JavaScript library used to make HTTP requests in React and JavaScript applications. It helps applications communicate with REST APIs and perform CRUD operations.

Unlike Fetch API, Axios is not built into JavaScript and must be installed separately.

---

## Why Axios?

Axios provides a simpler and cleaner way to work with APIs compared to Fetch API.

### Advantages of Axios

- Simple and clean syntax
- Automatic JSON data conversion
- Better error handling
- Request and Response interceptors
- Request timeout support
- Automatic request cancellation
- Built-in support for request and response transformation

---

## Installation

Install Axios using npm:

```bash
npm install axios
```

Import Axios:

```javascript
import axios from "axios";
```

---

## GET Request

Used to retrieve data from the server.

```javascript
const response = await axios.get(
  "https://jsonplaceholder.typicode.com/users"
);

console.log(response.data);
```

---

## POST Request

Used to create new data.

```javascript
const response = await axios.post(
  "https://jsonplaceholder.typicode.com/users",
  {
    name: "Pragya",
    email: "pragya@gmail.com"
  }
);

console.log(response.data);
```

---

## PUT Request

Used to update existing data.

```javascript
const response = await axios.put(
  "https://jsonplaceholder.typicode.com/users/1",
  {
    name: "Pragya Updated"
  }
);

console.log(response.data);
```

---

## DELETE Request

Used to delete data.

```javascript
const response = await axios.delete(
  "https://jsonplaceholder.typicode.com/users/1"
);

console.log(response.data);
```

---

## Handling Errors

Axios uses try-catch blocks for error handling.

```javascript
try {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
} catch (error) {
  console.log(error.message);
}
```

---

## Axios vs Fetch API

| Axios | Fetch API |
|---------|-----------|
| External library | Built into JavaScript |
| Requires installation | No installation required |
| Automatic JSON conversion | Requires `response.json()` |
| Better error handling | Manual error checking required |
| Cleaner syntax | More code |
| Supports interceptors | No built-in interceptors |
| Supports request timeout | Manual implementation required |
| Supports request cancellation | Limited support |
| Response available in `response.data` | Need `response.json()` |

### Fetch API Example

```javascript
const response = await fetch(
  "https://jsonplaceholder.typicode.com/users"
);

const data = await response.json();
```

### Axios Example

```javascript
const response = await axios.get(
  "https://jsonplaceholder.typicode.com/users"
);

const data = response.data;
```

---

## Easy Way to Remember

```text
REST API
     ↑
Postman
(API Testing Tool)

REST API
     ↑
Fetch API
(Built into JavaScript)

REST API
     ↑
Axios
(JavaScript Library with Extra Features)
```

### Relationship

- REST API provides data.
- Postman tests APIs.
- Fetch API consumes APIs in JavaScript.
- Axios also consumes APIs but provides additional features and cleaner syntax.

---

## Hands-On

### Install and Configure Axios

```bash
npm install axios
```

### Perform CRUD Operations Using Axios

- Fetch employee data using GET request.
- Create employee data using POST request.
- Update employee details using PUT request.
- Delete employee data using DELETE request.
- Handle API errors using try-catch blocks.

---

## Key Points

- Axios is a third-party HTTP client library.
- Supports GET, POST, PUT, and DELETE requests.
- Automatically converts JSON responses.
- Provides cleaner syntax than Fetch API.
- Supports interceptors, timeout, and request cancellation.
- Commonly used in React applications for API communication.