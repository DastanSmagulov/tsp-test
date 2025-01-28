"use client";
import Image from "next/image";
import Square from "../components/Square";
import Header from "../components/Header";
import { useState } from "react";

export default function Home() {
  const [isPlayer, setIsPlayer] = useState(true);
  const [winner, setWinner] = useState("");
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  const calculateWinner = (board: string[]) => {
    if (board[0] === "x" && board[1] === "x" && board[2] === "x") {
      setWinner("x");
    } else if (board[3] === "x" && board[4] === "x" && board[5] === "x") {
      setWinner("x");
    } else if (board[6] === "x" && board[7] === "x" && board[8] === "x") {
      setWinner("x");
    } else if (board[0] === "x" && board[3] === "x" && board[6] === "x") {
      setWinner("x");
    } else if (board[1] === "x" && board[4] === "x" && board[7] === "x") {
      setWinner("x");
    } else if (board[2] === "x" && board[5] === "x" && board[8] === "x") {
      setWinner("x");
    } else if (board[0] === "x" && board[4] === "x" && board[8] === "x") {
      setWinner("x");
    } else if (board[2] === "x" && board[4] === "x" && board[6] === "x") {
      setWinner("x");
    } else if (board[0] === "o" && board[1] === "o" && board[2] === "o") {
      setWinner("o");
    } else if (board[3] === "o" && board[4] === "o" && board[5] === "o") {
      setWinner("o");
    } else if (board[6] === "o" && board[7] === "o" && board[8] === "o") {
      setWinner("o");
    } else if (board[0] === "o" && board[3] === "o" && board[6] === "o") {
      setWinner("o");
    } else if (board[1] === "o" && board[4] === "o" && board[7] === "o") {
      setWinner("o");
    } else if (board[2] === "o" && board[5] === "o" && board[8] === "o") {
      setWinner("o");
    } else if (board[0] === "o" && board[4] === "o" && board[8] === "o") {
      setWinner("o");
    } else if (board[2] === "o" && board[4] === "o" && board[6] === "o") {
      setWinner("o");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Header isPlayer={isPlayer} winner={winner} board={board} />
      <div className="grid grid-cols-3">
        {board?.map((sqr: string, index: number) => {
          return (
            <div key={index}>
              <Square
                board={board}
                setBoard={setBoard}
                index={index}
                isPlayer={isPlayer}
                setIsPlayer={setIsPlayer}
                calculateWinner={calculateWinner}
                winner={winner}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
