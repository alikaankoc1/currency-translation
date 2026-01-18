import React, { useState } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_zZj3VnvhStbWzCozWiFWXsVFgpdZ3EUlpjPTJa0b";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [result, setResult] = useState(0);

  const exChange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`,
    );
    console.log(response.data.data);
  };
  return (
    <div className="currency-div">
      <div className="title-div">
        <h3 className="title-currency">DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EURO</option>
          <option>TRY</option>
        </select>
        <FaRegArrowAltCircleRight className="arrow-right" />

        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>EURO</option>
          <option>USD</option>
        </select>

        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        />
      </div>
      <div>
        <button onClick={exChange} className="currency-btn">
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
