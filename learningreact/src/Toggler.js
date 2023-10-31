import {useState} from "react";
function Toggler(){
    const [isHappy, setIsHappy] = useState(true);
    const toggle = ()=> {setIsHappy(!isHappy)}
    console.log(isHappy)
    return (
        <div>
            {isHappy? <p>Happy</p>: <p>sad</p>}
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}
export default Toggler;