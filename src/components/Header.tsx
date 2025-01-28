import { FC } from "react";

interface HeaderProps {
  isPlayer: boolean;
  winner: string;
  board: string[];
}

const Header: FC<HeaderProps> = ({ isPlayer, winner, board }) => {
  let lastMove = true;
  board.map((sqr) => {
    if (!sqr) {
      lastMove = false;
    }
  });
  return (
    <div className="text-black flex flex-col items-center justify-center mb-10 mt-4">
      <h1>{isPlayer ? "Ход крестиков" : "Ход ноликов"}</h1>
      {lastMove && !winner ? (
        <h2>Победила дружба</h2>
      ) : (
        <h2>Победили {winner}</h2>
      )}
    </div>
  );
};

export default Header;
