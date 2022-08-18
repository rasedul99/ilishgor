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
        <>
          <div className={styles.left}>
            <img src={product?.image} />
          </div>
          <div className={styles.right}>
            <h3>{product?.name}</h3>
            <p>{product?.description}</p>
            <div className={styles.info}>
              <div className={styles.price}>
                <level>Price</level>
                <p>{product?.price}</p>
              </div>
              <div className={styles.status}>
                <level>Status</level>
                <p> In Stock</p>
              </div>
              <div className={styles.reviews}>
                <level>Reviews</level>
                <p> 2 reviews</p>
              </div>
              <div className={styles.quantity}>
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
        </>
      )}
    </div>
  );
};

export default SingleProduct;
