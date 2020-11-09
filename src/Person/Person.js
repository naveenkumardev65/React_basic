import React from 'react'

const person = (props) => {
    return (
        <div>
            {/* <p>I am Person,my age is {Math.floor(Math.random() *30)}</p> */}
            <p>My name is {props.name},my age is {props.age}</p>
            <p>{props.children}</p>
        </div>
    );
}
export default person
