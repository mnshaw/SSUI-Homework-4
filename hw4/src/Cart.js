import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.flavors = {
      original:"Original Buns", 
      glutenfree: "Original (Gluten Free)", 
      vegan: "Original (Vegan)",
      bacon: "Bacon",
      birthdaycake: "Birthday Cake",
      blackberry: "Blackberry",
      caramel: "Caramel Pecan",
      carrot: "Carrot Cake",
      cranberry: "Cranberry",
      lemon: "Lemon Lavendar",
      maple: "Maple Apple Pecan",
      oldfashioned: "Old Fashioned Buttermilk",
      pumpkin: "Pumpkin Spice", 
      strawberry: "Strawberry Rhubarb",
      walnut: "Walnut"
    }
  }

  remove(cart, className, quantity){
    var arr = document.getElementsByClassName(className);
    for (var i = 0; i < arr.length; i++) {
      arr[i].style.display="none";
    }

    var price = document.getElementById('totalPrice').textContent;
    price = price.slice(14);
    console.log({price});
    price -= (quantity * 3);
    
    this.props.removeFromCart(className);
    document.getElementById('totalPrice').textContent = "Total Price: $" + price;
  }

  renderList(cart) {
    var products = [];
    var quantity = [];
    var price = [];
    var buttons = [];
    var totalPrice = 0;
    for (let key of Object.entries(cart)) {
      if (key[1] > 0) {
        products.push(<p className={key[0]}>{this.flavors[key[0]]}</p>);
        quantity.push(<p className={key[0]}>{key[1]}</p>);
        price.push(<p className={key[0]}>${parseInt(key[1]) * 3}</p>);
        buttons.push(<button className={key[0]} type="button" onClick={() => this.remove(cart, key[0], key[1])}>Remove</button>)
        totalPrice += parseInt(key[1]) * 3;
      }
    }
    return (
      <div>
        <div className="list" id="products">
          {products}
        </div>

        <div className="list" id="num">
          {quantity}
        </div>

        <div className="list" id="price">
          {price}
        </div>

        <div className="list" id="buttons">
          {buttons}
        </div>

        <p id="totalPrice">Total Price: ${totalPrice}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="Cart">
        <h2>Shopping Cart</h2>

        {this.renderList(this.props.cart)}
        
        <button type="button">Checkout</button>
      </div>
    );
  }
}

export default Cart;
