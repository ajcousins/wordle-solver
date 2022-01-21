import React from "react";

export default function Instruction({ gameState }: { gameState: number }) {
  const text = () => {
    switch (gameState) {
      case 0:
        return "Fill in all the cells below with the same letters from your Wordle.";
      case 1:
        return "Change the colour of each cell to match the cell colours in the game by clicking on them.";
      default:
        return "Error";
    }
  };

  return <div className={"instruction"}>{text()}</div>;
}
