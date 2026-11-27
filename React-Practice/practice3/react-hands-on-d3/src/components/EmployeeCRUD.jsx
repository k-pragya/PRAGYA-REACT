import React , { useState, useEffect } from "react";
import axios from "axios";
function EmployeeCRUD(){
    const [ employees, setEmployees ] = useState([]);
    // useEffect(() => {
    //     fetchEmployee()
    // },[]);
    const fetchEmployee= async() => {
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setEmployees(response.data);
        }catch(error){
            console.log(error);
        }
    };
    const addEmployee= async() => {
        try{
            const response = await axios.post("https://jsonplaceholder.typicode.com/users",
                {
                    name: "Pragya",
                    email: "pragya@gmail.com",
                }
            )
            console.log("POST RESPONSE:",response.data);
            alert("Employee added successfully");
        }catch(error){
            console.log(error);
        }
    };
    const updateEmployee = async(id) => {
        try{
            const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,
                {
                   name: "Updated Pragya",
                   email: "updated@gmail.com",
                }
            )
            console.log("PUT Response:", response.data);
            alert("Employee Updated Successfully");
        }catch(error){
            console.log(error);
        }
    };
    const deleteEmployee = async (id) => {
        try {
            const response = await axios.delete( `https://jsonplaceholder.typicode.com/users/${id}`);
            console.log("DELETE Response:", response.data);
            alert("Employee Deleted Successfully");
        } catch (error) {
             console.log(error);
        }
    };
    return(
        <div>
            <button onClick={fetchEmployee}>GET</button>
            <button onClick={addEmployee}>ADD</button>
            <br />
            <br />
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                          <td>{employee.id}</td>
                          <td>{employee.name}</td>
                          <td>{employee.email}</td>
                          <td>
                            <button onClick={() => updateEmployee(employee.id)}>Edit</button>
                          </td>
                          <td>
                            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
                         </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default EmployeeCRUD;