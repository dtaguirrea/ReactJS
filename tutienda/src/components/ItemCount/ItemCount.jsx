import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCount = ({ initial = 1, stock, onAdd}) =>{
    const [count , setCount] = useState(initial)

    const decrement = () => {
        if (count>1){
            setCount(prev=> prev-1)
        }
    }
    const increment = () => {
        if (count<stock) {
            setCount(prev =>prev+1)
        }
    }
    return (
        <article>
            <h3 style={{display:'flex', justifyContent:"center"}}>Pokemon salvajes: {count}</h3>
            <div style={{display:'flex', justifyContent:"center"}}>
                <button onClick={decrement}>-</button>
                <button onClick={()=> onAdd(count)}>Agregar al PC</button>
                <button onClick={increment}>+</button>
            </div>
        </article>
    )
}

export default ItemCount