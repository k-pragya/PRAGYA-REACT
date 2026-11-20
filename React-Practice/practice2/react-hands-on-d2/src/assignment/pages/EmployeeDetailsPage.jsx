import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { employees } from "../services/EmployeeService"
import EmployeeCard from "../components/EmployeeCard"

function EmployeeDetailsPage (){
    const { id }= useParams();

    const employee = employees.find(
    (employee) => employee.id === Number(id)
     );

    if (!employee) {
       return <h2>Employee Not Found</h2>;
    }

    return (
        <div>
            <h2> Employee Details </h2>
            <EmployeeCard employee = {employee} />

            <Link to="/">
               Return to Home Page
            </Link>
        </div>
    );
}
export default EmployeeDetailsPage;