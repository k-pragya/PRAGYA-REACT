import { Link } from "react-router-dom"
function HomePage(){
    return(
        <div>
            <h2> Home Page </h2>
            <Link to= "/employees">
               View Employees
            </Link>

            <br />

            <Link to="/addEmployee">
               Add Employee
            </Link>
        </div>
    );
}
export default HomePage;