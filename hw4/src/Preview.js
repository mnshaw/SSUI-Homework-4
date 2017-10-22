import React, { Component } from 'react';

class Preview extends Component {
  constructor(props) {
    super(props);
  }


  renderList(cart) {
    var products = [];
    var quantity = [];
    var price = [];
    var buttons = [];
    var totalPrice = 0;
    for (let key of Object.entries(cart)) {
      if (key[1] > 0) {
        products.push(<p className={key[0]}>{key[0]}</p>);
        quantity.push(<p className={key[0]}>Quantity: {key[1]}</p>);
        price.push(<p className={key[0]}><b>${parseInt(key[1]) * 3}</b></p>);
        buttons.push(<button className={key[0]} type="button" onClick={() => this.remove(cart, key[0], key[1])}>Remove</button>)
        totalPrice += parseInt(key[1]) * 3;
      }
    }
    return (
      <div>
        <p id="totalPrice"><b>Total: ${totalPrice}</b></p>

        <div className="list" id="products">
          {products}
        </div>

        <div className="list" id="num">
          {quantity}
        </div>

        <div className="list" id="price">
          {price}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="Preview">
        {this.renderList(this.props.cart)}
      </div>
    );
  }
}

export default Preview;
