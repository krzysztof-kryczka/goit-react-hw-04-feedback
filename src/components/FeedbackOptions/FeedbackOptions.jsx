import React from 'react';
import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;

  return (
    <div className={css.feedback__container}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
          className={css.feedback__btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
