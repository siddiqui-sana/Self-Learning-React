import {useState} from "react";
export default function EmojiClicker(){
    const [emojis, setEmoji] = useState(["Happy"])
    const addEmoji = ()=>{
        setEmoji((oldArray)=>[...oldArray,"cry"])
    }
    return (
        <div>
            {emojis.map((e)=>(
                <span>{e}</span>
            ))}
            <button onClick={addEmoji}>Add an Emoji</button>
        </div>
    )
}