import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import User from "./pages/User";
import History from "./pages/History";
import Admin from "./pages/Admin";
import AdminProduct from "./pages/Admin/AdminProduct";
import Layout from "./layout";
import ProductDetails from "./pages/ProductDetails";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}>
          <Route index element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="history" element={<History />} />
          <Route path="product" element={<Product />} />
          <Route path="user" element={<User />} />
          <Route path="product_details/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminProduct />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
