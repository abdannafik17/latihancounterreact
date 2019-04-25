//stateless component

import React, { Component } from 'react'
import './App.css'
import Board from './components/Board'
import Plus from './components/Plus'
import Minus from './components/Minus';

class App extends Component {
  constructor () {
    super()
    this.state = {
      score : 0,
      text : 'Halo'
    }
  }

  plusOne () {
    let { score } = this.state //destructuring
    this.setState({
      score: ++score
    })
  }

  minusOne = () => {
    let { score } = this.state //destructuring
    this.setState({
      score: --score
    })
  }

  updateText (params) {
    this.setState({
      text: params
    })
  }
  //atau
  updateText1 = (element) => {
    this.setState({
      text: element.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Board 
          score = { this.state.score }
        />
        <div className="controller">
          <Minus substract={this.minusOne} />

          <Plus add={this.plusOne.bind(this)}/>          
        </div>
        <h1>{this.state.text}</h1>
        <input type="text"
          placeholder={this.state.text}
          /*onChange={(element) => {
            this.updateText(element.target.value)
            //element dan element.target.value adalah syntax basic dari ajax untuk mendapatkan value dari dirinya sendiri
          }}*/ 
          //atau menggunakan bind
          onChange = {this.updateText1.bind(this)}
        />
      </div>
    )
  }
}

export default App;

/** Catatan :
 * Store -> View -> Action
 * App.js -> Board.js, Plus.js, Minus.js -> Button OnClick
 */
