import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"


const ItemListContainer = ({ saludo }) => {
const [products, setProducts] = useState([])
  
useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
      })

      .catch((error) => { console.log(error) }) 
  }, [])

  
  return (
      <div>
          <h2>{saludo}</h2>
      <Itemlist products = {products}/>
    </div>
  )
}

export default ItemListContainer