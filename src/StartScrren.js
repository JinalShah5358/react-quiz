function StartScrren({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numQuestions} Question to test your react mastery</h3>
      <button className="btn btn-ui">Let's go</button>
    </div>
  );
}

export default StartScrren;
