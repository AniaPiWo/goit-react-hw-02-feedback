import React from 'react';
import styles from './FeedbackOptions.module.css';
import Section from 'components/Section/Section';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <>
      <Section title="Please leave feedback" />
      <div className={styles.buttons}>
        <button onClick={onGood}>Good</button>
        <button onClick={onNeutral}>Neutral</button>
        <button onClick={onBad}>Bad</button>
      </div>
    </>
  );
};

export default FeedbackOptions;
