import react ,{ useState, useEffect } from "react";
function FetchEmployees(){
    const [ employees, setEmployees ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState("");
    useEffect(() => {
        FetchEmployee();
    },[]);
    const FetchEmployee = async () => {
        try{
            const response = await fetch ("https://jsonplaceholder.typicode.com/users");
             if (!response.ok) {
                throw new Error("Failed to fetch employee data");
             }
            const data = await response.json();
            setEmployees(data);
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    };
    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }
    return(
        <div>
            <h2> Employee List </h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Company </th>
                    </tr>
                </thead>
                <tbody>
                    { employees.map((employee) => (
                        <tr key = {employee.id} >
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default FetchEmployees;