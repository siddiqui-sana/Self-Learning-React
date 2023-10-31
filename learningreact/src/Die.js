import "./Die.css";
function Die()
{
    //Whatever we write in function beore return is Javascript
    const die = Math.floor((Math.random()*6))+1;
    return (
        //Whatever we return is JSX
        <div className="dieRoll">
        {/* //Dynamic because a random number is generated on the spor and getting rendered. */}
        <p className="die">Die: {die}</p>
        </div>
    )
}
export default Die;