function EmployeeCard({ employee }){
    return(
        <div>
            <h3> Employee Details </h3>
            <p> name: { employee.name } </p>
            <p> email: { employee.email }</p>
            <p> department: { employee.department }</p>
        </div>
    );
}
export default EmployeeCard;