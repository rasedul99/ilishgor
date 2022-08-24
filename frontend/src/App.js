import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import ProfileScreen from "./screens/ProfileScreen";
import Register from "./screens/Register";
import SingleProduct from "./screens/SingleProduct";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfileScreen />} />
        {/* <Route path="/cart/:id" element={<CartScreen />} /> */}
        {/* <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order" element={<OrderScreen />} />
        <Route path="/" element={<NotFound />} /> */}

        <Route path="product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
