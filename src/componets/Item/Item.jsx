import "./item.css"

const Item = ({product}) => {
  return (
    <div className="item-card">
      <div className="item-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="item-content">
        <p className="item-name">{product.name}</p>
        <p className="item-stock">Precio: ${product.price} </p>

      </div>
    </div>
  )
}

export default Item