import React, { Component } from 'react';
import Item from './Item.js'

import transparentBuns from "./images/transparent-buns.png";

class Shop extends Component {
  constructor(props) {
    super(props);
    var original = {id:"original", link: "Original Buns", title: "ORIGINAL BUNS", desc: "Our famous classic cinnamon roll! Our recipe hasn't been changed for generations."}
    var glutenfree = {id: "glutenfree", link: "Original (Gluten Free)", title: "ORIGINAL (GLUTEN FREE) BUNS", desc: "Our famous classic cinnamon roll with a gluten free spin!"}
    var vegan = {id: "vegan", link: "Original (Vegan)", title: "ORIGINAL (VEGAN) BUNS", desc: "Our famous classic cinnamon roll with a vegan spin!"}
    var bacon = {id: "bacon", link: "Bacon", title: "BACON BUNS", desc: "Crunchy, salty bacon sprinkled on a fluffy, sweet cinnamon roll… Don’t you want to try this match made in heaven?"}
    var birthdaycake = {id: "birthdaycake", link: "Birthday Cake", title: "BIRTHDAY CAKE BUNS", desc: "Bun buns for your birthday! Or any other day of the year."}
    var blackberry = {id: "blackberry", link: "Blackberry", title: "BLACKBERRY BUNS", desc: "Juicy blackberries add a sweet but tart kick to our bun buns."}
    var caramel = {id: "caramel", link: "Caramel Pecan", title: "CARAMEL PECAN BUNS", desc: "Who doesn't love some caramel added to their pastries? With a perfect amount of crunch from some pecans!"}
    var carrot = {id: "carrot", link: "Carrot Cake", title: "CARROT CAKE BUNS", desc: "For those rabbits *ahem* carrot lovers out there."}
    var cranberry = {id: "cranberry", link: "Cranberry", title: "CRANBERRY BUNS", desc: "If you love cranberry juice, you should try these out!"}
    var lemon = {id:"lemon", link:"Lemon Lavendar", title: "LEMON LAVENDAR BUNS", desc: "Lemon and Lavender Lovers unite! LLL!"}
    var maple = {id: "maple", link: "Maple Apple Pecan", title: "MAPLE APPLE PECAN BUNS", desc: "A very homey version of our delectable bun buns. Sure to be a hit with all ages!"}
    var oldfashioned = {id: "oldfashioned", link: "Old Fashioned Buttermilk", title: "OLD FASHIONED BUTTERMILK BUNS", desc: "Our grandma's recipe for buttermilk bun buns. The recipe is a secret passed down through our family!"}
    var pumpkin = {id: "pumpkin", link: "Pumpkin Spice", title: "PUMPKIN SPICE BUNS", desc: "Basic people rejoice! This bun bun is back due to popular demand!"}
    var strawberry = {id: "strawberry", link: "Strawberry Rhubarb", title: "STRAWBERRY RHUBARB BUNS", desc: "Our strawberries and rhubarb are locally sourced from our own backyard!"}
    var walnut = {id: "walnut", link: "Walnut", title: "WALNUT BUNS", desc: "Walnuts add crunch and a slightly smokey depth."}
    this.flavors = [original, glutenfree, vegan, bacon, birthdaycake, blackberry, caramel, carrot, cranberry, lemon, maple, oldfashioned, pumpkin, strawberry, walnut]
  }

  renderLabels() {
    var elements = []
    for(var i=0; i < this.flavors.length; i++)
    {
      let item = this.flavors[i]
      elements.push(<Item onClick={() => {this.props.onClick(item.id, item.title, item.desc)}} id={item.id} title={item.title} link={item.link} desc={item.desc} cart={this.props.cart}/>)
    }
    return (
      <div id="flavorLabels">
        {elements}
      </div>
    )
  }

  findTotal(){
    var arr = document.getElementsByClassName('input');
    var added = {};
    for (var i = 0; i < arr.length; i++) {
      if (parseInt(arr[i].value)) {
        let item = {id: arr[i].id, value:arr[i].value};
        added[item.id] = item.value;
      }
    }

    this.props.addToCart(added);
  }

  renderStore() {
    return (
      <div className="Shop">
        <div id="buns">
          <img src={transparentBuns} alt="A closeup of cinnamon rolls" />
        </div>
        <div id="subHeader">
          <h2>ONLINE SHOP</h2>
          <h3>15 delicious flavors</h3>
          <p>We ship fresh buns every morning to destinations across the USA. Get your favorite bun buns now!</p>
        </div>

        <div id="flavors">
          <h2 id="flavorHeader">Flavors</h2>
          {this.renderLabels()}
        </div>
      </div>
    )
  }

  render() {
    return (
      this.renderStore()    
    );
  }
}

export default Shop;
