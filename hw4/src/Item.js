import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
  }


  findQuantity(cart, id) {
    return (
      <p>Buns In Cart: {cart[id]}</p>
    )
  }

  renderItem() {

    return (
      <div className="Item" onClick={() => {this.props.onClick(this.props.id, this.props.title, this.props.desc)}}>
        <div className="preview" id={this.props.id}>
        </div>
        <a>{this.props.link}</a>
        <p>{this.props.desc}</p>
        <p>Price: $3</p>
        <br />
        {this.findQuantity(this.props.cart, this.props.id)}
      </div>
    )
  }

  render() {
    return (
      this.renderItem()    
    );
  }
}

export default Item;
