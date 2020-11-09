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

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1)
    this.setState({ persons : persons})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '10px',
      font: 'inherit'
    }
    
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person,index)=>{
              return <Person
              click={() => this.deletePersonHandler(index)}
              key={index} 
              name={person.name}
              age={person.age}
              />
            })
          }
        </div>
      )
    }
    return (
      <div className="App">
        <h2>Hello World!!!!!</h2>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Name</button>
        {persons}
      </div>
    )
  }


}

export default App

