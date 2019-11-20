import React, { Component } from 'react'
import PoemCard from './poem/PoemCard'
import './IanTaylor.css'

class IanTaylor extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Ian Taylor<br />
            <small>Personal Writing Journal</small>
          </h2>
        </div>
        <div>
          <PoemCard />
          <PoemCard />
          <PoemCard />
        </div>
      </div>
    );
  }
}

export default IanTaylor;