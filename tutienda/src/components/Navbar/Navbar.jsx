import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <header style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h1><Link to={"/"} style={{textDecoration: "none", color: "black"}}>TuTiendaPokemon</Link></h1>
            <nav>
                <Link to={'/category/agua'}>Agua</Link>
                <Link to={'/category/fuego'}>fuego</Link>
                <Link to={'/category/planta'}>planta</Link>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar