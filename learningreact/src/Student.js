function Student({person, age=23, values, obj={name: "sana", age: 23}}) 
// function Student({person}) If we want to call a specific property when we have multiple properties, example of destructing
{
    // console.log(props.person)
    // const s = props.person
    return (
    <>
    <p>I am a React Student, my name is {person} and age is{age} </p>
    {/* For passing array, we need to use curly brackets */}
    <p>Passing an array values {values}</p>
    {/* //For passing the objects we need to use the curly braces */}
    <p>Object {obj.name}, {obj.age}</p>
    </>
    )
}
export default Student;