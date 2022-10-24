import React, { useEffect, useState } from "react";
import Square from "../components/Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("Next player : X");

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setStatus("Winner: " + winner);
    } else {
      setStatus("Next player : " + (xIsNext ? "X" : "O"));
    }
    return () => {};
  }, [xIsNext, squares]);

  const handleClick = (i) => {
    const squareSlice = squares.slice();
    if (calculateWinner(squareSlice) || squareSlice[i]) {
      return;
    }
    squareSlice[i] = xIsNext ? "X" : "O";
    setSquares(squareSlice);
    setXIsNext((prev) => !prev); // 이전값을 사용할 경우 함수형으로 할것
    console.log(xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setStatus("Winner: " + squares[a]);
        return squares[a];
      }
    }
    return null;
  };

  const renderSquare = (i) => {
    return (
      // 두가지 데이터를 보낸다
      // 1. squares[i] 의 값
      // 2. handleClick 이라는 onClick 이벤트리스너
      <Square value={squares[i]} onClick={() => handleClick(i)} />
    );
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

// class Board extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true,
//     };
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext?'X':'O';
//     this.setState({
//       squares: squares,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   renderSquare(i) {
//     return (
//       // 두가지 데이터를 보낸다
//       // 1. squares[i] 의 값
//       // 2. handleClick 이라는 onClick 이벤트리스너
//       <Square
//         value={this.state.squares[i]}
//         onClick={()=>this.handleClick(i)}
//       />
//     );

//   }
//   render() {
//     let status;
//     const winner = calculateWinner(this.state.squares);
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status ="Next player : " + (this.state.xIsNext ? 'X' : 'O');
//     }
//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

export default Board;
