import { useState , useEffect } from "react"
import {getDoc,doc} from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams} from "react-router-dom"
import { db } from "../../../services/firebase/firebaseConfig"
const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()
    useEffect(()=> {
        const productDoc = doc(db,'products', itemId)
        getDoc(productDoc)
            .then(queryDocumentSnapshot=>{
                const data=queryDocumentSnapshot.data()
                const productAdapted ={id: queryDocumentSnapshot.id,...data}
                setProduct(productAdapted)
            })
    },  [itemId])
    return (
        <main>
            <h1 style={{display:'flex', justifyContent:"center"}}>Detalle de productos</h1>
            <ItemDetail {...product}/>
        </main>
    )
}
export default ItemDetailContainer