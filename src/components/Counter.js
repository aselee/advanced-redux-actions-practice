import React from 'react';
// import { connect } from 'react-redux';


function Counter(props) {
  return (
      <div>
        Counter: {props.count}
      </div>
  );
}
export default Counter;

// function map(state) {
//   return (
//     count:state.currentCount
//   )
// }
// export default connect(map)(Counter);

