import { useState, useEffect } from "react";

function App() {

  const [count, setCount] =
    useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

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
    </div>
  );
}

export default App;