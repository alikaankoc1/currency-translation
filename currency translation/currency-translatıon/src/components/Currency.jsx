import React from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Currency() {
  return (
    <div className="currency-div">
      <div className="title-div">
        <h3 className="title-currency">DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div>
        <input type="number" className="amount" />
        <select className="from-currency-option">
          <option>USD</option>
          <option>EURO</option>
          <option>TL</option>
        </select>
        <FaRegArrowAltCircleRight className="arrow-right" />

        <select className="to-currency-option">
          <option>TL</option>
          <option>EURO</option>
          <option>USD</option>
        </select>

        <input type="number" className="result" />
      </div>
      <div>
        <button className="currency-btn">Çevir</button>
      </div>
    </div>
  );
}

export default Currency;
