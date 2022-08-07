import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProduct } from "../../Redux/Actions/ProductActions";
import styles from "../../style/shopSection.module.css";
const ShopSection = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => {
    console.log(state);
    return state.productList;
  });
  const { loading, error, products } = productList;
  console.log(loading);
  console.log(productList);
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <div>
      <div className={styles.container}>
        {products?.map((product) => {
          return (
            <>
              {loading ? (
                <p>Loading ...</p>
              ) : error ? (
                <p>Error:{error}</p>
              ) : (
                <div>
                  <div className={styles.card}>
                    <div className={styles.cardImage}>
                      <img src={product.image} />
                    </div>
                    <div className={styles.cartText}>
                      <Link to={`/product/${product._id}`}>
                        <p>{product.name}</p>
                      </Link>
                      <p>{product.rating}</p>
                      <p>{product.price}</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ShopSection;
