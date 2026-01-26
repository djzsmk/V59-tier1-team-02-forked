import questions  from "../data/flashcards.js";
import { roles }  from "../data/roles.js";
import { useParams } from "react-router-dom";
import { useState } from "react";


export default function Questions() {
  const { roleId } = useParams();
  const roleExists = roles.find(function(role) {
    return roleId === role.id;
  })

  let roleLabel = null;
  if (roleExists) {
    roleLabel = roleExists.label;
  }

  const flashcardQuestions = questions.find(function(question) {
    if (question.role === roleLabel) {
      return question.flashcards;
    }
  });

  console.log(flashcardQuestions);

  const [currentQuestionId, setCurrentQuestionId] = useState(
    flashcardQuestions.flashcards[0].id
  );



  // const htmlOutput = flashcardQuestions.flashcards.map(function(card) {
  //   return `
  //     <div>
  //           <section class="question-title">${card.question}</section>
  //           <section class="question-choices">
  //           <div>${card.options.A}</div>
  //           <div>${card.options.B}</div>
  //           <div>${card.options.C}</div>
  //           <div>${card.options.D}</div>
  //           </section>
  //     </div>
  //   `
  // }).join("");
  let key = 0;
  return (
    <>
      <h1>Questions Page</h1>
      <section className="question-section">
          {flashcardQuestions.flashcards[key].map(function(card) {
            return (
              <div>
                    <section class="question-title">{card.question}</section>
                    <section class="question-choices">
                    <div>{card.options.A}</div>
                    <div>{card.options.B}</div>
                    <div>{card.options.C}</div>
                    <div>{card.options.D}</div>
                    </section>
              </div>
            )
          })}
      </section>
    </>
  );
}
