import React, { Component } from 'react';
import './styles/all.css';
import './styles/index.css';
import './styles/shop.css';
import './styles/cart.css';
import './styles/flavors.css';
import Home from './Home.js'
import Shop from './Shop.js'
import About from './About.js'

import cart from "./images/cart.png";
import ig from "./images/ig.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
  }

  renderPageView() {
    if(this.state.page === 0)
      return <Home/>
    if(this.state.page === 1)
      return <Shop/>
    if(this.state.page === 2)
      return <About/>
  }

  render() {
    return (
      <div className="App">
        <h1><a onClick={(ev) => this.setState({page: 0})}>Bun Bun Bake Shop</a></h1>

        <div id="cart">
          <div id="total">0</div>
          <a href="./cart.html"> 
            <img id="cart-icon" src={cart} alt="shopping cart icon" />
          </a>
        </div>

        <nav>
          <a onClick={(ev) => this.setState({page: 1})}>Shop</a>
          <a onClick={(ev) => this.setState({page: 2})}>About</a>
        </nav>

        {this.renderPageView()}

        <footer>
          <img src={ig} alt="Instagram icon" />
        </footer>
      </div>
    );
  }
}

export default App;
