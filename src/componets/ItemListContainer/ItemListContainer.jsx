import { useEffect, useState } from "react";
import { getProducts } from "../../data/data";
import ItemList from "../ItemList/ItemList";
import "./itemlistcontainer.css";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error al cargar productos desde Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="item-list-container">
      <h2 className="container-title">{saludo}</h2>
      {loading ? <div>Cargando...</div> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
