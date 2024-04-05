import { Link } from 'react-router-dom'

const Item = ({id, name, category, img, price})=>{
    return (
        <article>
            <h4> Categoria : {category}</h4>
            <h1>{name}</h1>
            <img src={img} style={{width: 100}}/>
            <h4>${price}</h4>
            <Link to={'/item/${id}'}> ver detalle</Link>
        </article>
    )
}

export default Item