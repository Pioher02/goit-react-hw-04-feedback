const FeedbackOptions = props => {
  const nameButtons = Object.keys(props.options);
  return (
    <ul style={{ display: 'flex', padding: 0 }}>
      {nameButtons.map((nameButton, index) => (
        <li key={index} style={{ listStyleType: 'none', margin: '5px' }}>
          <button
            type="button"
            onClick={() => {
              props.onLeaveFeedback(nameButton);
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

export default FeedbackOptions;
