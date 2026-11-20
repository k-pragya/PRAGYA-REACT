function UserCard({users}) {
    return(
        <div>
            <h3>{users.name}</h3>
            <p>email: {users.email}</p>
            <p>city: {users.address.city}</p>
            <p>phone: {users.phone}</p>
            <br />
        </div>
    );
}
export default UserCard;