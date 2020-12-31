import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";

import { WelcomePage } from "./components/WelcomePage";
import { CurrentQuestion } from "./components/CurrentQuestion";
import { Summary } from "./components/Summary";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <WelcomePage />
      <CurrentQuestion />
      <Summary />
    </Provider>
  );
};

/*
const [quizScore, setQuizScore] = useState(0);

  const answers = useSelector(state => state.quiz.answers);
  console.log(answers);

  useEffect(() => {
    calculateQuizScore();
  }, [answers]);

  const calculateQuizScore = () => {
    answers.map(item => {
      if (item.isCorrect) {
        setQuizScore(quizScore + 100);
      } else {
        if (quizScore <= 0) {
          setQuizScore(0);
        } else {
          setQuizScore(quizScore - 100);
        }
      }
    });
  }; */
