import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = (props) => {

  const [personState,setPersonState] = useState({
    persons : [
          { name : "NaveenKumar" , age : 20},
          { name : "Vel" , age : 21},
          { name : "Murugan" , age : 22},
        ],
        otherState: "Some thing"
  })

  // state = {
  //   persons : [
  //     { name : "NaveenKumar" , age : 20},
  //     { name : "Vel" , age : 21},
  //     { name : "Murugan" , age : 22},
  //   ],
  //   otherState: "Some thing"
  // }

  const nameChangeHandler = (event) =>{
    setPersonState({
      persons : [
        { name : event.target.value , age : 21},
        { name : "Vel" , age : 21},
        { name : "Murugan" , age : 20},
      ]
    })
  }
  

  const switchNameHandler = () => {
    
    
    setPersonState({
      persons : [
        { name : "Naveen A" , age : 21},
        { name : "Vel" , age : 21},
        { name : "Murugan" , age : 20},
      ]
    })
  }

  const style = {
    backgroundColor : 'white',
    padding : '8px',
    border : '1px solid blue',
    font : 'inherit',
    cursor : 'pointer'
  }

    return (
      <div className="App">
        <h2>Hello World!!!!!</h2>
        <button onClick={switchNameHandler} style={style}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} clicked={nameChangeHandler} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbie is : Cricket</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    )
  
}

export default App

