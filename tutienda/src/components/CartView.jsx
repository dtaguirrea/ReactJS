import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
const CartView = () =>{
    const {cart} = useContext(CartContext)

    return(
        <div>
            <h1 style={{justifyContent: "center", display:"flex", paddingTop:30}}>Pokemon Atrapados:</h1>
            <section>
            {
                cart.map(prod=>{
                    return (
                        <article key={prod.id}>
                            <h2 style={{display:'flex', justifyContent:'center'}}>{prod.name}</h2>
                        </article>
                    )
                })
            }
            </section>
            <Link to='/checkout' style={{textDecoration:'None',justifyContent: "center", display:"flex"}}><button style={{fontSize:18}}>Checkout</button></Link>
        </div>
    )
}

export default CartView