import ShoppingListItem from "./ShoppingListItem";
function ShoppingList({data}){
    return (
        <div>
            <ul>
                {data.map((item)=>{
                    return (
                        <ShoppingListItem  key={item.id} name={item.item} quantity={item.number} complete={item.complete}/>
                        // <li 
                        // // Gives a unique key prop to each list item
                        // key={item.id}
                        // style={{color: item.complete?"grey" : "red", 
                        //         textDecoration: item.complete ? "line-through": "none" }}
                        // >
                        //     {item.item}, {item.number}
                        // </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default ShoppingList;