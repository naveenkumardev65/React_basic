import React from 'react'


const userInput = (props) => {
    return (
        <input type="text" onChange={props.clicked}/>
    )
}

export default userInput