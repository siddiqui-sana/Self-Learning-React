import {useState} from "react";
export default function ReactForm(){
    const [username, setusername] = useState(" ");
    const updateinput =(evn)=>{
        setusername(evn.target.value);
        console.log("Changed")
    }
    return (
        <div>
            <label htmlFor="username">Enter Username</label>
            <input type="text" onChange={updateinput} id="username"></input>
        </div>
    )
}