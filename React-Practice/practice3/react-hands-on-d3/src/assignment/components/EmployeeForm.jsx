import { useState } from "react";
function EmployeeForm( {onAdd} ){
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const handleSubmit = () => {
        if( !name || !email ){
            alert("Please fill all the fields");
            return;
        }
        onAdd({ name,email })
        setName("");
        setEmail("");

    }
    return(
        <div>
            <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange = {(e) => setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
            />
            <button onClick = {handleSubmit}>Add Employee </button>
        </div>
    );
}
export default EmployeeForm;