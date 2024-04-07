import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <header style={{backgroundColor: "#d7402b",width: '100%',display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <h1><Link to={"/"} style={{textDecoration: "none", color: "#fbfaf5"}}>TiendaPokemon</Link></h1>
            <Link to={'/category/agua'} style={{textDecoration: "none", color: "#fbfaf5",fontSize:20}}>Agua</Link>
            <Link to={'/category/fuego'} style={{textDecoration: "none", color: "#fbfaf5",fontSize:20}}>Fuego</Link>
            <Link to={'/category/planta'} style={{textDecoration: "none", color: "#fbfaf5",fontSize:20}}>Planta</Link>
            <CartWidget/>
        </header>
    )
}

export default Navbar