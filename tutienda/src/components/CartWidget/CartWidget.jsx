import { Link } from "react-router-dom"
import pokeball from "../../assets/pokeball.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)
    return(
        <Link to="/cart" style={{display:"flex", textDecoration: 'none', color: '#fbfaf5', alignItems: 'center', }}>
            <img src={pokeball} style={{width: 50}}/>
            <h4 style={{paddingLeft: 10}}>Atrapados: {totalQuantity}</h4>
        </Link>
    )
}

export default CartWidget