function ShoppingListItem({key, name, quantity, complete}){
    return( <li 
    // Gives a unique key prop to each list item
    key={key}
    style={{color: complete?"grey" : "red", 
            textDecoration: complete ? "line-through": "none" }}
    >
        {name}-{quantity}
    </li>
    )
}
export default ShoppingListItem;