import { useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import { employees } from "../services/EmployeeService"

function EmployeeListPage() {
    const [ search, setSearch ]= useState("");

    const filteredEmployees = employees.filter((employee) => (
        employee.name.toLowerCase().includes(search.toLowerCase())
    ));

    return(
        <div>
            <h2> Employee List </h2>

            <SearchBar search={search} setSearch={setSearch} />

            {filteredEmployees.map((employee) => (
                <p key={employee.id} >
                   <Link to={ `/employee/${employee.id}` }>
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