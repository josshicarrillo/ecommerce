import './App.css'
import Navbar from "./componets/Navbar/Navbar"
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'


function App() {
  
  
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={"¡Bienvenido a mi tienda!"}/>
      
    </div>
  )
}
 
export default App
