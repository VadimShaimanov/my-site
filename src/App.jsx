


import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />   
      <Route path="/about" element={<Product />} />
    </Routes>
  );
}

export default App;
