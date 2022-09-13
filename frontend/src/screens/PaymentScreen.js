import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../Redux/Actions/cartActions";

const PaymentScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress) {
    navigate("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <div className="max-w-md mx-auto my-10">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <p className="text-center uppercase py-3">Select Payment Method</p>
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            {" "}
            <input
              type="radio"
              value={paymentMethod}
              onChange={(e) => e.target.value}
            />{" "}
            <label className="mx-2">Paypal or Credit Card</label>
          </div>

          <button
            type="submit"
            className="w-full my-2 bg-indigo-500 px-3 py-2 rounded-lg text-white"
          >
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
