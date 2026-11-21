function App() {

  const employees = [
    {
      id: 1,
      name: "Pragya",
      role: "Developer"
    },
    {
      id: 2,
      name: "Rohit",
      role: "Frontend Developer"
    },
    {
      id: 3,
      name: "Prakriti",
      role: "Backend Developer"
    }
  ];

  return (
    <div>

      <h1>Employee List</h1>

      {
        employees.map(employee => (
          <div key={employee.id}>
            <h3>{employee.name}</h3>
            <p>{employee.role}</p>
            <hr />
          </div>
        ))
      }

    </div>
  );
}

export default App;