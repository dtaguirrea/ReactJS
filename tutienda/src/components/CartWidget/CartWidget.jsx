import { Link } from "react-router-dom"
import pokeball from "../../assets/pokeball.png"

const CartWidget = () => {
    return(
        <Link to="/cart">
            <img src={pokeball} style={{width: 50}}/>
            0
        </Link>
    )
}

export default CartWidget