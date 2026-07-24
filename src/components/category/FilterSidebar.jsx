import "./FilterSidebar.css";

function FilterSidebar() {
  return (
    <div className="filter-sidebar">

      <h4 className="filter-title">
        Filters
      </h4>

      {/* Price */}

      <div className="filter-group">

        <h6>Price</h6>

        <label>
          <input type="checkbox" />
          Under ₹500
        </label>

        <label>
          <input type="checkbox" />
          ₹500 - ₹1000
        </label>

        <label>
          <input type="checkbox" />
          ₹1000 - ₹2000
        </label>

        <label>
          <input type="checkbox" />
          Above ₹2000
        </label>

      </div>

      {/* Size */}

      <div className="filter-group">

        <h6>Size</h6>

        <div className="size-buttons">

          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>

        </div>

      </div>

      {/* Color */}

      <div className="filter-group">

        <h6>Color</h6>

        <div className="color-list">

          <span className="color black"></span>

          <span className="color white"></span>

          <span className="color pink"></span>

          <span className="color purple"></span>

        </div>

      </div>

      {/* Discount */}

      <div className="filter-group">

        <h6>Discount</h6>

        <label>
          <input type="checkbox" />
          20% & Above
        </label>

        <label>
          <input type="checkbox" />
          40% & Above
        </label>

        <label>
          <input type="checkbox" />
          60% & Above
        </label>

      </div>

      {/* Stock */}

      <div className="filter-group">

        <h6>Availability</h6>

        <label>

          <input type="checkbox" />

          In Stock

        </label>

      </div>

      <button className="clear-btn">

        Clear Filters

      </button>

    </div>
  );
}

export default FilterSidebar;