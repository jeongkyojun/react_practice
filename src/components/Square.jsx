import React from "react";

// class Square extends React.Component{
//   render() {
//     // Board 에서 받은 값을 props에서 불러온다.
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     )
//   }
// }

// class에서는 render를 쓰지만, function에서는 return만 해주면 된다.
// onClick을 표시할때도 arrow function이 아닌 {}을 사용하였다.
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;