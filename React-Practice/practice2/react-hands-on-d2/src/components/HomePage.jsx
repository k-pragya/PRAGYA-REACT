import { Link } from "react-router-dom"

function HomePage(){
    return(
        <div>
            <h2>Home page</h2>
            <Link to="/employees">
                View Employees
            </Link>
        </div> 
    );
}
export default HomePage;