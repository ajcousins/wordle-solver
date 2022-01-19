import React from 'react';
import Header from './Header';
import BoardContainer from './BoardContainer';
import GameKeyboard from './GameKeyboard'

export default function Canvas() {
  return <div className="canvas">
      <Header />
      <BoardContainer />
      <GameKeyboard />
  </div>;
}
