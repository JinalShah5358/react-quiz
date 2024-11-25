function Options({ questions }) {
  return (
    <div className="options">
      {questions.options.map((option) => {
        return (
          <button className="btn btn-option" key={option}>
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
