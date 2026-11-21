import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function HomePage() {
  return <h2>Home Page</h2>;
}

function EmployeePage() {
  return <h2>Employee Page</h2>;
}

function App() {

  return (
    <BrowserRouter>

      <nav>
        <Link to="/">
          Home
        </Link>

        {" | "}

        <Link to="/employees">
          Employees
        </Link>
      </nav>

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/employees"
          element={<EmployeePage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;