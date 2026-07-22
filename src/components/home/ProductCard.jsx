function ProductCard({ product }) {

  return (

    <div className="product-card">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

        <span className="discount-badge">
          {product.discount}
        </span>

        <button className="wishlist-btn">
          <i className="bi bi-heart"></i>
        </button>

      </div>

      <div className="product-info">

        <small>{product.category}</small>

        <h5>{product.name}</h5>

        <div className="rating">

          ⭐ {product.rating}

        </div>

        <div className="price">

          <span className="new-price">
            ₹{product.price}
          </span>

          <span className="old-price">
            ₹{product.oldPrice}
          </span>

        </div>

        <button className="cart-btn">
          Add to Cart
        </button>

      </div>

    </div>

  );

}

export default ProductCard;