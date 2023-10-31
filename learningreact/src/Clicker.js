function clickhandle(){
    console.log("Button was clicked");
}
function Clicker(){
    return(
        <button onClick={clickhandle}>Click Me</button>
    ) 
}
export default Clicker;