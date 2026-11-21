import { useState } from "react";

function App() {

  const [name, setName] =
    useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (name.trim() === "") {
      alert("Name is required");
      return;
    }

    alert(`Welcome ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button type="submit">
        Submit
      </button>

    </form>
  );
}

export default App;