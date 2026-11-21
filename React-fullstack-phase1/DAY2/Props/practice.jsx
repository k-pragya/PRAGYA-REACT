// Child Component

function EmployeeCard({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}


// Parent Component

function App() {
  return (
    <>
      <EmployeeCard
        name="Pragya"
        role="Software Engineer"
      />

      <EmployeeCard
        name="Rohit"
        role="Frontend Developer"
      />

      <EmployeeCard
        name="Prakriti"
        role="Backend Developer"
      />
    </>
  );
}

export default App;