import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
function EmployeeDetailsPage(){
    const { id }= useParams();
    return(
        <div>
            <h2> Employee details </h2>
            <p> Employee Id: {id}</p>

            <Link to="/">
                Return to Home Page
            </Link>

        </div>
    );
}
export default EmployeeDetailsPage;