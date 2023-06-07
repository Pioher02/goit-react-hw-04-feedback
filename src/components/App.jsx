import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = nameButton => {
    if (nameButton === 'good') {
      setGood(good + 1);
    } else if (nameButton === 'neutral') {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    const total = good + bad + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round((good / countTotalFeedback()) * 100);
    return positiveFeedback;
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={{ good, bad, neutral }}
        onLeaveFeedback={onLeaveFeedback}
      />
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      ) : (
        'There is no feedback'
      )}
    </Section>
  );
};

export default App;
