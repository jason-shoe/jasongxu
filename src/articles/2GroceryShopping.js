import React, { Component } from 'react';

import './Articles.css';
import './2GroceryShopping.css';
import Header from '../pages/components/Header.jsx';
import Footer from '../pages/components/Footer.jsx';
import * as d3 from 'd3';

import MathJax from 'react-mathjax';

import ArticleImage from '../images/blog/groceryshoppingcropped.jpg';
import PieClass2 from './graphs2/PieChart2.jsx';

import tripTotal from './graphs2/pietotal.csv';
import tripOne from './graphs2/pie1.csv';
import tripTwo from './graphs2/pie2.csv';
import tripThree from './graphs2/pie3.csv';
import tripFour from './graphs2/pie4.csv';
import tripFive from './graphs2/pie5.csv';
import tripSix from './graphs2/pie6.csv';
import tripSeven from './graphs2/pie7.csv';

class GroceryShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNum: 0,
      color: ['black', 'black'],
      dataOne: [],
      dataTwo: [],
      dataThree: [],
      dataFour: [],
      dataFive: [],
      dataSix: [],
      dataSeven: [],
      dataTotal: [],
    };
    this.child = React.createRef();
  }

  componentDidMount() {
    this.show(0);
    d3.csv(tripOne, data => {
      var obj = data;
      obj.Index = Number(parseFloat(data.Index).toFixed(2));
      obj.PriceMean = Number(parseFloat(data.PriceMean).toFixed(2));
      obj.PriceTotal = Number(parseFloat(data.PriceTotal).toFixed(2));
      obj.Savings = Number(parseFloat(data.Savings).toFixed(1));
      this.setState({
        dataOne: this.state.dataOne.concat(obj),
      });
    });
    d3.csv(tripTwo, data => {
      var obj = data;
      obj.Index = Number(parseFloat(data.Index).toFixed(2));
      obj.PriceMean = Number(parseFloat(data.PriceMean).toFixed(2));
      obj.PriceTotal = Number(parseFloat(data.PriceTotal).toFixed(2));
      obj.Savings = Number(parseFloat(data.Savings).toFixed(1));
      this.setState({
        dataTwo: this.state.dataTwo.concat(obj),
      });
    });

    d3.csv(tripThree, data => {
      var obj = data;
      obj.Index = Number(parseFloat(data.Index).toFixed(2));
      obj.PriceMean = Number(parseFloat(data.PriceMean).toFixed(2));
      obj.PriceTotal = Number(parseFloat(data.PriceTotal).toFixed(2));
      obj.Savings = Number(parseFloat(data.Savings).toFixed(1));
      this.setState({
        dataThree: this.state.dataThree.concat(obj),
      });
    });

    d3.csv(tripFour, data => {
      var obj = data;
      obj.Index = Number(parseFloat(data.Index).toFixed(2));
      obj.PriceMean = Number(parseFloat(data.PriceMean).toFixed(2));
      obj.PriceTotal = Number(parseFloat(data.PriceTotal).toFixed(2));
      obj.Savings = Number(parseFloat(data.Savings).toFixed(1));
      this.setState({
        dataFour: this.state.dataFour.concat(obj),
      });
    });

    d3.csv(tripFive, data => {
      var obj = data;
      obj.Index = Number(parseFloat(data.Index).toFixed(2));
      obj.PriceMean = Number(parseFloat(data.PriceMean).toFixed(2));
      obj.PriceTotal = Number(parseFloat(data.PriceTotal).toFixed(2));
      obj.Savings = Number(parseFloat(data.Savings).toFixed(1));
      this.setState({
        dataFive: this.state.dataFive.concat(obj),
      });
    });

    d3.csv(tripSix, data => {
      var obj = data;
      obj.Index = Number(parseFloat(data.Index).toFixed(2));
      obj.PriceMean = Number(parseFloat(data.PriceMean).toFixed(2));
      obj.PriceTotal = Number(parseFloat(data.PriceTotal).toFixed(2));
      obj.Savings = Number(parseFloat(data.Savings).toFixed(1));
      this.setState({
        dataSix: this.state.dataSix.concat(obj),
      });
    });

    d3.csv(tripSeven, data => {
      var obj = data;
      obj.Index = Number(parseFloat(data.Index).toFixed(2));
      obj.PriceMean = Number(parseFloat(data.PriceMean).toFixed(2));
      obj.PriceTotal = Number(parseFloat(data.PriceTotal).toFixed(2));
      obj.Savings = Number(parseFloat(data.Savings).toFixed(1));
      this.setState({
        dataSeven: this.state.dataSeven.concat(obj),
      });
    });

    d3.csv(tripTotal, data => {
      var obj = data;
      obj.Index = Number(parseFloat(data.Index).toFixed(2));
      obj.PriceMean = Number(parseFloat(data.PriceMean).toFixed(2));
      obj.PriceTotal = Number(parseFloat(data.PriceTotal).toFixed(2));
      obj.Savings = Number(parseFloat(data.Savings).toFixed(1));
      this.setState({
        dataTotal: this.state.dataTotal.concat(obj),
      });
    });
  }

  show(nr) {
    document.getElementById('table0').style.display = 'none';
    document.getElementById('table1').style.display = 'none';
    document.getElementById('table2').style.display = 'none';
    document.getElementById('table3').style.display = 'none';
    document.getElementById('table4').style.display = 'none';
    document.getElementById('table5').style.display = 'none';
    document.getElementById('table6').style.display = 'none';
    document.getElementById('table7').style.display = 'none';
    document.getElementById('table' + nr).style.display = 'block';

    document.getElementById('grocery-button-0').style.display = 'block';
    document.getElementById('grocery-button-1').style.display = 'block';
    document.getElementById('grocery-button-2').style.display = 'block';
    document.getElementById('grocery-button-3').style.display = 'block';
    document.getElementById('grocery-button-4').style.display = 'block';
    document.getElementById('grocery-button-5').style.display = 'block';
    document.getElementById('grocery-button-6').style.display = 'block';
    document.getElementById('grocery-button-7').style.display = 'block';

    document.getElementById('grocery-button-dark-0').style.display = 'none';
    document.getElementById('grocery-button-dark-1').style.display = 'none';
    document.getElementById('grocery-button-dark-2').style.display = 'none';
    document.getElementById('grocery-button-dark-3').style.display = 'none';
    document.getElementById('grocery-button-dark-4').style.display = 'none';
    document.getElementById('grocery-button-dark-5').style.display = 'none';
    document.getElementById('grocery-button-dark-6').style.display = 'none';
    document.getElementById('grocery-button-dark-7').style.display = 'none';

    document.getElementById('grocery-button-' + nr).style.display = 'none';
    document.getElementById('grocery-button-dark-' + nr).style.display =
      'block';
  }

  render() {
    return (
      <div className="container">
        <Header pageNum={5} />
        <MathJax.Provider>
          <div className="everything">
            <h1 id="article-title">Grocery Shopping Data</h1>
            <img className="article-image" src={ArticleImage} alt="" />
            <div className="article-content">
              <p>
                During the coronavirus pandemic, I decided to track in detail
                how much we were spending at the grocery store. Since We try to
                go out as few times as possible, it was important to understand
                what we bought during each of our grocery trips. I took this
                opportunity to practice manipulating datasets using Pandas as
                well as using D3 for interactive data visualization.
              </p>
              <p>
                Press one of the following buttons to explore data from
                different trips
              </p>
              <div className="column-flex">
                <div className="pie-chart-stuff">
                  <button
                    id="grocery-button-0"
                    className="grocery-button"
                    onClick={() => {
                      this.child.current.update(0, this.state.dataTotal);
                      this.show(0);
                    }}
                  >
                    Total
                  </button>
                  <button
                    id="grocery-button-dark-0"
                    className="grocery-button-dark"
                    onClick={() => {
                      this.child.current.update(0, this.state.dataTotal);
                      this.show(0);
                    }}
                  >
                    Total
                  </button>

                  <button
                    id="grocery-button-1"
                    className="grocery-button"
                    onClick={() => {
                      this.child.current.update(1, this.state.dataOne);
                      this.show(1);
                    }}
                  >
                    March 20
                  </button>
                  <button
                    id="grocery-button-dark-1"
                    className="grocery-button-dark"
                    onClick={() => {
                      this.child.current.update(1, this.state.dataOne);
                      this.show(1);
                    }}
                  >
                    March 20
                  </button>

                  <button
                    id="grocery-button-2"
                    className="grocery-button"
                    onClick={() => {
                      this.child.current.update(2, this.state.dataTwo);
                      this.show(2);
                    }}
                  >
                    March 27
                  </button>
                  <button
                    id="grocery-button-dark-2"
                    className="grocery-button-dark"
                    onClick={() => {
                      this.child.current.update(2, this.state.dataTwo);
                      this.show(2);
                    }}
                  >
                    March 27
                  </button>

                  <button
                    id="grocery-button-3"
                    className="grocery-button"
                    onClick={() => {
                      this.child.current.update(3, this.state.dataThree);
                      this.show(3);
                    }}
                  >
                    April 3
                  </button>
                  <button
                    id="grocery-button-dark-3"
                    className="grocery-button-dark"
                    onClick={() => {
                      this.child.current.update(3, this.state.dataThree);
                      this.show(3);
                    }}
                  >
                    April 3
                  </button>

                  <button
                    id="grocery-button-4"
                    className="grocery-button"
                    onClick={() => {
                      this.child.current.update(4, this.state.dataFour);
                      this.show(4);
                    }}
                  >
                    April 13
                  </button>
                  <button
                    id="grocery-button-dark-4"
                    className="grocery-button-dark"
                    onClick={() => {
                      this.child.current.update(4, this.state.dataFour);
                      this.show(4);
                    }}
                  >
                    April 13
                  </button>

                  <button
                    id="grocery-button-5"
                    className="grocery-button"
                    onClick={() => {
                      this.child.current.update(5, this.state.dataFive);
                      this.show(5);
                    }}
                  >
                    April 24
                  </button>
                  <button
                    id="grocery-button-dark-5"
                    className="grocery-button-dark"
                    onClick={() => {
                      this.child.current.update(5, this.state.dataFive);
                      this.show(5);
                    }}
                  >
                    April 24
                  </button>

                  <button
                    id="grocery-button-6"
                    className="grocery-button"
                    onClick={() => {
                      this.child.current.update(6, this.state.dataSix);
                      this.show(6);
                    }}
                  >
                    May 6
                  </button>
                  <button
                    id="grocery-button-dark-6"
                    className="grocery-button-dark"
                    onClick={() => {
                      this.child.current.update(6, this.state.dataSix);
                      this.show(6);
                    }}
                  >
                    May 6
                  </button>

                  <button
                    id="grocery-button-7"
                    className="grocery-button"
                    onClick={() => {
                      this.child.current.update(7, this.state.dataSeven);
                      this.show(7);
                    }}
                  >
                    May 17
                  </button>
                  <button
                    id="grocery-button-dark-7"
                    className="grocery-button-dark"
                    onClick={() => {
                      this.child.current.update(7, this.state.dataSeven);
                      this.show(7);
                    }}
                  >
                    May 17
                  </button>
                  <PieClass2
                    className="piechart"
                    ref={this.child}
                    data={this.state.dataTotal}
                    width={800}
                    height={400}
                    margin={40}
                    innerRadius={0}
                    outerRadius={250}
                    div={'abcd'}
                  />
                  <g className="legend" />
                </div>
                <table id="table0" className="grocery-data-table">
                  <tr>
                    <th className="grocery-title" colspan="4">
                      Total
                    </th>
                  </tr>
                  <tr className="header-tr">
                    <th>Category</th>
                    <th>Items</th>
                    <th>Mean Price</th>
                    <th>Price Total</th>
                  </tr>
                  {this.state.dataTotal.map(item => (
                    <tr>
                      <th id="grocery-category">{item.Category}</th>
                      <th>
                        {item.Items.replace("' '", ',').replace("' '", ',')}
                      </th>
                      <th>{item.PriceMean}</th>
                      <th>{item.PriceTotal}</th>
                    </tr>
                  ))}
                </table>
                <table id="table1" className="grocery-data-table">
                  <tr>
                    <th className="grocery-title" colspan="4">
                      Table One - March 20, 2020
                    </th>
                  </tr>
                  <tr className="header-tr">
                    <th>Category</th>
                    <th>Items</th>
                    <th>Mean Price</th>
                    <th>Price Total</th>
                  </tr>
                  {this.state.dataOne.map(item => (
                    <tr>
                      <th id="grocery-category">{item.Category}</th>
                      <th>
                        {item.Items.replace('[', '')
                          .replace("'", '')
                          .replace("'", '')
                          .replace(']', '')}
                      </th>
                      <th>{item.PriceMean}</th>
                      <th>{item.PriceTotal}</th>
                    </tr>
                  ))}
                </table>
                <table id="table2" className="grocery-data-table">
                  <tr>
                    <th className="grocery-title" colspan="4">
                      Table Two - March 27, 2020
                    </th>
                  </tr>
                  <tr className="header-tr">
                    <th>Category</th>
                    <th>Items</th>
                    <th>Mean Price</th>
                    <th>Price Total</th>
                  </tr>
                  {this.state.dataTwo.map(item => (
                    <tr>
                      <th id="grocery-category">{item.Category}</th>
                      <th>
                        {item.Items.replace('[', '')
                          .replace("'", '')
                          .replace("'", '')
                          .replace(']', '')}
                      </th>
                      <th>{item.PriceMean}</th>
                      <th>{item.PriceTotal}</th>
                    </tr>
                  ))}
                </table>
                <table id="table3" className="grocery-data-table">
                  <tr>
                    <th className="grocery-title" colspan="4">
                      Table Three - April 3, 2020
                    </th>
                  </tr>
                  <tr className="header-tr">
                    <th>Category</th>
                    <th>Items</th>
                    <th>Mean Price</th>
                    <th>Price Total</th>
                  </tr>
                  {this.state.dataThree.map(item => (
                    <tr>
                      <th id="grocery-category">{item.Category}</th>
                      <th>
                        {item.Items.replace('[', '')
                          .replace("'", '')
                          .replace("'", '')
                          .replace(']', '')}
                      </th>
                      <th>{item.PriceMean}</th>
                      <th>{item.PriceTotal}</th>
                    </tr>
                  ))}
                </table>

                <table id="table4" className="grocery-data-table">
                  <tr>
                    <th className="grocery-title" colspan="4">
                      Table Four - April 13, 2020
                    </th>
                  </tr>
                  <tr className="header-tr">
                    <th>Category</th>
                    <th>Items</th>
                    <th>Mean Price</th>
                    <th>Price Total</th>
                  </tr>
                  {this.state.dataFour.map(item => (
                    <tr>
                      <th id="grocery-category">{item.Category}</th>
                      <th>
                        {item.Items.replace('[', '')
                          .replace("'", '')
                          .replace("'", '')
                          .replace(']', '')}
                      </th>
                      <th>{item.PriceMean}</th>
                      <th>{item.PriceTotal}</th>
                    </tr>
                  ))}
                </table>

                <table id="table5" className="grocery-data-table">
                  <tr>
                    <th className="grocery-title" colspan="4">
                      Table Five - April 24, 2020
                    </th>
                  </tr>
                  <tr className="header-tr">
                    <th>Category</th>
                    <th>Items</th>
                    <th>Mean Price</th>
                    <th>Price Total</th>
                  </tr>
                  {this.state.dataFive.map(item => (
                    <tr>
                      <th id="grocery-category">{item.Category}</th>
                      <th>
                        {item.Items.replace('[', '')
                          .replace("'", '')
                          .replace("'", '')
                          .replace(']', '')}
                      </th>
                      <th>{item.PriceMean}</th>
                      <th>{item.PriceTotal}</th>
                    </tr>
                  ))}
                </table>

                <table id="table6" className="grocery-data-table">
                  <tr>
                    <th className="grocery-title" colspan="4">
                      Table Six - May 6, 2020
                    </th>
                  </tr>
                  <tr className="header-tr">
                    <th>Category</th>
                    <th>Items</th>
                    <th>Mean Price</th>
                    <th>Price Total</th>
                  </tr>
                  {this.state.dataSix.map(item => (
                    <tr>
                      <th id="grocery-category">{item.Category}</th>
                      <th>
                        {item.Items.replace('[', '')
                          .replace("'", '')
                          .replace("'", '')
                          .replace(']', '')}
                      </th>
                      <th>{item.PriceMean}</th>
                      <th>{item.PriceTotal}</th>
                    </tr>
                  ))}
                </table>

                <table id="table7" className="grocery-data-table">
                  <tr>
                    <th className="grocery-title" colspan="4">
                      Table Seven - May 17, 2020
                    </th>
                  </tr>
                  <tr className="header-tr">
                    <th>Category</th>
                    <th>Items</th>
                    <th>Mean Price</th>
                    <th>Price Total</th>
                  </tr>
                  {this.state.dataSeven.map(item => (
                    <tr>
                      <th id="grocery-category">{item.Category}</th>
                      <th>
                        {item.Items.replace('[', '')
                          .replace("'", '')
                          .replace("'", '')
                          .replace(']', '')}
                      </th>
                      <th>{item.PriceMean}</th>
                      <th>{item.PriceTotal}</th>
                    </tr>
                  ))}
                </table>

                <div className="hi"></div>
              </div>
            </div>
          </div>
        </MathJax.Provider>
        <Footer />
      </div>
    );
  }
}

export default GroceryShopping;
