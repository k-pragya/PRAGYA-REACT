import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [showMessage, setShowMessage] =
    useState(true);

  return (
    <div>

      <h2>
        {
          isLoggedIn
            ? "Welcome User"
            : "Please Login"
        }
      </h2>

      <button
        onClick={() =>
          setIsLoggedIn(!isLoggedIn)
        }
      >
        Login / Logout
      </button>

      <hr />

      {
        showMessage &&
        <h3>Hello React</h3>
      }

      <button
        onClick={() =>
          setShowMessage(!showMessage)
        }
      >
        Show / Hide Message
      </button>

    </div>
  );
}

export default App;