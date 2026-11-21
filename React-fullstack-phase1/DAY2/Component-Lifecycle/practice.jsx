import { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0);

  // Mounting

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // Updating

  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);

  // Unmounting

  useEffect(() => {

    return () => {
      console.log("Component Unmounted");
    };

  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default App;