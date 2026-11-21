import { useState } from "react";

// Functional Component

function EmployeeCard({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

// Functional Component with State

function Counter() {

  const [count, setCount] =
    useState(0);

  return (
    <div>
      <h3>Count: {count}</h3>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </div>
  );
}

// App Component

function App() {

  return (
    <div>
      <h1>Functional Components Demo</h1>

      <EmployeeCard
        name="Pragya"
        role="Software Engineer"
      />

      <EmployeeCard
        name="Rohit"
        role="Frontend Developer"
      />

      <Counter />
    </div>
  );
}

export default App;