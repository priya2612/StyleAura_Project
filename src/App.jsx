import { Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import AllProducts from "./pages/AllProducts";

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
    </Routes>


  );
}

export default App;