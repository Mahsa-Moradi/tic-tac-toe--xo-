"use client";
import { useState } from "react";
// import "./App.css";
import "./page-module.css"
// import styles from "./App.css";

// import React, { useRef, useEffect } from "react";
// import logo from "./logo.svg";

// ******************************************************* Form
// function Form(onstart) {
function Form(value) {
  const [XName, setXName] = useState("");
  const [OName, setOName] = useState("");
  // function handleSubmite(event) {
  //   event.preventDefault();
  //   // onstart({ x: XName, o: OName });
  // }
    return (
      <>
        {/* babel */}
        <section className="wrapper" >
        <div><span className="dot">jbjbb</span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
    </section>
        {/* babel */}
        {/* 1 */}
        {/* <label className={styles.form} onSubmit={handleSubmite}> */}
        <label  className="form">
          <p>Player X:</p>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setXName(e.target.value);
            }}
          />
        </label>
        {/* 2 */}
        <label className="form">
          <p>Player X:</p>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setOName(e.target.value);
            }}
          />
        </label>
      </>
    );
  }

// ******************************************************* Squars

// ******************************************************* winner Squars
// function Lineswinner(Squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (Squares[a] && Squares[a] === Squares[b] && Squares[a] === Squares[c]) {
//       return Squares[a];
//     }
//   }
//   return null;
// }

// ******************************************************* NumberScore
// function playerBox() {
//   function scoreXO(XName, OName) {
//     const Winner = Lineswinner(Squares);
//     const [scoreO, setScoreO] = useState("");
//     const [scoreX, setScoreX] = useState("");
//     let status;
//     if (Winner) {
//       status = "Winner" + Winner;
//       if (Winner == "X") {
//         setScoreX(scoreX + 1);
//       } else {
//         setScoreO(scoreO + 1);
//       }
//     } else {
//       status = "Winner" + "__";

//       status = `Next player :  + ${XInput ? XName + "(X)" : OName + "(O)"}`;
//     }
//   }
//   return (
//     <>
//       {/* form 1  */}
//       <div>
//         <input placeholder="input your name ...">{scoreXO}</input>
//         <label>
//           <input className={styles.nameplayer}></input>
//           <div className={styles.alarm}></div>
//         </label>
//         <p>{}</p>
//       </div>
//       {/* form 2  */}
//       <div>
//         <input placeholder="input your name ...">{scoreXO}</input>
//         <label>
//           <input className={styles.nameplayer}></input>
//           <div className={styles.alarm}></div>
//         </label>
//         <p>{}</p>
//       </div>
//     </>
//   );
// }

// ******************************************************* Bord
// function Bord() {
//   const [XInput, setXInput] = useState(true);
//   const [Squares, setSquares] = useState("");
//   const [NewData, setNewData] = useState(Array[9].fill[null]);
//   const [scoreX, setScoreX] = useState("");
//   const [scoreO, setScoreO] = useState("");
//   const [RondGame, setRondGame] = useState("");
//   // ............................ Squars
//   function Squares(value, onSquareClick) {
//     return (
//       <button type="text" onclick={onSquareClick}>
//         {value}
//       </button>
//     );
//   }
//   // ............................ XInput
//   function handleClick(i) {
//     if (Lineswinner(Squares) || Squares[i]) {
//       return;
//     }
//     const nextSquars = Squares.slice();
//     if (XInput) {
//       nextSquars[i] = "X";
//     } else {
//       nextSquars[i] = "O";
//     }
//     setXInput(nextSquars);
//     setSquares(XInput);
//   }
//   // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  ???????
//   // ............................ namePlayer
//   function namePlayer(players, XName, OName) {
//     if (XInput) {
//       XName = players.x;
//     } else {
//       OName = players.o;

//     }
//   }

//   // ............................ namePlayer

//   // ............................ rondGame
//   function rondGame(Winner) {
//     let rond;
//     if (Winner) {
//       rond = "Rond Game : " + rond + 1;
//     } else {
//       rond = "??";
//     }
//   }
//   // ___________________________________________________________________return
//   return (
//     <>
//       {/* <p>Next plaer:{namePlayer}</p> */}

//       {/* 1 */}
//       <div className={styles.boardRow}>
//         <Squares
//           value={Squares[0]}
//           // onSquareClick={() => {
//           //   handleClick(0);
//           // }}
//         />
//         <Squares
//           value={Squares[1]}
//           // onSquareClick={() => {
//           //   handleClick(1);
//           // }}à
//         />
//         <Squares
//           value={Squares[2]}
//           // onSquareClick={() => {
//           //   handleClick(2);
//           // }}
//         />
//       </div>
//       {/* 2 */}
//       <div className={styles.boardRow}>
//         <Squares
//           value={Squares[3]}
//           // onSquareClick={() => {
//           //   handleClick(3);
//           // }}
//         />
//         <Squares
//           value={Squares[4]}
//           // onSquareClick={() => {
//           //   handleClick(4);
//           // }}
//         />
//         <Squares
//           value={Squares[5]}
//           // onSquareClick={() => {
//           //   handleClick(5);
//           // }}
//         />
//       </div>
//       {/* 3 */}
//       <div className={styles.boardRow}>
//         <Squares
//           value={Squares[6]}
//           // onSquareClick={() => {
//           //   handleClick(6);
//           // }}
//         />
//         <Squares
//           value={Squares[7]}
//           // onSquareClick={() => {
//           //   handleClick(7);
//           // }}
//         />
//         <Squares
//           value={Squares[8]}
//           // onSquareClick={() => {
//           //   handleClick(8);
//           // }}
//         />
//       </div>
//     </>
//   );
// }

// // ******************************************************* Game
function Game() {
  // const [isStarted, setIsStarted] = useState(false);

  return (
    <>
      {/* {!isStarted && <Form />}
      {isStarted && (
        <div className="game">
          <div className="game-board">
            <Bord />
          </div>
        </div>
      )} */}
      {/* ..................................... */}
      <div className="game">
        <div className="game-board">
          <Form />
          heeloo
          {/* <Bord /> */}
        </div>
      </div>
    </>
  );
}

export default Game;
