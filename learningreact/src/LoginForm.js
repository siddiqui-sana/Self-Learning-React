export default function LoginForm()
{
    const val = "Cat";
    return (
        //A component can return only a single element, hence all other elements are put inside this single element
        <form>  
        {/* React Fragments: Instead of using a div or form tag we can use <> </>, empty tag like this. and put other elements inside it.  */}
            <p>{val} does Meoww</p> {/*Everything inside {} is treated as pure javascript */}
            <input type="text" placeholder="enter name"/>
            <input type="number" placeholder="Enter Age"/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )

}