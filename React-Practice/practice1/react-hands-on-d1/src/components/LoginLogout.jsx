import {useState} from "react";
function LoginLogout(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>
           <h2> Login /Logout</h2>
           {isLoggedIn ? (
            <>
             <h3>Hello Pragya!</h3>
             <button onClick={() => setIsLoggedIn(false)}>
                Logout
             </button>
            </>
           ) : (
            <>
            <h3> Please login</h3>
            <button onClick={() => setIsLoggedIn(true)}>
                Login
            </button>
            </>
           )}
        </div>
    );
}
export default LoginLogout;