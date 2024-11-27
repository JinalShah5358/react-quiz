function FinishScreen({ points, maxPoints }) {
  const result = (points / maxPoints) * 100;
  return (
    <p className="result">
      You Scored <strong>{points}</strong> out of {maxPoints} (
      {Math.ceil(result)}%)
    </p>
  );
}

export default FinishScreen;
