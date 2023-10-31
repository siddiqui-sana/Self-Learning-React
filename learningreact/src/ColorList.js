// In React, the map() function is commonly used to iterate over an array of data and
//  render components dynamically based on that data. This is especially 
//  useful when you want to render a list of items or elements, 
//  such as a list of items in a shopping cart, a list of blog posts, or a set of cards in a card game.
function ColorList({colors}){
    return (
        <div>
            <p>Hey Here are some colors for you</p>
            <ul>
            {colors.map((color)=><li style={{color: color}}>{color}</li>)}
            </ul>
            
        </div>
    )
}
export default ColorList;