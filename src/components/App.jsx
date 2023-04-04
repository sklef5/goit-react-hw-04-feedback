import React, { useState } from 'react';

import FeedbackOption from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import { Container, MainTitle, BlockTitle } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = e => {
    const value = e.target.innerText;
    switch (value) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
        break;
      default:
        return 'something went wrong';
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  const option = Object.keys({ good, neutral, bad });

  return (
    <Container>
      <MainTitle>Please, leave feedback</MainTitle>
      <FeedbackOption option={option} onLeaveFeedback={leaveFeedback} />
      <BlockTitle>Statistics</BlockTitle>
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message=":( There is no feedback" />
      )}
    </Container>
  );
};
