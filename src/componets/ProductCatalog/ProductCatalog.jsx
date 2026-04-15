import "./productcatalog.css";

const ProductCatalog = ({ loading, products, onSelectProduct, selectedCategory, onClearFilter }) => {
  const categoryName = selectedCategory 
    ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
    : "Todos los productos";

  return (
    <section className="panel">
      <div className="catalog-header">
        <div>
          <span className="section-badge">Catálogo</span>
          <h1>Categoría: {categoryName}</h1>
          <p>Selecciona un producto para ver su detalle y agregarlo al carrito.</p>
          {selectedCategory && (
            <button className="clear-filter-btn" onClick={onClearFilter}>
              Ver todos los productos
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="catalog-empty">
          <h3>Cargando productos...</h3>
        </div>
      ) : products.length === 0 ? (
        <div className="catalog-empty">
          <h3>No hay productos disponibles en esta categoría</h3>
        </div>
      ) : (
        <div className="catalog-grid">
          {products.map((product) => (
            <article className="catalog-card" key={product.id}>
              <div className="catalog-card-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="catalog-card-body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <small className="product-category">
                  {product.category} / {product.subcategory}
                </small>
                <div className="catalog-card-footer">
                  <strong>S/ {product.price}</strong>
                  <button className="primary-button" onClick={() => onSelectProduct(product)}>
                    Ver detalle
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductCatalog;
