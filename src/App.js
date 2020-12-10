import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

import OutputValue from './OutputValue/OutputValue';
import InputValue from './InputValue/InputValue';
import TwoWayBindingInput from './TwoWayBindingInput/TwoWayBindingInput'
import Validate from './Validate/Validate'
import Char from './Char/Char';

class App extends Component {
  constructor () {
    super();
    this.state = {
        person : [
          { name : "nikka", age : 28  },
          { name : "Chinda", age : 28  },
          { name : "Bikker", age : 28  },
        ],
        twowayBinding : [
          {id: "ffd", name: "Harnav", age: 8},
          {id: "ssds", name: "Harshan", age: 4},
          {id: "sdfsf", name: "Kamal", age: 35}
        ],
        username : "Sukha"
      }
  }

  UpdateNamesHandler = () => {
    this.setState ({
      person : [
        { name : "Jialu", age : 28  },
        { name : "Pinder", age : 28  },
        { name : "Sukha", age : 28  },
      ]
    })
  }

  changeNameHndler = (event) => {
    return (
      this.setState({
        username :  event.target.value
      })
    )
  }

  removePersonHandler = (key) => {
      const person = [...this.state.person]
      person.splice(key, 1);
      this.setState({
        person: person
      })
  }

  twoWayBindingHandler = (event, id) => {
    const getIndex = this.state.twowayBinding.findIndex(p => {
      return p.id === id
    })

    const twoWay = {...this.state.twowayBinding[getIndex]}

    twoWay.name = event.target.value;

    const twoWayMain = [...this.state.twowayBinding];
    twoWayMain[getIndex] = twoWay

    this.setState({twowayBinding : twoWayMain})

  }

  removeCharHandler = (index) => {
    const text = this.state.username.split('');
    text.splice(index, 1)
    const updatedText = text.join('');
    this.setState({
      username : updatedText
    })
  }

  render () {
    return (
      <div className="App">
        <button onClick={this.UpdateNamesHandler}>Update Names</button>
        {this.state.person.map((val, key) => {
          return (
            <div>
              <Person name={val.name} click={() => this.removePersonHandler(key)}/>
            </div>
          );
        })}
        <hr/>
          <h2>Twoway binding in List</h2>
          {this.state.twowayBinding.map((val, key) => {
            return (
              <div>
                <p id={val.id}>{val.name}</p>
                <TwoWayBindingInput 
                  defaultVal={val.name} 
                  onchange = {(event) => this.twoWayBindingHandler(event, val.id)}/>
              </div>
            )
          })}
        <hr/>
        <p>

        <OutputValue name="kamal"/>
        <OutputValue name="Pinder"/>
        <OutputValue name={this.state.username}/>
        <InputValue change = {this.changeNameHndler} currentVal = {this.state.username}/>
        </p>

        <hr/>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
          <p>&nbsp;</p>
          <p>&nbsp;</p>

          {this.state.username.split('').map((val, key) => <Char value={val} clicked={() => this.removeCharHandler(key)}/>)}
          <Validate charLength={this.state.username.length}/>
      </div>
    );
  }
}

export default App;
