import {  useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/NotificationService"
const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const [loading,setLoading] =useState(true)
    const [error, setError] = useState('')
    const { categoryId } = useParams()
    const {showNotification } = useNotification()

    useEffect(()=>{
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error=>{
                setError('Hubo un error cargando los datos')
            })
            .finally(()=>{
                setLoading(false)
            })
    },  [categoryId])
    
    if(loading){
        return <h1>Cargando listado de pokemon</h1>
    }
    if(error){
        return showNotification('error',error)
    }
    return (
        <main>
            <h1>{greeting}</h1>
            <ItemList products ={products}></ItemList>
        </main>
    )
}

export default ItemListContainer