import Item from "../Item/Item"
import "./itemlist.css"

const ItemList = ({products}) => {
  return (
    <div className="item-list-grid">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </div>
  )
}

export default ItemList