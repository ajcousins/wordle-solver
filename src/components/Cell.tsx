import React from "react";

export default function Cell({ char }: { char: string }) {
  return <div className="board-container__cell">{char}</div>;
}
