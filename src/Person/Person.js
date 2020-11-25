import React from 'react'
import classes from '../Person/Person.module.css'

const person = (props) => {

    return (
        <div className={classes.Person}>
            
                {/* <p>I am Person,my age is {Math.floor(Math.random() *30)}</p> */}
                <p onClick={props.click}>My name is {props.name},my age is {props.age}</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
        </div>

    );
}
export default person
