import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const nameButtons = Object.keys(options);
  return (
    <ul style={{ display: 'flex', padding: 0 }}>
      {nameButtons.map((nameButton, index) => (
        <li key={index} style={{ listStyleType: 'none', margin: '5px' }}>
          <button
            type="button"
            onClick={() => {
              onLeaveFeedback(nameButton);
            }}
            style={{ textTransform: 'capitalize' }}
          >
            {nameButton}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.object.isRequired,
  onLeaveFeedback: propTypes.func,
};

export default FeedbackOptions;
