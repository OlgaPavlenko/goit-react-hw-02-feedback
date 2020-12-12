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
