function EmployeeCard({ employee }){
    return(
        <div>
            <h3>{employee.name}</h3>
            <p> email: {employee.email}</p>
            <p> department: {employee.department}</p>
            <p> role: {employee.role}</p>
        </div>
    );
}
export default EmployeeCard;