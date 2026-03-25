import './App.css'
import Navbar from "./componets/Navbar/Navbar"
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'

function App() {
  
  const saludando = () => {
  alert("¡Bienvenido!")
}
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo= {"¡Bienvenido a mi tienda!"} saludando = {saludando} />
    </div>
  )
}
 
export default App
