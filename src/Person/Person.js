import React from 'react'
import '../Person/Person.css'

const person = (props) => {
    return (
        <div className="Person">
            {/* <p>I am Person,my age is {Math.floor(Math.random() *30)}</p> */}
            <p>My name is {props.name},my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.clicked} value={props.name}/>
        </div>
    );
}
export default person
