import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person'




class App extends Component {
  state = {
    persons: [
      { id: 'aadsd', name: "NaveenKumar", age: 20 },
      { id: 'wrqss', name: "Vel", age: 21 },
      { id: 'bbdfd', name: "Murugan", age: 22 },
    ],
    otherState: "Some thing",
    showPersons: false
  }



  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    // console.log(this.state.persons.length)
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {

    let persons = null
    let btnClasses = [classes.Button]
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      )

      btnClasses.push(classes.Red)
    }
    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (

      <div className={classes.App}>
        <h2>Hello World!!!!!</h2>
        <p className={assignedClasses.join(' ')}>It working now!!!!</p>
        <button className={btnClasses.join(' ')} onClick={this.togglePersonHandler}>Toggle Name</button>
        {persons}
      </div>


    )
  }


}

export default App

