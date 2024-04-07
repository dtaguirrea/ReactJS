import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import {db} from "../../services/firebase/firebaseConfig"
import { addDoc,collection, documentId, getDocs,query,where, writeBatch } from "firebase/firestore"
const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        number: ""
    })
    const {cart,total,clearCart} = useContext(CartContext)
    const handleInputChange = (input)=>{
        const {name,value} = input.target
        setUserData({...userData,[name]:value})
    }
    const createOrder = async(userData) =>{
        try{
            setLoading(true)
            const objOrder = {
                buyer: {
                    name:userData.name,
                    email:userData.email,
                    number:userData.number
                },
                items: cart,
                total
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod=> prod.id)
            const productsCollection = query(collection(db, 'products'),where(documentId(), 'in', ids))
    
            const querySnapshot = await getDocs(productsCollection)
            const {docs} = querySnapshot
    
            docs.forEach(doc => {
                const data=doc.data()
                const stockDb = data.stock
                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart.quantity
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref,{stock: stockDb-prodQuantity})
                } else{
                    outOfStock.push({id: doc.id,...data})
                }
            })
            if(outOfStock.length===0){
                batch.commit()
                const orderCollection = collection(db,'orders')
                const {id} = await addDoc(orderCollection,objOrder)
                clearCart()
                setOrderId(id)
            }else{
                console.error('hay productos que no tienen stock disponible')
            }
        } catch(error) {
            console.error("Hubo un error en la generacion de la orden")
        }
        finally{
            setLoading(false)
        }
    }
    if(loading){
        return <h1 style={{display:'flex', justifyContent:"center"}}>Tu orden esta siendo generada</h1>
    }
    if(orderId){
        return <h1 style={{display:'flex', justifyContent:"center"}}>El id de su orden es: {orderId}</h1>
    }
    return (
        <div>
            <h1 style={{display:'flex', justifyContent:"center"}}>Checkout</h1>
            <input type="text" name="name" placeholder="Nombre" value={userData.name} onChange={handleInputChange} style={{display: 'block', margin:'auto'}}/>
            <input type="text" name="email" placeholder="Correo Electrónico" value={userData.email} onChange={handleInputChange} style={{display: 'block', margin:'auto'}}/>
            <input type="text" name="number" placeholder="Número de teléfono" value={userData.number} onChange={handleInputChange} style={{display: 'block', margin:'auto'}}/>
            <div style={{display:'flex', justifyContent:"center"}}>
                <button onClick={()=>createOrder(userData)} >Generar Orden</button>
            </div>
        </div>
    )
}

export default Checkout