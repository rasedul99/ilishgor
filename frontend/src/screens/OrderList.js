import { format } from "date-fns";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrder } from "../Redux/Actions/orderActions";

function OrderList(props) {
  const userOrders = useSelector((state) => state.orderListMy);
  const { loading, orders, success, error } = userOrders;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMyOrder());
  }, []);
  return (
    <div>
      <table className="w-full">
        <tr>
          <th className="px-8 text-left ">ID</th>
          <th className="px-8 text-left ">Status</th>
          <th className="px-8 text-left ">Date</th>
          <th className="px-8 text-left ">TOTAL</th>
        </tr>
        {loading ? (
          <>Loading</>
        ) : error ? (
          <>Error</>
        ) : (
          <>
            {orders && orders.length !== 0 ? (
              <>
                {orders.map((order) => (
                  <tr>
                    <td className="px-8 text-left ">{order._id}</td>
                    <td className="px-8 text-left ">
                      {order.isPaid ? <>Paid</> : <>Not Paid</>}
                    </td>
                    <td className="px-8 text-left ">
                      {format(new Date(order.createdAt), "Pp")}
                    </td>
                    <td className="px-8 text-left ">
                      {Math.round(order.totalPrice)}
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <p>You have no orders yet</p>
            )}
          </>
        )}
      </table>
    </div>
  );
}

export default OrderList;
