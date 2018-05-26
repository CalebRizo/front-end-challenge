import React, { Component } from 'react';
import LastTrades from './LastTrades/LastTrades';
import Chart from './Chart/Chart';
import Header from './Header/Header';
import MarketsSideBar from './MarketsSideBar/MarketsSideBar';
import OrderBook from './OrderBook/OrderBook';
import './ExchangePage.css';

const trades = [
  { id: 1, hour: "16:10:25", type: "buy", price: 319149.90, amount: 1.090484 },
  { id: 2, hour: "16:10:25", type: "buy", price: 319149.90, amount: 1.090484 },
  { id: 3, hour: "16:10:25", type: "sell", price: 319149.90, amount: 42.0903 },
]

class ExchangePage extends Component {
  render() {
    return (
      <div className="page-container">
        <Header />
        <div className="boxes-container">
          <div className="charts-container">
            <LastTrades trades={trades} />
            <div className="charts-children-container">
              <Chart />
              <OrderBook />
            </div>
          </div>
          <MarketsSideBar />
        </div>
      </div>
    );
  }
}

export default ExchangePage;
