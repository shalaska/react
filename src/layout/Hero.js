import React from 'react'
import './Hero.css'
import FitPerson from '../assets/banner-1.jpg'

export class Hero extends React.Component {
  render() {
    return (
      <div>
        <img className="hero-image" src={FitPerson} /> 
        <div className="hero-text">
          <h1>Welcome to fit friends</h1>
        </div>
      </div>
    )
  }
}