# Introduction to APIs

## What is an API?

API (Application Programming Interface) allows two applications to communicate with each other. It acts as a bridge between the frontend and backend. For example, a React application can request employee data from a server using an API.

---

## REST API Basics

REST API is a commonly used architecture for web services. It uses endpoints (URLs) and HTTP methods to perform operations on data.

Example:

```text
https://api.company.com/employees
```

---

## HTTP Methods

### GET
Used to fetch data from the server.

```http
GET /employees
```

### POST
Used to create new data.

```http
POST /employees
```

### PUT
Used to update existing data.

```http
PUT /employees/1
```

### DELETE
Used to delete data.

```http
DELETE /employees/1
```

---

## Request and Response

A request is sent from the client to the server.

Example Request:

```json
{
  "name": "Pragya"
}
```

A response is returned by the server.

Example Response:

```json
{
  "id": 1,
  "name": "Pragya"
}
```

---

## JSON Fundamentals

JSON (JavaScript Object Notation) is a lightweight format used to exchange data between applications.

Example:

```json
{
  "id": 1,
  "name": "Pragya",
  "designation": "Software Engineer"
}
```

---

## Postman

Postman is an API testing tool used to send requests to APIs and view responses without writing code. It helps developers test API endpoints before integrating them into applications.

### Testing a GET Request

1. Open Postman.
2. Select **GET** method.
3. Enter API URL.

```text
https://jsonplaceholder.typicode.com/users
```

4. Click **Send**.
5. View the response data returned by the API.

### Testing a POST Request

1. Select **POST** method.
2. Enter API URL.

```text
https://jsonplaceholder.typicode.com/users
```

3. Open **Body → Raw → JSON**.
4. Enter JSON data.

```json
{
  "name": "Pragya",
  "email": "pragya@gmail.com"
}
```

5. Click **Send**.
6. Verify the response.

---

## REST API vs Postman

| REST API | Postman |
|-----------|----------|
| Provides data and services. | Tests and consumes APIs. |
| Contains API endpoints. | Sends requests to endpoints. |
| Returns responses. | Displays responses. |
| Used by applications. | Used by developers for testing. |

---

## Key Points

- API connects frontend and backend.
- REST API uses HTTP methods.
- GET fetches data.
- POST creates data.
- PUT updates data.
- DELETE removes data.
- JSON is used for data exchange.
- Postman is used to test APIs before integrating them into applications.