import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Test"}/>
      <ItemCount stock={10}></ItemCount>
    </>
  )
}

export default App
