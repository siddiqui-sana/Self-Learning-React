import {useState} from "react"; //It is a named import
function Counter(){
    const [num,setNum]=useState(0);
    const increament = ()=>setNum(num+1);
    const decreament=()=>setNum(num-1);
    const reset=()=>setNum(0);
    return (
        <div>
            <p>{num}</p>
            <button onClick={increament}>Increase</button>
            <button onClick={decreament}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;