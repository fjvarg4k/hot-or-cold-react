import React from 'react';

export default function RestartGame(props) {
  return (
    <a
      href="#feedback"
      onClick={() => props.onRestartGame()}
    >
      Start a new game
    </a>
  );
}
