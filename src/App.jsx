import { Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDeatils";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/category/:slug"
        element={<CategoryPage />}
      />

      <Route
        path="/search"
        element={<SearchResults />}
      />

      <Route
        path="/products"
        element={<AllProducts />}
      />
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/cart"
        element={<CartPage />}
      />

    </Routes>


  );
}

export default App;