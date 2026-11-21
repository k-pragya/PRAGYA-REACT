import { useState } from "react";

function App() {

  const [name, setName] =
    useState("");

  const handleClick = () => {
    alert("Button Clicked");
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    alert(`Welcome ${name}`);
  };

  return (
    <>
      <button
        onClick={handleClick}
      >
        Click Me
      </button>

      <br />
      <br />

      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;