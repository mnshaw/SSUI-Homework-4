import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="About">
        <div id="wantBuns">
          <h2 className="index-h2">Yinz want cinnamon buns?</h2>
          <h2 className="index-h2">Bun Buns?</h2>
          <h2 className="index-h2">Bun Bun Bake Shop at your service!</h2>
        </div>

        <div className="info" id="hours">
          <h2>Hours:</h2>
          <p>M: Closed</p>
          <p>Tu-Th: 9am-10pm</p>
          <p>F-Su: 10am-11pm</p>
        </div>
        <div className="info" id="address">
          <h2>Location:</h2>
          <p>1700 E. Carson St.</p>
          <p>Pittburgh, PA</p>
          <p>15203</p>
        </div>
      </div>
    );
  }
}

export default About;
