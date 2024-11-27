function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const result = (points / maxPoints) * 100;
  let emoji;
  if (result === 100) emoji = "🥇";
  if (result >= 80 && result < 100) emoji = "🥈";
  if (result >= 50 && result < 80) emoji = "🥉";
  if (result >= 0 && result < 50) emoji = "🏅";
  if (result === 0) emoji = "😔";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You Scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(result)}%)
      </p>
      <p className="highscore">(highscore : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
