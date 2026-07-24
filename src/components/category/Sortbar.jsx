import "./SortBar.css";

function SortBar() {
  return (
    <div className="sortbar">

      <div className="product-count">
        <span>Showing</span>
        <strong> 24 </strong>
        <span>Products</span>
      </div>

      <div className="sort-section">

        <label htmlFor="sort">
          Sort By
        </label>

        <select
          id="sort"
          className="form-select"
        >

          <option>Newest</option>

          <option>Popularity</option>

          <option>Price : Low to High</option>

          <option>Price : High to Low</option>

          <option>Discount</option>

          <option>Customer Rating</option>

        </select>

      </div>

    </div>
  );
}

export default SortBar;