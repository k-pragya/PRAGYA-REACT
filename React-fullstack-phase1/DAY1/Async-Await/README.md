# Async/Await

Async/Await is a modern way of handling asynchronous operations in JavaScript. It is built on top of Promises and makes asynchronous code easier to read and write.

---

## async Keyword

The `async` keyword is used before a function to make it return a Promise.

### Example

```javascript
async function greet() {
  return "Hello";
}

greet().then(
  message => console.log(message)
);
```

Output:

```text
Hello
```

---

## await Keyword

The `await` keyword pauses the execution of a function until a Promise is resolved.

It can only be used inside an async function.

### Example

```javascript
async function getData() {
  const result =
    await Promise.resolve("Data Loaded");

  console.log(result);
}

getData();
```

Output:

```text
Data Loaded
```

---

## Handling Errors

Errors are handled using try...catch.

```javascript
async function fetchData() {
  try {
    const result =
      await Promise.resolve("Success");

    console.log(result);
  }
  catch(error) {
    console.log(error);
  }
}
```

---

## API Calls using Async/Await

```javascript
async function loadUsers() {
  const response =
    await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

  const data =
    await response.json();

  console.log(data);
}
```

---

## React Usage

Async/Await is commonly used inside useEffect() to fetch data from APIs.

```javascript
useEffect(() => {

  async function loadUsers() {
    const response =
      await fetch(url);

    const data =
      await response.json();

    console.log(data);
  }

  loadUsers();

}, []);
```

---

## Important Points

- async makes a function return a Promise.
- await waits for a Promise to complete.
- await can only be used inside async functions.
- Makes asynchronous code easier to read than .then().
- Commonly used for API calls in React.

---

## Summary

- Async/Await simplifies Promise handling.
- async creates asynchronous functions.
- await waits for Promise results.
- try...catch is used for error handling.
- Widely used in modern JavaScript and React applications.
