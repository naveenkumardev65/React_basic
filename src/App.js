import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      { name : "NaveenKumar" , age : 20},
      { name : "Vel" , age : 21},
      { name : "Murugan" , age : 22},
    ],
    otherState: "Some thing"
  }

  

   switchNameHandler = (e) => {
    console.log("clicked")
    
    this.setState({
      persons : [
        { name : "Naveen A" , age : 21},
        { name : "Velan" , age : 21},
        { name : "Vel Murugan" , age : 20},
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h2>Hello World!!!!!</h2>
        <button onClick={this.switchNameHandler}>Toggle Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbie is : Cricket</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
  }
    
  
}

export default App

