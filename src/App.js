"use client";
import { useState } from "react";
import Sound from "./music/mixkit-game-click-1114.wav";
import Sound from "./music/pick-92276.mp3";

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
  // ??????????????????????????????????????
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
function Square({ value, onSquareClick }) {
  return (
    <button className="table" onClick={onSquareClick}>
      {value}
    </button>
  );
}
// .......... play Audio
// play music
function Play(){
  new Audio(Sound).play()
}
// ********************************************** Bord

function Board({ xIsNext, squares, onPlay, onReset }) {
  const [scoreO, setScoreO] = useState(0);
  const [scoreX, setScoreX] = useState(0);
  const [turn, setTurn] = useState("X");
  // play music
  // function Play(){
  //   new Audio(sound).play()
  // }
  // ............................ XInput
  function handleClick(i) {
    // let xOPlay;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
      // xOPlay = nextSquares[i];
    } else {
      nextSquares[i] = "O";
      // xOPlay = nextSquares[i];
    }
    // setXInput(nextSquares);
    // setSquares(XInput);
    // onPlay(nextSquares[i]);
    onPlay(nextSquares);
    setTurn(nextSquares[i]);
    if (Lineswinner(squares) || squares[i]) {
      rondwinner();
      onReset();
      setTurn("X");
      return;
    }
  }
  // .......................... jh
  function Jh({ turn }) {
    if (turn == "X") {
      return <span className="playerCircle rondeplayerx"></span>;
    } else {
      return <span className="playerCircle  rondeplayero"></span>;
    }
  }
  // ........................................ rondwinner
  function rondwinner() {
    const Winner = Lineswinner(squares);
    console.log(Winner);
    if (Winner) {
      // turn = "Winner X" + Winner;
      if (Winner == "X") {
        setScoreX(scoreX + 1);
      } else {
        setScoreO(scoreO + 1);
      }
    }
    // else {
    //   status = "Winner" + "__";

    //   status = `Next player :  + ${XInput ? XName + "(X)" : OName + "(O)"}`;
    // }
  }
  // ........................................ winner
  // const winner = calculateWinner(squares);
  // ********** !!!!!!!!!!!!!!!!!
  // const winner = Lineswinner(squares);

  // let status;
  // if (winner) {
  //   status = "Winner: " + winner;
  // } else {
  //   status = "Next player: " + (xIsNext ? "X" : "O");
  // }
  // ********** !!!!!!!!!!!!!!!

  // ???????????????????????????????
  //  else if (xIsNext) {
  //   status = "Next player: X";
  // } else {
  //   status = "Next player: O";
  // }

  // ............................. rondWinner
  // function rondWinner() {}
  //
  //   // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  ???????
  //   // ............................ namePlayer
  // function namePlayer(players, XName, OName) {
  //   if (xIsNext) {
  //     XName = players.x;
  //   } else {
  //     OName = players.o;
  //   }
  // }
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
  // ___________________________________________________return
  return (
    <>
      <div>
        {/*start babel */}
        <section className="wrapper">
          {/* music */}
          {/* <audio className="audio" controls="controls" autoplay>
            <source src="music/mixkit-game-click-1114.wav" type="audio/ogg" />
            <source src="music/pick-92276.mp3" type="audio/mp3" />
          </audio> */}
<div className="App">
  {/* <button onClick={()=>{}}>play sound</button> */}
  <button onClick={Play}>play sound</button>

</div>
          {/* ballon */}
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
        <div className="container board-flex ">
          <div className="information">
            {/* .......... 1 */}
            <div>
              {/* 1 a*/}
              <div className=" player">
                <p className="Next-player ">Next player is : {turn}</p>
                {/* <span className="playerCircle" ></span> */}
                <Jh turn={turn}></Jh>
              </div>
              {/* 1 b */}
              <div className="row-info">
                <div className="winplayer">Number of wins X : {scoreX}</div>
                <div className="winplayer">Number of wins O : {scoreO}</div>
              </div>
            </div>

            {/* ............ 2 */}
          </div>

          {/* ........................................... board */}
          <div className=" board ">
            {/* 1 */}
            <div className="row m-t">
              <Square
                value={squares[0]}
                onSquareClick={() => {
                  handleClick(0);
                }}
              />
              <Square
                value={squares[1]}
                onSquareClick={() => {
                  handleClick(1);
                }}
              />
              <Square
                value={squares[2]}
                onSquareClick={() => {
                  handleClick(2);
                }}
              />
            </div>
            {/* 2 */}
            <div className="row">
              <Square
                value={squares[3]}
                onSquareClick={() => {
                  handleClick(3);
                }}
              />
              <Square
                value={squares[4]}
                onSquareClick={() => {
                  handleClick(4);
                }}
              />
              <Square
                value={squares[5]}
                onSquareClick={() => {
                  handleClick(5);
                }}
              />
            </div>
            {/* 3 */}
            <div className="m-b row">
              <Square
                value={squares[6]}
                onSquareClick={() => {
                  handleClick(6);
                }}
              />
              <Square
                value={squares[7]}
                onSquareClick={() => {
                  handleClick(7);
                }}
              />
              <Square
                value={squares[8]}
                onSquareClick={() => {
                  handleClick(8);
                }}
              />
            </div>
            {/* <Lineswinner /> */}
          </div>
        </div>
        {/* ... end */}
      </div>
    </>
  );
}
// ********************************* Lineswinner Squars
function Lineswinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

//************************************************ Game
export default function Game() {
  // const [isStarted, setIsStarted] = useState(false);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  // ............................... handlePlay
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function onReset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
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

          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
            onReset={onReset}
          />
          {/* <Lineswinner /> */}
        </div>
      </div>
    </>
  );
}

// export default Game();
