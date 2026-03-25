import './App.css'
import Navbar from "./componets/Navbar/Navbar"
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import Counter from './componets/Counter/Counter'

function App() {
  
  
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={"¡Bienvenido a mi tienda!"}/>
      <ItemListContainer saludo={"¡Mi tienda!"} />
      <Counter />
    </div>
  )
}
 
export default App
