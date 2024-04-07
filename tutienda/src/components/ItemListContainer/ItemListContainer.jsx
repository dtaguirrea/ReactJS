import {  useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/NotificationService"

import { getDocs, collection, query, where} from "firebase/firestore"

import { db } from "../../../services/firebase/firebaseConfig"

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const [loading,setLoading] =useState(true)
    const [error, setError] = useState('')
    const { categoryId } = useParams()
    const {showNotification } = useNotification()

    useEffect(()=> {
        setLoading(true)
        const productsCollection = categoryId ? (query(collection(db, 'products'), where('category','==',categoryId))
        )   : (
            collection(db,'products')
        )
        getDocs(productsCollection)
            .then(querySnapchot => {
                const productsAdapted = querySnapchot.docs.map(doc=>{
                    const data=doc.data()
                    return { id: doc.id,...data}
                })
            setProducts(productsAdapted)
        })
            .catch(error=>{
                setError('Hubo un error cargando los datos')
            })
            .finally(()=>{
                setLoading(false)
            })
    },  [categoryId])
    
    if(loading){
        return <h1 style={{backgroundColor:'white',display: 'flex', justifyContent:'space-around'}}>Cargando listado de pokemon</h1>
    }
    if(error){
        return showNotification('error',error)
    }
    return (
        <main>
            <h1 style={{display:'flex', justifyContent:'space-around'}}>{greeting}</h1>
            <ItemList products ={products}></ItemList>
        </main>
    )
}

export default ItemListContainer