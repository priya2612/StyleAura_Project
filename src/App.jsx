import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/category/:slug"
        element={<CategoryPage />}
      />
    </Routes>
  );
}

export default App;