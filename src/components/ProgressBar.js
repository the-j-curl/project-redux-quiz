import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const ProgressBar = () => {
  const [quizScore, setQuizScore] = useState(0);

  const answers = useSelector(state => state.quiz.answers);

  useEffect(() => {
    calculateQuizScore();
  }, [answers]);

  const calculateQuizScore = () => {
    answers.map(item => {
      if (item.isCorrect) {
        return setQuizScore(quizScore + 100);
      } else {
        if (quizScore <= 0) {
          return setQuizScore(0);
        } else {
          return setQuizScore(quizScore - 100);
        }
      }
    });
  };

  const question = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const questionArray = useSelector(state => state.quiz.questions);

  return (
    <p>
      Question: {question.id} of {questionArray.length} | Score:
      <span> {quizScore}</span> points
    </p>
  );
};
