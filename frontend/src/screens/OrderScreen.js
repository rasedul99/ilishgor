import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import { BiUserCircle } from "react-icons/bi";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../Redux/Actions/orderActions";

const OrderScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [sdk, setSdk] = useState(false);
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const orderDetail = useSelector((state) => state.orderDetail);
  const { loading, success, order, error } = orderDetail;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(
        "http://localhost:5000/api/config/paypal"
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdk(true);
      };
      document.body.appendChild(script);
    };
    // if (!order || successPay) {
    //   dispatch({ type: ORDER_PAY_RESET });
    dispatch(getOrderDetails(id));
    // } else if (!order.isPaid) {
    //   addPayPalScript();
    // } else {
    //   setSdk(true);
    // }
  }, [id, dispatch]);

  const { shippingAddress, cartItems } = cart;
  const { userInfo } = userLogin;

  // Calculate Data
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);

    if (!loading) {
      order.itemsPrice = addDecimal(
        order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
    }
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
              <p>{order?.user.name}</p>
              <a href={`maito:${order?.user.email}`}>{order?.user.email}</a>
            </div>
          </div>

          <div className="flex  items-center">
            <div className="mr-5">
              <BiUserCircle size="55" />
            </div>
            <div>
              <strong>Order info</strong>
              <p>Shipping:{order?.shippingAddress.country}</p>
              <p>Pay method :{order?.paymentMethod}</p>
              {order?.isPaid ? (
                <>
                  <p>Paid On Jan 12 2021</p>
                </>
              ) : (
                <>
                  <p>Not Paid</p>
                </>
              )}
            </div>
          </div>
          <div className="flex  items-center">
            <div className="mr-5">
              <BiUserCircle size="55" />
            </div>
            <div>
              <strong>Deliver to</strong>
              <p>
                Address : {order?.shippingAddress.city},{" "}
                {order?.shippingAddress.address},
                {order?.shippingAddress.potalCode}
              </p>
              {order?.isDelivered ? (
                <>
                  {" "}
                  <p>deliveredAt </p>{" "}
                </>
              ) : (
                <>Not Deliverble</>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className=" flex-col grow flex-wrap p-5 ">
          {order?.orderItems.length === 0 ? (
            <div className="text-center">
              {console.log(order?.orderItems.length)}
              <p>OOPPSSS</p>
              <p>Your Cart is Empty</p>
            </div>
          ) : (
            <>
              {order?.orderItems.map((item, index) => (
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
                <td>${order?.itemsPrice}</td>
              </tr>
              <tr>
                <td>
                  <strong>Shipping :</strong>{" "}
                </td>
                <td>${order?.shippingPrice}</td>
              </tr>
              <tr>
                <td>
                  <strong>Tax :</strong>{" "}
                </td>
                <td>$ {order?.taxPrice}</td>
              </tr>
              <tr>
                <td>
                  <strong>Total :</strong>{" "}
                </td>
                <td>$ {order?.totalPrice}</td>
              </tr>
            </thead>
          </table>

          <div>
            <PayPalButton amount={345} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
