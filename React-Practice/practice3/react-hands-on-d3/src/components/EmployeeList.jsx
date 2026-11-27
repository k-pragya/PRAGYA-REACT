import React , { useState, useEffect } from "react";
import {getEmployees} from "../services/employeeService";
function EmployeeList(){
    const [ employees,  setEmployees] = useState([]);
    useEffect(() => {
        loadEmployee()},[]
    );
    const loadEmployee = async () => {
        const data= await getEmployees();
        setEmployees(data);
    };
    return(
        <div>
            <h2>Employee List</h2>
            <ol>
             {employees.map((employee) => (
                    <li key={employees.id}>{employee.name}</li>
             ))}
            </ol>
        </div>
    );
}
export default EmployeeList;
