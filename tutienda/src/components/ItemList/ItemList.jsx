import Item from "../Item/Item"

const ItemList = ({products})=> {
    return(
        <section style={{width: '100%',display: 'flex', flexDirection:"row", flexWrap: 'wrap',justifyContent:'center'}}>
            {
                products.map(product => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </section>
    )
}

export default ItemList