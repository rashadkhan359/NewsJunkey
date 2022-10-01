import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'

export default class  extends Component {
  name = "Rashad"
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}
