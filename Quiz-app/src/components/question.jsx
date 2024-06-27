/* eslint-disable react/prop-types */

const Question = ({ question, onAnswerClick = () => {}, currentQuestion }) => {
  return (
    <div className="question">
      <h2>{`Q${currentQuestion + 1}. ${question.question}`}</h2>
      <ul className="options">
        {question.answerOptions.map((option) => {
          return (
            <li key={option.text}>
              <button onClick={() => onAnswerClick(option.isCorrect)}>
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
