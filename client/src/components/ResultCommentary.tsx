import React from "react";

interface IProps {
  quantity: number;
}

export default function ResultCommentary({ quantity }: IProps) {
  const commentary = (num: number) => {
    if (num > 100) {
      return "It could be any of these...";
    } else if (num > 50) {
      return "Maybe one of these...?";
    } else if (num > 2) {
      return "We're definitely close.";
    } else if (num === 2) {
      return "It's fifty-fifty out of these two.";
    } else if (num === 1) {
      return "This is the one!";
    } else if (num === 0) {
      return "Looks like we've run out of words!";
    }
  };
  return (
    <div className={"instruction top-bottom-pad-16"}>
      {commentary(quantity)}
    </div>
  );
}
