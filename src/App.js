import React, { Component } from 'react'
import './App.css'
import { Header } from './layout/Header.js'
import { Hero } from './layout/Hero.js'
import {Footer} from './layout/Footer.js'

const list = [
  {
    title: 'React ',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux ',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list,
    }
    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter(item => item.objectID !== id )
    this.setState({list:updatedList})
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Footer />
      </div>
      
    )
  }
}

export default App
