// Welcome Component

function Welcome() {
  return (
    <div>Welcome to React</div>  
  );
}

// EmployeeCard Component

function EmployeeCard() {
  return (
    <div>
      <h2>Pragya</h2>
      <p>Software Engineer</p>
    </div>
  );
}

// App Component

function App() {
  return (
    <div>
       <Welcome /> 

      <EmployeeCard />

      <EmployeeCard />
    </div>
  );
}

export default App;