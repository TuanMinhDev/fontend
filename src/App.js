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
import Nagation from "./layout/Navigation/Navigation";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}>
          <Route index element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route path="/" element={<Nagation />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="history" element={<History />} />
          <Route path="product" element={<Product />} />
          <Route path="user" element={<User />} />
        </Route>

        <Route path="/admin" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
