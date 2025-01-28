import { FC } from "react";

interface SquareProps {
  board: string[];
  index: number;
  isPlayer: boolean;
  setIsPlayer: (arg0: boolean) => void;
  setBoard: (arg0: string[]) => void;
  calculateWinner: (arg0: string[]) => void;
  winner: string;
}

const Square: FC<SquareProps> = ({
  board,
  index,
  isPlayer,
  setIsPlayer,
  setBoard,
  calculateWinner,
  winner,
}) => {
  const handleClick = () => {
    if (board[index] === "") {
      setIsPlayer(!isPlayer);
    }
    const boardCopy: string[] = [];
    if (board[index] === "") {
      isPlayer
        ? board.map((sqr: string, i: number) => {
            i == index ? boardCopy.push("x") : boardCopy.push(sqr);
          })
        : board.map((sqr: string, i: number) => {
            i == index ? boardCopy.push("o") : boardCopy.push(sqr);
          });
      setBoard(boardCopy);
    }
    calculateWinner(boardCopy);
  };

  return (
    <button
      className="bg-black text-white w-40 h-40 flex justify-center items-center text-2xl border border-white border-1"
      onClick={handleClick}
      disabled={winner ? true : false}
    >
      {board[index]}
    </button>
  );
};

export default Square;
