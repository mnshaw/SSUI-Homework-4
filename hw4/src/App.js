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
import Cart from './Cart.js'
import Preview from './Preview.js'

import cart from "./images/cart.png";
import ig from "./images/ig.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      id:null,
      title:null,
      desc:null,
    };
    this.cart = {
      original: 0,
      glutenfree: 0,
      vegan: 0,
      bacon: 0,
      birthdaycake: 0,
      blackberry: 0,
      caramel: 0,
      carrot: 0,
      cranberry: 0,
      lemon: 0,
      maple: 0,
      oldfashioned: 0,
      pumpkin: 0,
      strawberry: 0,
      walnut: 0
    };
  }

  renderPageView() {
    if(this.state.page === 0)
      return <Home/>
    if(this.state.page === 1)
      return <Shop onClick={this.setDetail.bind(this)} addToCart={this.addToCart.bind(this)} cart={this.cart} />
    if(this.state.page === 2)
      return <About/>
    if(this.state.page === 3)
      return <Detail id={this.state.id} desc={this.state.desc} title={this.state.title} addToCart={this.addToCart.bind(this)}/>
    if(this.state.page === 4)
      return <Cart cart={this.cart} removeFromCart={this.removeFromCart.bind(this)} />    
  }

  changePage(state) {
    this.setState({page: state});
  }

  setDetail(n, t, d) {
    this.setState({page: 3, id: n, title:t, desc: d});
  }

  updateCart() {
    var tot = 0;
    for (let key of Object.entries(this.cart)) {
      tot += key[1];
    } 
    document.getElementById('total').textContent = tot;
  }

  addToCart(id, num) {
    this.cart[id] = this.cart[id] + parseInt(num);
    this.updateCart();
  }

  removeFromCart(id) {
    this.cart[id] = 0;
    this.updateCart();
  }

  renderPreview() {
    if(this.state.preview === 1)
      return <Preview cart={this.cart} onClick={(ev) => this.setState({page: 4})}/>
  }

  render() {
    return (
      <div className="App">
        <h1><a onClick={(ev) => this.setState({page: 0})}>Bun Bun Bake Shop</a></h1>

        <div id="cart" onClick={(ev) => this.setState({page: 4})} onMouseEnter={(ev) => this.setState({preview: 1})} onMouseLeave={(ev) => this.setState({preview: 0})}>
          <div id="total">0</div>
            <img id="cart-icon" src={cart} alt="shopping cart icon" />
          {this.renderPreview()}
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
