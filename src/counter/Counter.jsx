import React from 'react';
import { connect } from "react-redux";
const Counter = (props) =>{
    return<>

    <button onClick= {()=>{props.increment()}}>Increment</button>
    <h1>{props.inc_counter}</h1>
    <button onClick={() => {props.decrement(); }}>Decrement</button>
    <h1>{props.dec_counter}</h1>

    </>
}

const dispatchToProps = (dispatch) => {
    return {
      increment: () => {
        dispatch({ type: "INCREMENT" });
      },
      decrement: () => {
        dispatch({ type: "DECREMENT" });
      },
    };
  };
const stateToProps = (state) => {
    return { inc_counter: state.incNum.counter, dec_counter: state.decNum.counter };
  };



const returnedFunction = connect(stateToProps, dispatchToProps);

export default returnedFunction(Counter);