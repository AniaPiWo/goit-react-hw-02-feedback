import React from 'react';
import styles from './Statistics.module.css';
import Section from 'components/Section/Section';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Section title="Statistics" />
      <div className={styles.stats}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage.toFixed(2)}%</p>
      </div>
    </>
  );
};

export default Statistics;
