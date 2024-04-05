import pokeball from "../../assets/pokeball.png"

const CartWidget = () => {
    return(
        <button>
            <img src={pokeball} style={{width: 50}}/>
            0
        </button>
    )
}

export default CartWidget