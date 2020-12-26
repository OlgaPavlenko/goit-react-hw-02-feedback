import Section from './components/Feedback/Section';
import React, { Component } from 'react';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good / total) * 100);
  };

  onLeaveFeedback = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const options = [
      { id: 1, name: 'Good', type: 'good' },
      { id: 2, name: 'Neutral', type: 'neutral' },
      { id: 3, name: 'Bad', type: 'bad' },
    ];
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage()}
            onChanged={this.feedbackChanged}
          />
        </Section>
      </div>
    );
  }
}

export default App;
