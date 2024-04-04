import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <header style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h1>TuTiendaPokemon</h1>
            <nav>
                <a href="">Agua</a>
                <a href="">Fuego</a>
                <a href="">Planta</a>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar