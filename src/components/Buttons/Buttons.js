import React from 'react';
import css from './Buttons.module.css';

export function FeedbackButtons({ variant }) {
  return (
    <div className={css.buttonBox}>
      <button className={css.feedbackBtn} name="good" onClick={variant}>
        Good
      </button>
      <button className={css.feedbackBtn} name="neutral" onClick={variant}>
        Neutral
      </button>
      <button className={css.feedbackBtn} name="bad" onClick={variant}>
        Bad
      </button>
    </div>
  );
}

export default FeedbackButtons;
