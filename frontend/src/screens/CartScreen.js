import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../components/profileComponents/Header";
import { addToCart } from "../Redux/Actions/cartActions";

const CartScreen = () => {
  let { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const qty = parseInt(searchParams.get("qty"));
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart(id, qty));
  }, [dispatch, id, qty]);

  return (
    <div>
      <Header />
      {cartItems === 0 ? (
        <>
          <div className="border mx-2 bg-emerald-100">
            <p className="text-center py-3 ">Your cart is empty</p>
            <input
              // onClick={AddToCartHandle}
              type="button"
              className="bg-green-500 text-white w-full p-3"
              value="Shopping Now"
            />
          </div>
        </>
      ) : (
        <>
          <div className="border mx-2 bg-emerald-100">
            <p className="text-center py-3 ">Total Cart Products</p>
          </div>

          <div>
            <div>
              <img />
              <p>Name</p>
            </div>
            <div>
              <div>
                <level>Quantity</level>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={qty}
                  className="bg-gray-200  px-3 py-2 rounded-md"
                ></input>
              </div>
              <level>SUBTOTAL</level>
              <p>$456</p>
            </div>
          </div>
          <div>
            <p>TOTAL : $567</p>
            <div className="border"></div>
          </div>
          <div className="flex justify-between ">
            <div>
              <input
                // onClick={AddToCartHandle}
                type="button"
                className="bg-slate-900 text-white w-full p-3"
                value="CONTINUE TO SHOPPING"
              />
            </div>

            <div>
              <input
                // onClick={AddToCartHandle}
                type="button"
                className="bg-green-500 text-white w-full p-3"
                value="CHECKOUT"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartScreen;
