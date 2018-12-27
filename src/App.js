import React, { Component } from 'react';
import Validation from './ValidationComponent/ValidationComponent'
import Char from './CharComponent/CharComponent'
import './App.css';

class App extends Component {
  state = {
    text: ''
  }

  textLengthCounterHandler = (event) => {
    this.setState({text: event.target.value})
  }

  removeCharHandler = (textIndex) => {
    const text = [...this.state.text]
    console.log({textIndex})
    text.splice(textIndex, 1)
    this.setState({text: text.join('')})

  }

  render() {

    let chars = null
    const textValue = this.state.text.split('') || []

    if (textValue.length > 0) {
      chars = (
        <div>
          {textValue.map((char, index) => {
            return <Char letter={char} key={index} click={() => this.removeCharHandler(index)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <label htmlFor="text">Enter a text</label>
        <p><input type="text" id="text" value={this.state.text} onChange={(event) => this.textLengthCounterHandler(event)}/></p>
        <p>word have {this.state.text.length} characters</p>
        <Validation size={this.state.text.length}/>
        {chars}
      </div>
    );
  }
}

export default App;
