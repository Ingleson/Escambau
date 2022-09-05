import "./App.css";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import { AddProduct } from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />

      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
