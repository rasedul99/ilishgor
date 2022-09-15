import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import OrderList from "./screens/OrderList";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProfileSettings from "./screens/ProfileSettings";
import Register from "./screens/Register";
import ShippingScreen from "./screens/ShippingScreen";
import SingleProduct from "./screens/SingleProduct";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfileScreen />}>
          <Route path="setting" element={<ProfileSettings />} />
          <Route path="order-list" element={<OrderList />} />
        </Route>

        <Route path="/cart/:id" element={<CartScreen />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        {/* <Route path="/" element={<NotFound />} />   */}

        <Route path="product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
