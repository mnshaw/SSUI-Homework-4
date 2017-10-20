import React, { Component } from 'react';
import './styles/flavors.css';


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  findTotal(id) {
    this.props.addToCart(id, this.state.num);
  }

  handleChange(event) {
    this.setState({num: event.target.value})
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
          <input className="input" type="number" value={this.state.num} min="0" onChange={this.handleChange.bind(this)}/>
          <button type="button" onClick={() => {this.findTotal(this.props.id)}}>Add to Cart</button>
        </div> 
      </div>
    );
  }
}

export default Detail;
