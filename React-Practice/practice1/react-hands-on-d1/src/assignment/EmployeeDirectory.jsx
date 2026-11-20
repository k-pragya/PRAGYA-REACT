import { useState,useEffect } from "react";
import EmployeeList from "./components/EmployeeList";

function EmployeeDirectory() {
    const [employees, setEmployees] = useState([]);
    const [search, SetSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const mockEmployees = [
            {
                id:1, name: "pragya", email: "pragya@gmail.com", department: "IT", role: "software dev"
            },
            {
                id:2, name: "prakriti", email: "prak@gmail.com", department: "CSE", role: "cloud eng"
            },
            {
                id:3, name: "sneha", email: "sneh@gmail.com", department: "ECE", role: "backend dev"
            }
        ];

        const timer = setTimeout(() => {
            setEmployees(mockEmployees);
            setLoading(false);
        }, 5000);

        return () => clearTimeout( timer );
    }, []);

    const filteredEmployees = employees.filter((employee) => 
        employee.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div>

            <input 
              type="text"
              placeholder="search employee by name"
              value={search}
              onChange={(e) => SetSearch(e.target.value)} 
            />

            {loading ? (
                <p>loading employees..</p>
            ) : filteredEmployees.length > 0 ? (
               <EmployeeList employees={filteredEmployees} />
            ) : (
              <p>No employees found</p>
            )}
        </div>
    );
}

export default EmployeeDirectory;