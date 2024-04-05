const Item = ({name, category, img, price})=>{
    return (
        <article>
            <h4> Categoria : {category}</h4>
            <h1>{name}</h1>
            <img src={img} style={{width: 100}}/>
            <h4>${price}</h4>
            <a href="">ver detalle</a>
        </article>
    )
}

export default Item