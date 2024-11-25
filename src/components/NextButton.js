function NextButton({ dispatch, answer, numQuestion, index }) {
  if (answer === null || index === numQuestion) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      next
    </button>
  );
}

export default NextButton;
