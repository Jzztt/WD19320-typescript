import { Route, Routes } from "react-router";
import "./App.css";
import ClientLayout from "./layouts/ClientLayout";
import Home from "./components/Home";
import Product from "./components/Product";
import AdminLayout from "./layouts/AdminLayout";
import DashBoard from "./components/admin/DashBoard";
import ListProduct from "./components/admin/ListProduct";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="product" element={<ListProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
