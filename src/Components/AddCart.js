import React from "react";
import Service from "../Service";

function Addcart({ addToCart }) {
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

        {Service.map((val) => {
          return (
            <>
              <tr>
                <td key={val.id}>{val.subject}</td>
                <td>{val.date}</td>
                <td>{val.time}</td>
                <td>{val.availability} seats available</td>
                <td>
                  <button onClick={() => addToCart(val)}>
                    {val.availability ? `Book Now` : `Full`}
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

export default Addcart;
