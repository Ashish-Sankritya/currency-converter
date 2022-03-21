import React from "react";
import "./App.css";

export default function CurrencyRow(props) {
  const {
    amount,
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
  } = props;

  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
