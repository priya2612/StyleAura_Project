import { Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDeatils";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyOrders from "./pages/MyOrders";


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

      <Route

        path="/checkout"

        element={<CheckoutPage />}

      />

      <Route

        path="/order-success"

        element={<OrderSuccess />}

      />
      <Route

        path="/login"

        element={<Login />}

      />

      <Route

        path="/register"

        element={<Register />}

      />
      <Route path="/orders" element={<MyOrders />} />

    </Routes>


  );
}

export default App;