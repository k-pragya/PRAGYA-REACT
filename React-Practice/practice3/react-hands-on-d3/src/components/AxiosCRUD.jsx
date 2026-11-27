import React, { useState } from "react";
import axios from "axios";

function AxiosCRUD() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

  const getEmployee = async () => {
    try {
      setError("");
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setEmployees(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const addEmployee = async () => {
    try {
      setError("");
      const response = await axios.post("https://jsonplaceholder.typicode.com/users",
        {
          id: 11,
          name: "Pragya",
          email: "pragya@gmail.com",
        }
      );
      setEmployees([...employees, response.data]);
      alert("Employee Added Successfully");
    } catch (error) {
      setError(error.message);
    }
  };

  const updateEmployee = async () => {
    try {
      setError("");
      const response = await axios.put("https://jsonplaceholder.typicode.com/users/1",
        {
          name: "Updated Pragya",
        }
      );
      // JSONPlaceholder is a fake/mock API.
      // It returns a successful response but does not
      // actually update the data on the server.
      // Therefore we are displaying the response in console only.
      console.log(response.data);
      alert("PUT Request Successful. Check Console Output (Mock API does not persist changes).");
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteEmployee = async () => {
    try {
      setError("");
      await axios.delete("https://jsonplaceholder.typicode.com/users/11");
      alert("Employee Deleted Successfully");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Axios CRUD Operations</h2>
      <button onClick={getEmployee}>GET</button>
      <button onClick={addEmployee}>POST</button>
      <button onClick={updateEmployee}>PUT</button>
      <button onClick={deleteEmployee}>DELETE</button>

      <br />
      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <p>
        <strong>Note:</strong> JSONPlaceholder is a mock/fake API used for
        learning purposes. GET requests return data, while POST, PUT and DELETE
        requests simulate successful operations but do not permanently modify
        server data.
      </p>
    </div>
  );
}
export default AxiosCRUD;
