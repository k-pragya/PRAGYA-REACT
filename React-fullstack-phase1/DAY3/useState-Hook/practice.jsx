import { useState } from "react";

function App() {

  const [count, setCount] =
    useState(0);

  const [name, setName] =
    useState("");

  return (
    <div>

      <h2>Count: {count}</h2>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>

      <hr />

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <h3>Hello {name}</h3>

    </div>
  );
}

export default App;