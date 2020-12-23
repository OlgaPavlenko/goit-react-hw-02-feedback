import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>

      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <ul>
          <li>
            <span>Good:</span>
            <span>{good}</span>
          </li>
          <li>
            <span>Neutral:</span>
            <span>{neutral}</span>
          </li>
          <li>
            <span>Bad:</span>
            <span>{bad}</span>
          </li>
          <li>
            <span>Total:</span>
            <span>{total}</span>
          </li>
          <li>
            <span>Positive feedback:</span>
            <span>{positivePercentage} %</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
