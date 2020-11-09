import React from 'react'


const userInput = (props) => {
    return (
        <input type="text" onChange={props.clicked} value={props.name}/>
    )
}

export default userInput