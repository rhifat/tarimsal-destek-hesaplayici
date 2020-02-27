import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class Display extends Component {
  state = {
    APR: 1
  };

  componentDidMount() {
    this.calculateAPR();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateAPR();
    }
  }

  calculateAPR = () => {
    const { amount } = this.props;

    if (100 < amount && amount < 5000) {
      this.setState({ APR: 1 });
    }
    if (5000 < amount && amount < 10000) {
      this.setState({ APR: 1 });
    }
    if (10000 < amount && amount < 15000) {
      this.setState({ APR: 1 });
    }
    if (15000 < amount && amount < 20000) {
      this.setState({ APR: 1 });
    }
  };

  calculateMonthlyRepayment = () => {
    const { amount, years } = this.props;

    const decimalFormat = this.state.APR + 1;
    const totalOwed = decimalFormat * amount * 15;
    const monthlyRepayment = totalOwed + (years * 170) + (years * 21);

    return <p>{Math.round(monthlyRepayment)} &#8378;</p>;
  };

  percentageAPR = () => {
    return <p>{this.state.APR * 100}%</p>;
  };

  render() {
    return (
      <div className="flex">
        <DisplayChild func={this.percentageAPR()} text="Destek Oranı" />
        <DisplayChild
          func={this.calculateMonthlyRepayment()}
          text=" Toplam Destek Miktarı"
        />
      </div>
    );
  }
}

Display.propTypes = {
  years: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Display;
