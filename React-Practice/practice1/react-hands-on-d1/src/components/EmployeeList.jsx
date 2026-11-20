import EmployeeCard from "../comp/EmployeeCard";
function EmployeeList() {
    const employees = [
        { id: 1, name: "pragya", role: "software engineer" },
        { id: 2, name: "prakriti", role: "frontend developer" },
        { id: 3, name: "jameel", role: "backend developer" },
        { id: 4, name: "ankit", role: "cloud engineer" },
        { id: 5, name: "aditya", role: "data analyst" }
    ];
    return(
        <div>
            {employees.map((employee) => (
                <EmployeeCard key= {employee.id} employee={employee} />
            ))}
        </div>
    );
}
export default EmployeeList;