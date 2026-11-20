import { useState } from "react";
function UserForm () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted,setSubmitted] = useState(false);

    return (
        <div>

            <form onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
            }}>
                <input
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />

                <br /><br />

                <input
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

                <br /><br />

                <button type="submit">Submit</button>
            </form>

            {submitted && (
                <div>
                    <h3>Submitted details</h3>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </div>
            )}
        </div>
    );
}
export default UserForm;