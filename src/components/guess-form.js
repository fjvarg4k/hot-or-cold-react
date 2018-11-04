import React from 'react';

export default class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          ref={input => (this.input = input)}
          required
        />
        <button
          type="submit"
          name="submitGuess"
          id="guessButton"
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}
