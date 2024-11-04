import React from "react";

interface ScoreSquaresProps {
  scoresList: { Nos: number; Ellos: number }[];
}

const renderSquare = (score: number, index: number) => {
  const baseStyle = "w-6 h-6 m-0.5 flex justify-center items-center";
  const fullSquareStyle = "border-2 border-solid border-white";

  let square;

  if (score === 5) {
    square = (
      <div key={index} className={`${baseStyle} ${fullSquareStyle} relative`} style={{ position: "relative" }}>
        <div
          style={{
            width: "120%", height: "120%",
            position: "absolute",
            top: "25%",
            left: "25%",
            transform: "rotate(45deg)",
            borderLeft: "solid 2px white",
          }}
        />
      </div>
    );
  } else {
    const borderStyle =
      score === 1
        ? "border-b-2"
        : score === 2
          ? " border-b-2 border-r-2"
          : score === 3
            ? " border-b-2 border-r-2 border-l-2"
            : " border-b-2 border-r-2 border-l-2 border-t-2";
    square = <div key={index} className={`${baseStyle} ${borderStyle}`}></div>;
  }

  return square;
};

const ScoreColumn = ({ name, score }: { name: string; score: number }) => {
  const squares = [];
  for (let i = 5; i <= score; i += 5) {
    squares.push(renderSquare(5, i));
  }
  const remainder = score % 5;
  if (remainder > 0) {
    squares.push(renderSquare(remainder, score));
  }

  return (
    <div className="relative flex flex-col items-center mx-4">
      <div className="font-bold mb-2">{name}</div>
      <div className="font-bold mb-2">{score <= 20 ? `${score} Malas` : `${score - 20} Buenas`}</div>
      <div className="flex flex-col gap-4 flex-wrap justify-center items-end">{squares}</div>
    </div>
  );
};

const ScoreSquares = ({ scoresList }: ScoreSquaresProps) => {
  const totalNos = scoresList.reduce((acc, score) => acc + score.Nos, 0);
  const totalEllos = scoresList.reduce((acc, score) => acc + score.Ellos, 0);

  return (
    <div className="mt-4 flex flex-col items-center">
      {Math.max(totalNos, totalEllos) > 20 && <div className="absolute w-[150px] border-t border-white top-[308px]"></div>}
      <div className="flex">
        <ScoreColumn name="Nos" score={totalNos} />
        <ScoreColumn name="Ellos" score={totalEllos} />
      </div>
    </div>
  );
};

export default ScoreSquares;
