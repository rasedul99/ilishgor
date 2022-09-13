import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { BiUserCircle } from "react-icons/bi";
import { createOrder } from "../Redux/Actions/orderActions";
import { ORDER_CREATE_RESET } from "../Redux/Constants/OrderConstants";
const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { shippingAddress, cartItems } = cart;
  const { userInfo } = userLogin;
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, success, order]);

  // Calculate Data
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  cart.itemsPrice = addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimal(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimal(Number(cart.itemsPrice * 0.15));
  cart.totalPrice = addDecimal(
    Number(cart.itemsPrice) + Number(cart.taxPrice) + Number(cart.shippingPrice)
  );

  const placeOrderHandler = (e) => {
    e.preventDefault();
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <div className="max-w-7xl mx-auto my-10 p-5 ">
      <div className="bg-indigo-200  ">
        <div className="flex justify-between flex-wrap p-3">
          <div className="flex items-center">
            <div className="mr-5">
              <BiUserCircle size="55" />
            </div>

            <div>
              <strong>Customer</strong>
              <p>{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>

          <div className="flex  items-center">
            <div className="mr-5">
              <BiUserCircle size="55" />
            </div>
            <div>
              <strong>Order info</strong>
              <p>Shipping:{cart.shippingAddress.country}</p>
              <p>Pay method :{cart.paymentMethod}</p>
            </div>
          </div>
          {}
          <div className="flex  items-center">
            <div className="mr-5">
              <BiUserCircle size="55" />
            </div>
            <div>
              <strong>Deliver to</strong>
              <p>
                Address : {shippingAddress.city}, {shippingAddress.address},
                {shippingAddress.potalCode}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className=" flex-col grow flex-wrap p-5 ">
          {cartItems.length === 0 ? (
            <div className="text-center">
              {console.log(cartItems.length)}
              <p>OOPPSSS</p>
              <p>Your Cart is Empty</p>
            </div>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div>
                  <div className="flex my-3 grow">
                    <img className="px-1 " src={item.image} />
                    <p className="grow-[2] ml-3">
                      <Link to={`/products/${item.product}`}>{item.name}</Link>
                    </p>
                    <div className="grow">
                      <p className="">Quantity</p>
                      <p className="">{item.qty}</p>
                    </div>

                    <div className="grow">
                      <p className="">SUBTOTAL</p>
                      <p className="">${item.price * item.qty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="my-3">
          <table class="table-auto ">
            <thead>
              <tr>
                <td>
                  <strong>Products :</strong>{" "}
                </td>
                <td>${cart.itemsPrice}</td>
              </tr>
              <tr>
                <td>
                  <strong>Shipping :</strong>{" "}
                </td>
                <td>${cart.shippingPrice}</td>
              </tr>
              <tr>
                <td>
                  <strong>Tax :</strong>{" "}
                </td>
                <td>$ {cart.taxPrice}</td>
              </tr>
              <tr>
                <td>
                  <strong>Total :</strong>{" "}
                </td>
                <td>$ {cart.totalPrice}</td>
              </tr>
            </thead>
          </table>
          <button
            type="submit"
            onClick={placeOrderHandler}
            className="w-full my-2 uppercase bg-indigo-500 px-3 py-2  text-white"
          >
            placeorder
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
