
const Item = ({product}) => {
  return (
      <div>
          <p>{product.name} </p>
          <p>stock: {product.stock}</p>
    </div>
  )
}

export default Item