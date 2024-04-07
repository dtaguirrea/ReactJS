import { Link } from 'react-router-dom'

const Item = ({id, name, img, price})=>{
    return (
        <article style={{padding: 50, backgroundColor: 'white'}}>
            <div >
                <h1 style={{display:'flex', alignItems: 'center', justifyContent: 'space-around'}}>{name}</h1>
                <img src={img} style={{width: 150}}/>
                <h4 style={{display:'flex', alignItems: 'center', justifyContent: 'space-around'}}>${price}</h4>
                <Link to={`/item/${id}`} style={{textDecoration: 'none', color: 'black',display:'flex', alignItems: 'center', justifyContent: 'space-around'}}> <button>Ver detalle</button></Link>
            </div>
        </article>
    )
}

export default Item