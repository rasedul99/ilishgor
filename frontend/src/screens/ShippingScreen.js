import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../Redux/Actions/cartActions";

const ShippingScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      address,
      city,
      postalCode,
      country,
    };
    dispatch(saveShippingAddress(data));
    navigate("/payment");
  };

  return (
    <div>
      <div className="max-w-md mx-auto my-10">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form onSubmit={submitHandler}>
            <div className="grid grid-cols-1 gap-5">
              <p className="text-center font-medium">DELIVERY ADDRESS</p>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
                className=" border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              />
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className=" border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              />
              <input
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Enter postal code"
                className=" border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              />
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter Country"
                className=" border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-500 px-3 py-2 rounded-lg text-white"
              >
                CONTINUE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingScreen;
