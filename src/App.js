import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = (props) => {
  
  
    return (
      <div className="App">
        <UserInput />
        <UserOutput name="Murugan"/>
        <UserOutput name="Naveen"/>
        <UserOutput name="Ravin"/>
      </div>
    )
  
}

export default App

