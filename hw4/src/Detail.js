import React, { Component } from 'react';
import './styles/flavors.css';


class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Detail">
        <div id={this.props.id} className="splash">
          <h2>{this.props.title}</h2>
        </div>
        <div className="originalDesc">
          <p>{this.props.desc}</p>
        </div>

        <div className="addToCart">
          How many bun buns?
          <input className="input" type="number" value="0" min="0" />
          <button type="button" onclick="findTotal()">Add to Cart</button>
        </div> 
      </div>
    );
  }
}

export default Detail;
