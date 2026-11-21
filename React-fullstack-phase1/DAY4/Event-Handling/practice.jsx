function EmployeeCard({ name, onDelete }) {
  return (
    <div>
      <h3>{name}</h3>

      <button onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

function App() {

  const deleteEmployee = () => {
    alert("Employee Deleted");
  };

  return (
    <EmployeeCard
      name="Pragya"
      onDelete={deleteEmployee}
    />
  );
}

export default App;