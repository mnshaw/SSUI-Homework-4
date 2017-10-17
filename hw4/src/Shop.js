import React, { Component } from 'react';

import transparentBuns from "./images/transparent-buns.png";

class Shop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <h2>Flavors</h2>
          <p>Originals are $3/bun, everything else is $4/bun</p>

          <div id="flavorLabels">
            <a href="./flavors/original.html">Original</a>
            <a href="./flavors/glutenfree.html">Original (Gluten Free)</a>
            <a href="./flavors/vegan.html">Original (Vegan)</a>
            <a href="./flavors/bacon.html">Bacon</a>
            <a href="./flavors/birthdaycake.html">Birthday Cake</a>
            <a href="./flavors/blackberry.html">Blackberry</a>
            <a href="./flavors/caramel.html">Caramel Pecan</a>
            <a href="./flavors/carrot.html">Carrot Cake</a>
            <a href="./flavors/cranberry.html">Cranberry</a>
            <a href="./flavors/lemon.html">Lemon Lavender</a>
            <a href="./flavors/maple.html">Maple Apple Pecan</a>
            <a href="./flavors/oldfashioned.html">Old Fashioned Buttermilk</a>
            <a href="./flavors/pumpkin.html">Pumpkin Spice</a>
            <a href="./flavors/strawberry.html">Strawberry Rhubarb</a>
            <a href="./flavors/walnut.html">Walnut</a>
          </div>

          <div id="flavorNum">
            <input class="input" id="original" type="number" value="0" min="0" />
            <input class="input" id="glutenfree" type="number" value="0" min="0" />
            <input class="input" id="vegan" type="number" value="0" min="0" />
            <input class="input" id="bacon" type="number" value="0" min="0" />
            <input class="input" id="birthdaycake" type="number" value="0" min="0" />
            <input class="input" id="blackberry" type="number" value="0" min="0" />
            <input class="input" id="caramel" type="number" value="0" min="0" />
            <input class="input" id="carrot" type="number" value="0" min="0" />
            <input class="input" id="cranberry" type="number" value="0" min="0" />
            <input class="input" id="lemon" type="number" value="0" min="0" />
            <input class="input" id="maple" type="number" value="0" min="0" />
            <input class="input" id="oldfashioned" type="number" value="0" min="0" />
            <input class="input" id="pumpkin" type="number" value="0" min="0" />
            <input class="input" id="strawberry" type="number" value="0" min="0" />
            <input class="input" id="walnut" type="number" value="0" min="0" />
          </div>
        </div>

        <button type="button" onclick="findTotal()">Add to Cart</button>

      </div>
    );
  }
}

export default Shop;
