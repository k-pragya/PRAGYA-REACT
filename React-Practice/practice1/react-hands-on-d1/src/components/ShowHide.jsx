import { useState } from "react";
function ShowHide(){
    const [show, setShow] = useState(false);
    return(
        <div>

            <button onClick={() => setShow(!show)}>
                {show ? "Hide message" : "Show message"}
            </button>

            {show && <p>Hello!welcome to react</p>}
        </div>
    );
}
export default ShowHide;