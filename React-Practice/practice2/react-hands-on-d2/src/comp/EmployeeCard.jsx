// function EmployeeCard (props){
//     return(
//         <div>
//             <p> {props.employee.name} </p>
//             <p> {props.employee.email} </p>
//             <p> {props.employee.department} </p>
//             <hr />
//         </div>
//     );
// }
function EmployeeCard ({ employee }){
    return(
        <div>
            <p> name: {employee.name} </p>
            <p> email: {employee.email} </p>
            <p> department: {employee.department} </p>
            <br />
        </div>
    );
}
export default EmployeeCard;