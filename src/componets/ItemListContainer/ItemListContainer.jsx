import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"
import Itemlist from "../ItemList/ItemList"
import "./itemlistcontainer.css"
import { collection, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { useParams } from "react-router"

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  const getProducts = async() => {
    try {
      const productsRef = collection(db, "products")
      const dataDb = await getDocs(productsRef)
      const data = dataDb.docs.map((productsDb) => {
        return {id: productDb.id }
      })
        
      
    } catch (error) {
      console.log (error)
    }
  }

 useEffect(() => {
   getProducts()
     
        
  }, [])

  return (
    <div className="item-list-container">
      <h2 className="container-title">{saludo}</h2>
      <Itemlist products={products} />
      
      {
        loading === true ? (<div>Cargando...</div>) : (<ItemList products={products} />)
      }
    </div>
  )
}

export default ItemListContainer