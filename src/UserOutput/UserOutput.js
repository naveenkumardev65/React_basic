import React from 'react'


const userOutput = (props) => {
    const style = {
        width : '50%',
        marign : '16px auto',
        border : '1px solid #eee',
        boxShadow : '0 2px 3px #ccc',
        padding : '10px',
        textAlign : 'center'
    }
    return (
        <div style={style}>
            <p>I am {props.name}</p>
            <p>I am Web developer</p>
        </div>

    )
}

export default userOutput