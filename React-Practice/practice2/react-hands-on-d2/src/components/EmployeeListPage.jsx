import { Link } from "react-router-dom"
function EmployeeListPage(){
    const employees=[
        { id: 1, name: "pragya", department: "IT" },
        { id: 2, name: "prakriti", department: "CSE"},
        { id: 3, name: "sneha", department: "ECE" }
    ]

    return(
        <div>
            <h2> List of Employees </h2>

            {employees.map((employee) => (
                <p key={employee.id} >
                    <Link to={`/employee/${employee.id}`}>
                       {employee.name}
                    </Link>
                </p>
            ))}

            <Link to="/">
                Return to Home Page
            </Link>
        </div>
    );
}
export default EmployeeListPage;