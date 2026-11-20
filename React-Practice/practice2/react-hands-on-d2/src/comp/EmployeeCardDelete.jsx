function EmployeeCardDelete ({ employee, onDelete }){
    return(
        <div>
            <p> name: {employee.name} </p>
            <p> email: {employee.email} </p>
            <p> department: {employee.department} </p>
            
            <button onClick={() => onDelete(employee.id)}> Delete </button>
        </div>
    );
}
export default EmployeeCardDelete;