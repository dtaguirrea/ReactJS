import { Link } from "react-router-dom"
import pokeball from "../../assets/pokeball.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext)
    return(
        <Link to="/cart">
            <img src={pokeball} style={{width: 50}}/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget