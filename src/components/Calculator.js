import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";

import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  state = {
    amountValue: 50,
    yearsValue: 30
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ yearsValue: value });
  };

  render() {
    const { amountValue, yearsValue } = this.state;

    return (
      <div className="App">
        <h4>İşletmemin {amountValue} adet arı kovanı var</h4>
        <InputRange
          step={1}
          maxValue={300}
          minValue={0}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4>
          İşletmemde  {yearsValue} dekar fındık bahçem var.
        </h4>
        <InputRange
          step={1}
          maxValue={500}
          minValue={0}
          value={yearsValue}
          onChange={this.handleYearChange}
        />
        <Display years={yearsValue} amount={amountValue} />
      </div>
    );
  }
}

export default Calculator;
