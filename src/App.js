import { CallMerge } from '@material-ui/icons';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Redium from 'radium'
import { lightGreen } from '@material-ui/core/colors';

class App extends Component {
  state = {
    persons: [
      { id:'aadsd',name: "NaveenKumar", age: 20 },
      { id:'wrqss',name: "Vel", age: 21 },
      { id:'bbdfd',name: "Murugan", age: 22 },
    ],
    otherState: "Some thing",
    showPersons: false
  }



  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
   
    this.setState({  persons : persons  });
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
    persons.splice(personIndex,1)
    this.setState({ persons : persons})
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      border: '1px solid blue',
      padding: '10px',
      font: 'inherit',
      ':hover':{
        backgroundColor:'lightGreen',
        color:'black'
      }
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person,index)=>{
              return <Person
              click={() => this.deletePersonHandler(index)}
              key={person.id} 
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event,person.id)}
              />
            })
          }
        </div>
      )
      style.backgroundColor = "red"
      style[':hover']= {
        backgroundColor:'salmon',
        color:'black'
      }

    }
    let classes=[];
    
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }
    
    return (
      <div className="App">
        <h2>Hello World!!!!!</h2>
        <p className={classes.join(' ')}>It working now!!!!</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Name</button>
        {persons}
      </div>
    )
  }


}

export default Redium(App)

