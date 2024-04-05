import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, category, img, price,description,stock})=>{
    return (
        <article>
            <img src={img} style={{width: 100}}/>
            <h1>{name}</h1>
            <h4> Categoria : {category}</h4>
            <h4>${price}</h4>
            <h4>Descripcion: {description}</h4>
            <ItemCount stock={stock}/>
        </article>
    )
}

export default ItemDetail