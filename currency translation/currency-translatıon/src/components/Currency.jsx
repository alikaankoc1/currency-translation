import React, { useState, useEffect } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_zZj3VnvhStbWzCozWiFWXsVFgpdZ3EUlpjPTJa0b";

function Currency() {
    useEffect(() => {
      console.log("Currency App Loaded");
    }, []);
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState();

  const exChange = async () => {
    let validAmount = Number(amount);
    if (amount === "" || isNaN(validAmount) || validAmount < 1) validAmount = 1;
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`,
    );
    let calcResult = (response.data.data[toCurrency] * validAmount).toFixed(2);
    setResult(calcResult);
    setAmount(validAmount);
  };
  return (
    <div className="currency-div">
      <div className="title-div">
        <h3 className="title-currency">DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div>
        <input
          value={amount}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "") {
              setAmount("");
            } else {
              const num = Number(val);
              if (isNaN(num) || num < 1) {
                setAmount(1);
              } else {
                setAmount(num);
              }
            }
          }}
          type="number"
          min={1}
          className="amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaRegArrowAltCircleRight className="arrow-right" />

        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input value={result} readOnly type="number" className="result" />
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
