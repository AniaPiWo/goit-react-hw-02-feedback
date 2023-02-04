import React from 'react';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={css.statisticsBox}>
      <h2 className={css.statisticsTitle}> Statistics</h2>
      <div>
        <p className={css.statisticsItem}>Good: {good}</p>
        <p className={css.statisticsItem}>Neutral: {neutral}</p>
        <p className={css.statisticsItem}>Bad: {bad}</p>
      </div>
      <p className={css.statisticsItem}>Total: {total}</p>
      <p className={css.statisticsItem}>
        Positive feedback: {positivePercentage} %
      </p>
    </div>
  );
}

export default Statistics;
