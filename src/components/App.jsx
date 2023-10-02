import { useState } from 'react';
import VariantFeedback from './VariantFeedback/VariantFeedback';
import Statistics from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = state => {
    switch (state) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100) || 0;
  };

  const positivePercentage = countPositiveFeedbackPercentage();

  const variants = Object.keys({ good, neutral, bad });
  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section title="Please leave feedback">
        <VariantFeedback onLeaveFeedback={leaveFeedback} options={variants} />
      </Section>

      <Section title="Statistics">
        {totalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
