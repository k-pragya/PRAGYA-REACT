import { useState, useEffect } from "react";
import UserCard from "../comp/UserCard";
function UserDirectory() {
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
                users.map((users) => (
                        <UserCard key={users.id} users={users} />
                ))
            )}
        </div>
    );
}
export default UserDirectory;
