function EmployeeCard({ employee }){
    return(
        <div>
            <h3>name: {employee.name}</h3>
            <p>Role: {employee.role}</p>
            <br />
        </div>
    );
}
export default EmployeeCard;