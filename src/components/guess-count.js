import React from 'react';

export default function GuessCount(props) {
  return (
    <h2 id="guessCount">
      You've made {props.guessCount} guesses
    </h2>
  );
}
