import React from 'react'
// import '../Person/Person.css'
import styled from 'styled-components'

const StyleDiv = styled.div`
    width:60%;
    border:1px solid #eee;
    box-shadow:0 2px 3px #ccc;
    padding:10px;
    margin:16px auto;
    text-align:center;

    @media (min-width : 500px){
        width: 460px;
    }
`;

const person = (props) => {

    return (
        // <div className="Person" style={style}>
            <StyleDiv>
                {/* <p>I am Person,my age is {Math.floor(Math.random() *30)}</p> */}
                <p onClick={props.click}>My name is {props.name},my age is {props.age}</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
            </StyleDiv>

        // </div>

    );
}
export default person
