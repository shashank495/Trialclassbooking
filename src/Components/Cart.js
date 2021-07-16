import React from "react";

function Cart({ cart, removeCart }) {
  return (
    <>
      <table
        className="table-bordered table-striped text-center container-fluid"
        id="tbval"
      >
        <tr>
          <th>Subject</th>
          <th>Date</th>
          <th>Time</th>
          <th>Availability</th>
          <th></th>
        </tr>

        {cart.map((val) => {
          return (
            <>
              <tr>
                <td key={val.id}>{val.subject}</td>
                <td>{val.date}</td>
                <td>{val.time}</td>
                <td>{val.availability} seats available</td>
                <td>
                  <button onClick={() => removeCart(val)}>
                    {val.availability ? `Remove` : `Full`}
                  </button>
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
}

export default Cart;
