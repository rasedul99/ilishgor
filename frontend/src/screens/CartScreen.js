import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Header from "../components/profileComponents/Header";
import { addToCart } from "../Redux/Actions/cartActions";

const CartScreen = () => {
  let { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const qty = parseInt(searchParams.get("qty"));
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);
  console.log(total);
  let navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart(id, qty));
  }, [dispatch, id, qty]);

const checkOutHandler = ()=>{
  navigate("/")

}

  return (
    <div>
      <Header />
      {cartItems === 0 ? (
        <>
          <div className="border mx-2 bg-emerald-100">
            <p className="text-center py-3 ">Your cart is empty</p>
            <Link to="/" className="bg-green-500 text-white w-full p-3">
              SHOPPING NOW
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="border mx-2 bg-emerald-100">
            <p className="text-center py-3 ">
              Total Cart Products{" "}
              <Link to="/cart" className="text-green-600 mx-2">
                ({cartItems.length})
              </Link>
            </p>
          </div>

          {cartItems.map((item) => (
            <div className=" flex  justify-between p-10 shadow-lg m-5">
              <div className="flex gap-10">
                <img src={item.image} className="h-28 w-60" />
                <p>
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </p>
              </div>
              <div className="flex gap-10">
                <div>
                  <p>Quantity</p>
                  <input
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                    type="number"
                    min="1"
                    max="100"
                    value={item.qty}
                    className="bg-gray-200  px-3 py-2 rounded-md"
                  ></input>
                </div>
                <div>
                  <p>SUBTOTAL</p>
                  <p>$ {item.price * item.qty}</p>
                </div>
              </div>
            </div>
          ))}

          <div>
            <p>TOTAL : ${total}</p>
            <div className="border"></div>
          </div>
          <div className="flex justify-between gap-10 mt-5 ">
            <button className="bg-slate-900 text-white w-full p-3">
              <Link to="/">Continue shopping</Link>
            </button>

            {total > 0 && (
              <button
                onClick={checkOutHandler}
                className="bg-slate-900 text-white w-full p-3"
              >
                Checkout
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CartScreen;
