import { useState } from "react";
function EmployeeForm(){
    const [ name,setName ]=useState("");
    const [ email,setEmail ]=useState("");
    const [ department,setDepartment ]=useState("");

    const [ nameError,setNameError ]=useState("");
    const [ emailError,setEmailError ]=useState("");
    const [ departmentError,setDepartmentError ]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setNameError("");
        setEmailError("");
        setDepartmentError("");

        let isValid = true;

        if ( name === "" ){
            setNameError("Name is required");
            isValid = false;
        }
        if( email === "" ){
            setEmailError("Email is required");
            isValid = false;
        }
        else if ( !email.includes("@") ){
            setEmailError("Invalid email");
            isValid = false;
        }
        if ( department === "" ){
            setDepartmentError("Invalid Department");
            isValid = false;
        }
        if (isValid){
            alert ("employee registered successfully");
        }
    };

    return(
        <form onSubmit = {handleSubmit}>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>{nameError}</p>

            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <p>{emailError}</p>

            <input
                type="text"
                placeholder="Enter Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
            />
            <p>{departmentError}</p>
        
            <button type="submit"> REGISTER </button>
        </form>
    ); 
}
export default EmployeeForm;