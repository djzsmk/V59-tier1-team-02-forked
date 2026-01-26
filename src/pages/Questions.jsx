import questions from "../data/flashcards.js";
import { roles } from "../data/roles.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Questions() {
  const { roleId } = useParams();

  // find role label
  const roleExists = roles.find(function (role) {
    return role.id === roleId;
  });

  if (!roleExists) {
    return <h1>Role not found</h1>;
  }

  const roleLabel = roleExists.label;

  // find questions for role
  const roleQuestions = questions.find(function (q) {
    return q.role === roleLabel;
  });

  if (!roleQuestions) {
    return <h1>No questions available</h1>;
  }

  const flashcards = roleQuestions.flashcards;

  // 👇 use INDEX, not ID
  const [currentIndex, setCurrentIndex] = useState(0);

  // reset when role changes
  useEffect(function () {
    setCurrentIndex(0);
  }, [roleId]);

  const currentQuestion = flashcards[currentIndex];

  function goToNextQuestion() {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    else {
      console.log("No more questions...");
    }
  }

  return (
    <>
      <h1>{roleLabel} Questions</h1>

      <section className="question-section">
        <div>
          <section className="question-title">
            Question {currentIndex + 1}: {currentQuestion.question}
          </section>

          <section className="question-choices">
            <div>A: {currentQuestion.options.A}</div>
            <div>B: {currentQuestion.options.B}</div>
            <div>C: {currentQuestion.options.C}</div>
            <div>D: {currentQuestion.options.D}</div>
          </section>
        </div>
      </section>

      <button onClick={goToNextQuestion}>
        Next
      </button>
    </>
  );
}
