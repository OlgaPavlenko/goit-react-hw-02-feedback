import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="group-button">
    {options.map(({ id, name, type }) => (
      <button type="button" key={id} onClick={() => onLeaveFeedback(type)}>
        {name}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
