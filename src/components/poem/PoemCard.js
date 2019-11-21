import React, { Component } from 'react';

class PoemCard extends Component {
  render() {
    return (
      <div className="card text-center" style={{width: "18rem"}}>
        <div className="card-body">
          <h5><span className="card-title">{this.props.poem.name}</span></h5>
          <p className="card-text">{this.props.poem.text}</p>
        </div>
      </div>
    );
  }
}

export default PoemCard;