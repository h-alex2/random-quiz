import { useEffect, useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [quizListQueue, setQuizListQueue] = useState([]);
  const [quizListStack, setQuizListStack] = useState([]);
  const [isClickedAnswer, setIsClickedAnswer] = useState(false);

  const retry = () => {
    const list = [];

    Object.values(data).forEach((item) => list.push(...item));

    list.sort(() => Math.random() - 0.5);

    setQuizListQueue(() => list);
    setQuizListStack(() => list);
  };

  useEffect(() => {
    setIsClickedAnswer(false);
    if (quizListQueue.length && quizListStack.length) return;

    retry();
  }, [quizListQueue, quizListStack]);

  useEffect(() => {
    retry();
  }, []);

  const enqueue = (val) => {
    setQuizListQueue((prev) => [...prev, val]);
  };

  const dequeue = () => {
    const copyQueue = [...quizListQueue];
    const dequeueValue = copyQueue.pop();

    setQuizListQueue(() => copyQueue);

    return dequeueValue;
  };

  const handleClickNext = () => {
    const dequeueValue = dequeue();
    setQuizListStack((prev) => [...prev, dequeueValue]);
  };

  const handleClickPrev = () => {
    const copyStack = [...quizListStack];
    const popStackValue = copyStack.pop();

    enqueue(popStackValue);
    setQuizListStack(() => copyStack);
  };

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">Quiz!</header>
        {quizListQueue.length && quizListStack.length && (
          <div className="App-quiz-container">
            <div className="App-quiz-wrapper">
              <div key={quizListQueue[quizListQueue.length - 1].quiz}>
                {quizListQueue[quizListQueue.length - 1].quiz}
              </div>
              <div className="App-quiz-answer">
                {isClickedAnswer &&
                  quizListQueue[quizListQueue.length - 1].answer}
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
