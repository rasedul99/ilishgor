import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../style/shopSection.module.css";
const ShopSection = () => {
  const [products, setProducts] = useState([""]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products");
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <div className={styles.container}>
        {products.map((product) => {
          return (
            <>
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
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ShopSection;
