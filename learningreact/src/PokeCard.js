import './PokeCard.css';
function PokeCard(){
    const rn = Math.floor(Math.random()*151)+1;
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${rn}.png`;
    // ${} is used when we want some dynamic content to render instead of string written in ''.
    return (
        <div className="pokecard">
        <h1 className="heading">Pokemon #{rn}</h1>
        <img className="img" src={url}/>
        </div>
    )
}
export default PokeCard;