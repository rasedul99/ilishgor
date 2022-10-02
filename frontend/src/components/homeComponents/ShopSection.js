import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProduct } from "../../Redux/Actions/ProductActions";
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
    <div className="max-w-7xl mx-auto">
      <div className=" grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-6 ">
        {products?.map((product) => {
          return (
            <>
              {loading ? (
                <p>Loading ...</p>
              ) : error ? (
                <p>Error:{error}</p>
              ) : (
                <div>
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image} className="rounded-md w-full " />

                    <div className="mt-3">
                      <p className="font-medium">{product.name}</p>

                      <p>{product.rating}</p>
                      <p>${product.price}</p>
                    </div>
                    <input
                      type="button"
                      value="View Details"
                      className="bg-blue-500 w-full py-2  mt-2 rounded"
                    />
                  </Link>
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
