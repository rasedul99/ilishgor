import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style/singleProduct.module.css";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/product/${id}`
      );
      console.log(data);
      setProduct(data);
    };
    fetchProducts();
  }, [id]);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={product.image} />
      </div>
      <div className={styles.right}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className={styles.info}>
          <div className={styles.price}>
            <level>Price</level>
            <p>{product.price}</p>
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
              type="number"
              min="1"
              max="100"
              value="1"
              className="bg-gray-200  px-3 py-2 rounded-md"
            ></input>
          </div>

          <input
            type="submit"
            className="bg-slate-900 text-white w-full p-3"
            value="ADD TO CART"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
