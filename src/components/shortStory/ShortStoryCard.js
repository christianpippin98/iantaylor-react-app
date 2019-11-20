import React, { Component } from 'react';

class ShortStoryCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-storyname">Doodles</span></h3>
          <p>Breed: Poodle</p>
        </div>
      </div>
    );
  }
}

export default ShortStoryCard;