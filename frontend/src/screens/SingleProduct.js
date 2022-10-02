import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { listProductDetails } from "../Redux/Actions/ProductActions";
import styles from "../style/singleProduct.module.css";

const SingleProduct = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(5);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDeatails = useSelector((state) => {
    return state.productDetails;
  });

  const { loading, error, product } = productDeatails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);
  const AddToCartHandle = (e) => {
    e.preventDefault();
    navigate(`/cart/${id}?qty=${qty}`);
  };
  const handleQty = (e) => {
    setQty(e.target.value);
  };
  return (
    <div className={styles.container}>
      {loading ? (
        <>
          <p>Loading...</p>
        </>
      ) : error ? (
        <>
          <p>Error:{error}</p>
        </>
      ) : (
        <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2">
          <div>
            <img src={product?.image} className="max-w-full mx-auto rounded mb-4" />
            <h3>{product?.name}</h3>
            <p>{product?.description}</p>
          </div>

          <div>
            <div>
              <div className="flex justify-between p-3 border-x-2 border-t-2  border-gray-200 ">
                <level>Price</level>
                <p>${product?.price}</p>
              </div>
              <div className="flex justify-between p-3 border-x-2 border-t-2 border-gray-200 ">
                <level>Status</level>
                <p> In Stock</p>
              </div>
              <div className="flex justify-between p-3 border-x-2 border-t-2 border-gray-200 ">
                <level>Reviews</level>
                <p> 2 reviews</p>
              </div>
              <div className="flex justify-between p-3 border-x-2 border-t-2 border-gray-200">
                <level>Quantity</level>
                <input
                  onChange={handleQty}
                  type="number"
                  min="1"
                  max="100"
                  value={qty}
                  className="bg-gray-200  px-3 py-2 rounded-md"
                ></input>
              </div>

              <input
                onClick={AddToCartHandle}
                type="submit"
                className="bg-slate-900 text-white w-full p-3"
                value="ADD TO CART"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
