import { useEffect, useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [quizListDeque, setQuizListDeque] = useState([]);
  const [quizListStack, setQuizListStack] = useState([]);
  const [isClickedAnswer, setIsClickedAnswer] = useState(false);

  const retry = () => {
    const list = [];

    Object.values(data).forEach((item) => list.push(...item));

    list.sort(() => Math.random() - 0.5);

    setQuizListDeque(() => list);
    setQuizListStack(() => list.slice(0, -1));
  };

  useEffect(() => {
    retry();
  }, []);

  useEffect(() => {
    if (quizListStack.length) return;

    retry();
  }, [quizListStack]);

  const arrUnshift = (val) => {
    setQuizListDeque((prev) => [val, ...prev]);
  };

  const arrPop = () => {
    const copyArr = [...quizListDeque];
    const dequeueValue = copyArr.pop();

    setQuizListDeque(() => copyArr);

    return dequeueValue;
  };

  const handleClickNext = () => {
    const popValue = arrPop();

    arrUnshift(popValue);

    setQuizListStack((prev) => [...prev, popValue]);
  };

  const handleClickPrev = () => {
    if (!quizListStack.length) {
      return retry();
    }

    const copyStack = [...quizListStack];
    const popStackValue = copyStack.pop();
    const copyArr = [...quizListDeque, popStackValue];

    setQuizListDeque(() => copyArr);
    setQuizListStack(() => copyStack);
  };

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">Quiz!</header>
        {quizListDeque.length && quizListStack.length && (
          <div className="App-quiz-container">
            <div className="App-quiz-wrapper">
              <div key={quizListDeque[quizListDeque.length - 1].quiz}>
                {quizListDeque[quizListDeque.length - 1].quiz}
              </div>
              <div className="App-quiz-answer">
                {isClickedAnswer &&
                  quizListDeque[quizListDeque.length - 1].answer}
              </div>
            </div>
            <div className="App-button-wrapper">
              <div>
                <button className="App-button" onClick={handleClickPrev}>
                  Prev
                </button>
                <button className="App-button" onClick={handleClickNext}>
                  Next
                </button>
              </div>
              <button
                className="App-button-answer"
                onClick={() => setIsClickedAnswer(true)}
              >
                Answer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
