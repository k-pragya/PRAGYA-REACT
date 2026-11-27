function EmployeeList({employees,onUpdate,onDelete}){
    return(
        <table border="1">
            <thead>
                 <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                 </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                       <td>{employee.id}</td>
                       <td>{employee.name}</td>
                       <td>{employee.email}</td>
                       <td>
                           <button onClick= {() => onUpdate(employee) }> Update </button>
                           <button onClick={() => onDelete(employee.id) }> Delete </button>
                       </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default EmployeeList;