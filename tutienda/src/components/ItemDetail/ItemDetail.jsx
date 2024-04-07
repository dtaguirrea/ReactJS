import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useNotification } from "../../notification/NotificationService"
const ItemDetail = ({id, name, category, img, price,description,stock})=>{
    const [quantity, setQuantity] =useState(0)
    const {showNotification } = useNotification()
    const {addItem} = useContext(CartContext)
    const handleOnAdd = (quantity) =>{
        const objProductToAdd ={
            id,name,price,quantity
        }
        console.log(objProductToAdd)
        showNotification('success',`Se agrego correctamente ${quantity} ${name}`)
        setQuantity(quantity)
        addItem(objProductToAdd)
    }
    return (
        <article>
            <img src={img} style={{display: 'block',marginLeft: 'auto', marginRight: 'auto', width: '15%'}}/>
            <h1 style={{display:'flex', justifyContent:"center"}}>{name}</h1>
            <h4 style={{display:'flex', justifyContent:"center"}}> Tipo : {category}</h4>
            <h4 style={{display:'flex', justifyContent:"center"}}>${price}</h4>
            <h4 style={{display:'flex', justifyContent:"center"}}>Descripcion: {description}</h4>
            {quantity ===0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <Link to={"/cart"} style={{display:'flex', justifyContent:"center", textDecoration:'none'}}><button>Finalizar Compra</button></Link>}
        </article>
    )
}

export default ItemDetail