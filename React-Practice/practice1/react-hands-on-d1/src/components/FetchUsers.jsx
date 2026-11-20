import { useState, useEffect } from "react";
function FetchUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((error) => {
            console.log("error fetching data:",error);
            setLoading(false);
        })
    }, []);

    return (
        <div>
            {loading ? (
                <p>loading users:</p>
            ) : (
                <div>
                    {users.map((users) => (
                        <div key={users.id}>
                            <h3>{users.name}</h3>
                            <p>email: {users.email}</p>
                            <p>city: {users.address.city}</p>
                            <br />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default FetchUsers;
