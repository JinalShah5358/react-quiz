function Options({ questions, answer, dispatch }) {
  const hasAnswerd = answer !== null;

  return (
    <div className="options">
      {questions.options.map((option, index) => {
        return (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswerd
                ? index === questions.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            } `}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswerd}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
