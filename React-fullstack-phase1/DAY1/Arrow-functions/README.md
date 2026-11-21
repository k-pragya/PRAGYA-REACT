# Arrow Functions

## What are Arrow Functions?

Arrow functions are a shorter way of writing functions introduced in ES6.

Instead of:

function add(a, b) {
    return a + b;
}

We can write:

const add = (a, b) => {
    return a + b;
};

## Syntax

const functionName = (parameters) => {
    // code
};

## Types of Arrow Functions

### No Parameters

const greet = () => {
    console.log("Hello");
};

### One Parameter

const square = num => {
    return num * num;
};

### Multiple Parameters

const add = (a, b) => {
    return a + b;
};

## Implicit Return

const add = (a, b) => a + b;

When a function contains a single expression, return can be omitted.

## Arrow Functions with Array Methods

const numbers = [1, 2, 3];

const doubled = numbers.map(
    num => num * 2
);

Output:

[2, 4, 6]

## Arrow Functions in React

function App() {

    const handleClick = () => {
        alert("Button Clicked");
    };

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );
}

## Important Points

- Shorter syntax than traditional functions.
- Widely used in React.
- Commonly used with map(), filter(), and reduce().
- Supports implicit return.
- Does not create its own this keyword.