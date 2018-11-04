import React from 'react';
import RestartGame from './restart-game';

export default function Header(props) {
  return (
    <header>
      <RestartGame onRestartGame={() => props.onRestartGame()} />
      <h1>Hot or Cold</h1>
    </header>
  );
}
