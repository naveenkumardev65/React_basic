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

  

  const switchNameHandler = (e) => {
    console.log("clicked")
    
    setPersonState({
      persons : [
        { name : "Naveen A" , age : 21},
        { name : "Vel" , age : 21},
        { name : "Murugan" , age : 20},
      ]
    })
  }


    return (
      <div className="App">
        <h2>Hello World!!!!!</h2>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbie is : Cricket</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    )
  
}

export default App

