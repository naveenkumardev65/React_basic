import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = (props) => {
  const [name,setName] = useState({
    persons : [
      {name : 'Vel Murugan'},
      {name : 'Kumar'},
      {name : 'Rajan'}
    ]
  })
  
    return (
      <div className="App">
        <UserInput />
        <UserOutput name={name.persons[0].name}/>
        <UserOutput name={name.persons[1].name}/>
        <UserOutput name={name.persons[2].name}/>
      </div>
    )
  
}

export default App

