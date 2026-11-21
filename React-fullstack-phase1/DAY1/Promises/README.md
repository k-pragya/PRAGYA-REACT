# Promises

A Promise is a JavaScript object used to handle asynchronous operations. It represents a value that may be available now, later, or never.

Promises help avoid callback nesting and make asynchronous code easier to manage.

---

## Promise States

A Promise can be in one of three states:

- Pending → Initial state
- Resolved (Fulfilled) → Operation completed successfully
- Rejected → Operation failed

---

## Creating a Promise

### Syntax

```javascript
const promise = new Promise(
  (resolve, reject) => {
    // code
  }
);
```

### Example

```javascript
const promise = new Promise(
  (resolve, reject) => {
    resolve("Success");
  }
);
```

---

## .then()

Used to handle successful completion of a Promise.

```javascript
promise
  .then(result => {
    console.log(result);
  });
```

Output:

```text
Success
```

---

## .catch()

Used to handle errors.

```javascript
promise
  .catch(error => {
    console.log(error);
  });
```

---

## Example with Resolve and Reject

```javascript
const isLoggedIn = true;

const userPromise = new Promise(
  (resolve, reject) => {
    if (isLoggedIn) {
      resolve("Login Successful");
    } else {
      reject("Login Failed");
    }
  }
);

userPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

---

## Promises in React

Promises are commonly used when fetching data from APIs.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

---

## Important Points

- Used for asynchronous operations.
- Prevent callback nesting.
- Supports success and error handling.
- Commonly used with APIs.
- Forms the foundation for Async/Await.

---

## Summary

- Promise represents a future result.
- resolve() indicates success.
- reject() indicates failure.
- .then() handles success.
- .catch() handles errors.
- Widely used for API calls in React applications.
