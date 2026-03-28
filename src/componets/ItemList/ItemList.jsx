
const ItemList = ({products}) => {
  return (
      <div>
          {
        products.map((product) => (
          <div>
           <p>{product.name} </p>
            <p>stock: {product.stock}</p>
          </div>

        ))
        }
    </div>
  )
}

export default ItemList