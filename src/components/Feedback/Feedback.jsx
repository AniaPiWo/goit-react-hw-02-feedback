import React, { Component } from 'react';
import styles from './Feedback.module.css';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    const positivePercentage = (good / totalFeedback) * 100 || 0;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <div className={styles.buttons}>
          <button onClick={this.handleGood}>Good</button>
          <button onClick={this.handleNeutral}>Neutral</button>
          <button onClick={this.handleBad}>Bad</button>
        </div>
        <div className={styles.stats}>
          <h3>Statistics</h3>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positivePercentage.toFixed(2)}%</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
