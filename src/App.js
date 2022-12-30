import { useEffect, useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [selectedTag, setSelectTag] = useState(["All"]);
  const [isClickedAnswer, setIsClickedAnswer] = useState(false);

  const [quizList, setQuizList] = useState([]);

  const reset = () => {
    const list = [];

    Object.values(data).forEach((item) => list.push(...item));

    list.sort(() => Math.random() - 0.5);

    setQuizList(() => list);
  };

  const setListByTag = () => {
    if (selectedTag.includes("All")) return reset();

    const list = [];

    Object.entries(data)
      .filter((item) => {
        return selectedTag.includes(item[0]);
      })
      .forEach((item) => list.push(...item[1]));

    list.sort(() => Math.random() - 0.5);

    setQuizList(() => list);
  };

  const handleSelectTag = (tag) => {
    if (tag === "All") return setSelectTag(() => ["All"]);
    const copyArr = [...selectedTag];

    if (selectedTag.includes(tag)) {
      const filterArr = copyArr.filter((item) => item !== tag);

      filterArr.length
        ? setSelectTag(() => filterArr)
        : setSelectTag(() => ["All"]);

      return;
    }

    copyArr.push(tag);

    setSelectTag(() =>
      copyArr.filter((item) => item !== "All").sort((a, b) => a - b)
    );
  };

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    setListByTag();
  }, [selectedTag]);

  const handleClickNext = () => {
    setIsClickedAnswer(false);

    const copyList = [...quizList];
    const popValue = copyList.pop();
    copyList.unshift(popValue);

    setQuizList(() => copyList);
  };

  const handleClickPrev = () => {
    setIsClickedAnswer(false);

    const copyList = [...quizList];
    const shiftValue = copyList.shift();
    copyList.push(shiftValue);

    setQuizList(() => copyList);
  };

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-wrapper">
          <div className="All-tags-container">
            {["All", ...Object.keys(data)].map((item) => (
              <span
                className={
                  selectedTag.includes(item)
                    ? "App-tag App-selected-tag"
                    : "App-tag"
                }
                onClick={() => handleSelectTag(item)}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <h2 className="App-header">Quiz!</h2>
          {quizList.length && (
            <div className="App-quiz-container">
              <div className="App-quiz-wrapper">
                <div className="App-quiz-question" key={quizList[quizList.length - 1].quiz}>
                  {quizList[quizList.length - 1].quiz}
                </div>
                <div className="App-quiz-answer">
                  {isClickedAnswer && quizList[quizList.length - 1].answer}
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
                {quizList[quizList.length - 1].answer && (
                  <button
                    className="App-button-answer"
                    onClick={() => setIsClickedAnswer(!isClickedAnswer)}
                  >
                    Answer
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
