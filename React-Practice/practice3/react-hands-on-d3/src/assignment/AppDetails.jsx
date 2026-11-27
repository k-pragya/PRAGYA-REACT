import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./services/employeeService";

function AppDetails(){
    const [ employees, setEmployees ] = useState([]);
    const [ search, setSearch ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState("");

    useEffect(() => {
        fetchEmployees();
    },[]);

    const fetchEmployees = async() => {
        setLoading(true);
        try{
            const response= await getEmployees();
            setEmployees(response.data);
        }catch(error){
            setError("failed to fetch employees");
        }
        setLoading(false);
    };

    const handleAdd = async(employee) => {
        try{
            const response = await addEmployee(employee);
            const newEmployee = { ...response.data, id: employees.length + 1,};
            setEmployees([ ...employees, newEmployee,]);
        }catch (error) {
           setError("Failed to add employee");
        }
    }

    const handleUpdate = async (employee) => {
        const newName = prompt("Enter new name", employee.name);
        if (!newName) return;
        try {
            await updateEmployee(employee.id, {
                 ...employee,
                 name: newName,
            });

            setEmployees(
                employees.map((emp) =>
                     emp.id === employee.id
                     ? {
                        ...emp,
                       name: newName,
                    }
                    : emp
                )
            );
        } catch (error) {
            setError("Failed to update employee");
        }
    };

    const handleDelete = async (id) => {
      try {
         await deleteEmployee(id);
         setEmployees(
           employees.filter((emp) => emp.id !== id )
         );
      } catch (error) {
          setError("Failed to delete employee");
      }
    };

    const filteredEmployees =
      employees.filter((employee) => employee.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div style={{ padding: "20px" }}>
            <h1>Employee Directory</h1>
            <SearchBar search={search} setSearch={setSearch} />
            <br />
            <EmployeeForm onAdd={handleAdd} />
            <br />
            {loading && <h3>Loading...</h3>}
            {error && ( <h3 style={{ color: "red" }}> {error} </h3> )}

            <EmployeeList
                employees={filteredEmployees}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
            />
        </div>
    );
}
export default AppDetails;