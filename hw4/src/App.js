import React, { Component } from 'react';
import './styles/all.css';
import './styles/index.css';
import './styles/shop.css';
import './styles/cart.css';
import './styles/flavors.css';
import Home from './Home.js'
import Shop from './Shop.js'
import About from './About.js'
import Detail from './Detail.js'

import cart from "./images/cart.png";
import ig from "./images/ig.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      id:null,
      title:null,
      desc:null
    };
    this.item = {
      
    };
  }

  renderPageView() {
    if(this.state.page === 0)
      return <Home/>
    if(this.state.page === 1)
      return <Shop onClick={this.setDetail.bind(this)} />
    if(this.state.page === 2)
      return <About/>
    if(this.state.page === 3)
      return <Detail id={this.state.id} desc={this.state.desc} title={this.state.title} />
  }

  changePage(state) {
    this.setState({page: state});
  }

  setDetail(n, t, d) {
    console.log(n);
    console.log(t);
    console.log(d);
    this.setState({page: 3, id: n, title:t, desc: d});
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
          <a onClick={(ev) => this.changePage(1)}>Shop</a>
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
