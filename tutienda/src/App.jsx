import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
const App = () => {
  
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Test"}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos de la categoría"}/>}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            {/*<Route path='/cart' element={<Cart/>}></Route>*/}
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
