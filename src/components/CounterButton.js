import React from 'react';
// import {increaseCounter, decreaseCounter} from "../actions";
// import { connect } from 'react-redux';


function CounterButton(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            if(props.increase){
              // debugger;
              props.increase();
            }
          }
        }>Increase Counter By One</button>
        <button onClick={
          ()=>{
            if(props.decrease){
              props.decrease();
            }
          }
        }>Decrease Counter By One</button>
      </div>
  );
}

export default CounterButton;

// I want to change data
// function mapDispatchToProps(dispatch){
//   return {
//     increase:function(user){
//       var action = increaseCounter();
//       dispatch(action);
//     },
//     decrease:function(user){
//       var action = decreaseCounter();
//       dispatch(action);
//     }
//   }
//   }

  // if you dont need mapStateToProps,
  // you put null as a placeholder
  //
// export default connect(null,mapDispatchToProps)(CounterButton);

