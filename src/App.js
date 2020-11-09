import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "NaveenKumar", age: 20 },
      { name: "Vel", age: 21 },
      { name: "Murugan", age: 22 },
    ],
    otherState: "Some thing",
    showPersons: false
  }



  switchNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 21 },
        { name: 'Naveen', age: 22 },
        { name: 'Kumar', age: 20 },
      ]
    })
  }

  ToggleHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  

  render() {
    const style = {
      backgroundColor : 'white',
      border : '1px solid blue',
      padding : '10px',
      font : 'inherit'

    }
    return (
      <div className="App">
        <h2>Hello World!!!!!</h2>
        <button style={style} onClick={this.ToggleHandler}>Toggle Name</button>
        { this.state.showPersons === true ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              clicked={this.switchNameHandler} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}>My Hobbie is : Cricket</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} 
               />
          </div>
          : null
        }

      </div>
    )
  }


}

export default App

