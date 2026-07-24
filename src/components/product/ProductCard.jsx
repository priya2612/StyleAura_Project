import "./ProductCard.css";

function ProductCard({ product }) {

  return (

    <div className="product-card">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
          className="img-fluid"
        />

        {product.discount > 0 && (

          <span className="discount-badge">

            {product.discount}% OFF

          </span>

        )}

      </div>

      <div className="product-details">

        <p className="product-category">

          {product.category.replace("-", " ")}

        </p>

        <h5 className="product-name">

          {product.name}

        </h5>

        <div className="price-section">

          <span className="current-price">

            ₹{product.price}

          </span>

          {product.originalPrice && (

            <span className="original-price">

              ₹{product.originalPrice}

            </span>

          )}

        </div>

        <button className="btn btn-primary w-100 mt-3">

          Add to Cart

        </button>

      </div>

    </div>

  );

}

export default ProductCard;