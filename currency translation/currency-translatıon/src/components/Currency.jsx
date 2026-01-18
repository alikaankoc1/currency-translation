import React from "react";

function Currency() {
  return (
    <div className="currency-div">
      <input type="number" className="amount" />
      <select className="from-currency-option">
        <option>USD</option>
        <option>EURO</option>
        <option>TL</option>
      </select>

      <select className="TO-currency-option">
        <option>TL</option>
        <option>EURO</option>
        <option>USD</option>
      </select>

      <input type="number" className="result" />
    </div>
  );
}

export default Currency;
