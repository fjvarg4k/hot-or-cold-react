import React from 'react';

export default function Feedback(props) {
  const key = props.guessCount;

  return (
    <h2
      key={key}
      id="feedback"
    >
      {props.feedback}
    </h2>
  );
}
