import { useState } from "react";
import SearchBar from "../comp/SearchBar";

function EmployeeListSearch(){
    const [ search,setSearch ]= useState("");
    const employees = [ { id:1, name:"pragya"} , { id:2, name:"prakriti"} ];

    const filteredEmployee= employees.filter((employee) => 
        employee.name.toLowerCase().includes(search.toLowerCase()));

    return(
        <div>
            <SearchBar search={search} setSearch={setSearch} />
            {filteredEmployee.map((employee) => (
                  <p key={employee.id} > {employee.name}</p> ))}
        </div>
    );
}
export default EmployeeListSearch;