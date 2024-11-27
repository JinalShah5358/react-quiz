function NextButton({ dispatch, numQuestions, index, answer }) {
  console.log(index < numQuestions - 1);
  if (index < numQuestions - 1 && answer !== null) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        next
      </button>
    );
  }
  if (index === numQuestions - 1 && answer !== null) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        finish
      </button>
    );
  }
}

export default NextButton;
