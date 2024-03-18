"use client";
import { useState } from "react";
// import "./App.css";
import "./page-module.css";
// import styles from "./App.css";
// import React, { useRef, useEffect } from "react";
// import logo from "./logo.svg";
// ********************************************* Form
// function Form({ onStart , value}) {
function Form() {
  const [XName, setXName] = useState("");
  const [OName, setOName] = useState("");
  function handleSubmite() {
    // event.preventDefault();
    // onstart({ x: XName, o: OName });
  }
  return (
    <>
      <div className="container">
        {/*start babel */}
        <section className="wrapper">
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
        </section>
        {/*end babel */}
        {/* ............................... */}
        {/* start form */}
        <form className="formlist">
          {/* 1 */}
          {/* <label className={styles.form} onSubmit={handleSubmite}> */}
          <label className="lablelist">
            <p>Player X :</p>
            <input
              type="text"
              value={XName}
              onChange={(e) => {
                setXName(e.target.value);
              }}
            />
          </label>
          {/* 2 */}
          <label className="lablelist">
            <p>Player O :</p>
            <input
              type="text"
              value={OName}
              onChange={(e) => {
                setOName(e.target.value);
              }}
            />
          </label>
          <button className="submit" onSubmit={handleSubmite()}>
            submit
          </button>
        </form>
        {/* end form */}
      </div>
    </>
  );
}

// ******************************************** Squars
function Squares({ value, onSquareClick }) {
  return (
    <button type="text" onclick={onSquareClick}>
      {value}
    </button>
  );
}
// ********************************************** Bord

function Bord({ xIsNext, squares, onPlay }) {
  // ............................ XInput
  function handleClick(i) {
    if (Lineswinner(Squares) || Squares[i]) {
      return;
    }
    const nextSquars = Squares.slice();
    if (xIsNext) {
      nextSquars[i] = "X";
    } else {
      nextSquars[i] = "O";
    }
    // setXInput(nextSquars);
    // setSquares(XInput);
    onPlay(nextSquars);
  }
  //   // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  ???????
  //   // ............................ namePlayer
  function namePlayer(players, XName, OName) {
    if (xIsNext) {
      XName = players.x;
    } else {
      OName = players.o;
    }
  }
  // ******************************************************* NumberScore
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
  //       </div>
  //       {/* form 2  */}
  //       <div>
  //         <input placeholder="input your name ...">{scoreXO}</input>
  //         <label>
  //           <input className={styles.nameplayer}></input>
  //           <div className={styles.alarm}></div>
  //         </label>
  //       </div>
  //     </>
  //   );
  // }
  //   // ............................ rondGame
  // function rondGame(Winner) {
  //   let rond;
  //   if (Winner) {
  //     rond = "Rond Game : " + rond + 1;
  //   } else {
  //     rond = "??";
  //   }
  // }
  // ........................................ winner
  // const winner = calculateWinner(squares);
  const winner = Lineswinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  //___________________________________________________return
  return (
    <>
      <div className="container">
        {/*start babel */}
        <section className="wrapper">
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
          <div>
            <span className="dot">X O</span>
          </div>
        </section>
        {/*end babel */}
        <p>Next plaer:{status}</p>
        {/* <p>Next plaer:{namePlayer}</p> */}
        <div className="column"></div>
        {/* 1 */}
        <div className="board-box row">
          <Squares
            value={Squares[0]}
            onSquareClick={() => {
              handleClick(0);
            }}
          />
          <Squares
            value={Squares[1]}
            onSquareClick={() => {
              handleClick(1);
            }}
          />
          <Squares
            value={Squares[2]}
            onSquareClick={() => {
              handleClick(2);
            }}
          />
        </div>
        {/* 2 */}
        <div className="board-box row">
          <Squares
            value={Squares[3]}
            onSquareClick={() => {
              handleClick(3);
            }}
          />
          <Squares
            value={Squares[4]}
            onSquareClick={() => {
              handleClick(4);
            }}
          />
          <Squares
            value={Squares[5]}
            onSquareClick={() => {
              handleClick(5);
            }}
          />
        </div>
        {/* 3 */}
        <div className="board-box row" b>
          <Squares
            value={Squares[6]}
            onSquareClick={() => {
              handleClick(6);
            }}
          />
          <Squares
            value={Squares[7]}
            onSquareClick={() => {
              handleClick(7);
            }}
          />
          <Squares
            value={Squares[8]}
            onSquareClick={() => {
              handleClick(8);
            }}
          />
        </div>
        <Lineswinner />
      </div>
    </>
  );
}
// ********************************* Lineswinner Squars
function Lineswinner(Squares) {
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
    if (Squares[a] && Squares[a] === Squares[b] && Squares[a] === Squares[c]) {
      return Squares[a];
    }
  }
  return null;
}

//************************************************ Game
function Game() {
  // const [isStarted, setIsStarted] = useState(false);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  return (
    <>
      {/* {!isStarted && <Form />}
      {isStarted && (
        <div className="game">
          <div className="game-board">
          <Bord />
           <Lineswinner/> 
          </div>
        </div>
      )} */}
      {/* ..................................... */}
      <div className="game">
        <div className="game-board">
          {/* <Form /> */}

          <Bord
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
          <Lineswinner />
        </div>
      </div>
    </>
  );
}

export default Game;
