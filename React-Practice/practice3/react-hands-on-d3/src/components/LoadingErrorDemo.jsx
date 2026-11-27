import React, { useState } from "react";
function LoadingErrorDemo(){
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState("");
    const [ employee, setEmployee ] = useState(null);

    const loadEmployee = () => {
        setLoading(true);
        setError("");
        setEmployee(null);
        
        setTimeout(() => {
            setEmployee({
                id:1,
                name:"pragya",
                role:"software engineer"
            });
            setLoading(false);
        },2000);
        //    setTimeout(() => {
        //       setError("Failed to load employee data");
        //       setLoading(false);
        //    }, 2000);
    };
    return(
        <div>
            <button onClick={loadEmployee}> LOAD EMPLOYEE</button>
            {loading && <h3>Loading Employee Data </h3>}
            {error && <h3>{error}</h3>}
            {employee && (
                <div>
                    <p>ID: {employee.id}</p>
                    <p>Name: {employee.name}</p>
                    <p>Role: {employee.role}</p>
                </div>
            )}
        </div>
    );
}
export default LoadingErrorDemo;