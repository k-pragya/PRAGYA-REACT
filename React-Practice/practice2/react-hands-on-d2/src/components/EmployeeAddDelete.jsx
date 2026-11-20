import { useState } from "react";
import EmployeeCardDelete from "../comp/EmployeeCardDelete";

function EmployeeAddDelete() {
    const [employees, setEmployees] = useState([
        { id:1, name:"pragya", email:"pragya@gmail.com", department:"IT" },
        { id:2, name:"prakriti", email:"prakriti@gmail.com", department:"CSE" }
    ]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");

    function handleAdd() {
        if (!name || !email || !department) {
            alert("please fill all fields");
            return;
        }
        const newEmployee = {
            id: Date.now(),
            name: name,
            email: "email",
            department: "department"
        };
        setEmployees([ ...employees, newEmployee ]);
        setName("");
        setEmail("");
        setDepartment("");
    }

    function handleDelete(id) {
        setEmployees(employees.filter((employee) => employee.id !== id));
    }
    return(
        <div>
            <h3> Add New Employee </h3>
            <input
                type="text"
                placeholder="enter name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <br /><br />
            <input
                type="text"
                placeholder="enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <br /><br />
            <input
                type="text"
                placeholder="enter department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)} />
            <br /><br />
            
            <button onClick={handleAdd}> Add Employee </button>
            <h3>  View Employee List</h3>
            {employees.map((employee) => (
                <EmployeeCardDelete key={employee.id} employee={employee} 
                onDelete={handleDelete} />
            ))}
        </div>
        
    );
}
export default EmployeeAddDelete;
