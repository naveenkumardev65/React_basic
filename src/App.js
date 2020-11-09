import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

const App = (props) => {
  const [name,setName] = useState({
      userName : "Murugan"
    })

  const switchNameHandler = (event) => {
    setName({
      persons : [
        {name : event.target.value},
        {name : event.target.value},
        {name : event.target.value}
      ]
    })
  }
  
    return (
      <div className="App">
        <UserInput name={name.userName} clicked={switchNameHandler} />
        {/* <button onClick={switchNameHandler}>Switch Name</button> */}
        <UserOutput  name={name.userName}/>
        <UserOutput name={name.userName}/>
        <UserOutput name={name.userName}/>
      </div>
    )
  
}

export default App

