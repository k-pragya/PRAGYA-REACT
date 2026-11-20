import EmployeeCard from "../comp/EmployeeCard";
function EmployeeList(){
    const employees = [
        {
            name: "pragya",
            email: "pragya@gmail.com",
            department: "IT"
        },
        {
            name: "prakriti",
            email: "prakriti@gmail.com",
            department: "CSE"
        }]

    return (
        <div>
            <h2> View Employees </h2>
            {employees.map ((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
        ))}
        </div>
    );
}
export default EmployeeList;