function EmployeeCard({ name, role }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <EmployeeCard
        name="Pragya"
        role="Software Engineer"
      />

      <EmployeeCard
        name="Rohit"
        role="Frontend Developer"
      />
    </div>
  );
}

export default App;