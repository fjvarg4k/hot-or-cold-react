import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './guess-status';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      feedback: 'Make your guess',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = "You're ice cold";
    } else if (difference >= 30) {
      feedback = "You're cold";
    } else if (difference >= 10) {
      feedback = "You're warm";
    } else if (difference >= 1) {
      feedback = "You're hot";
    } else {
      feedback = "You've got the right answer";
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    const { feedback, guesses } = this.state;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection
            guesses={guesses}
          />
        </main>
      </div>
    );
  }
}
