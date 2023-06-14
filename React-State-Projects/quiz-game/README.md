# Quiz Game React Component

This is a React component that implements a simple quiz game, where the user answers a series of multiple-choice questions and is given a score at the end based on how many questions they answered correctly.

## Subject Covered

This component covers:

- State management using the `useState` hook
- Effect management using the `useEffect` hook
- Object, array, and function manipulation

## How to Read the Code

The component begins with an array of question objects, each containing an ID, a question, an array of answer options, and the correct answer. 

There are two sub-components: `QuizResults` and `QuizGame`. `QuizResults` displays the user's score and percentage, and `QuizGame` manages the game logic.

`QuizGame` uses several state variables to manage the current question index, selected answer, user score, and quiz completion status. It also uses an effect hook to check if the quiz is completed.

The `handleAnswerSelection` function is called when the user selects an answer option, and the `handleNextQuestion` function is called when the user moves on to the next question or finishes the quiz.

Finally, the component returns a conditional render based on whether the quiz is completed or not.

## Cloning and Installation

To clone or fork this project, go to https://github.com/kingsley-ijomah/React-State-Projects and click the "Code" button. From there, you can download the zip file or clone the repository using Git.

To install the project, run the following commands in your terminal:

```
yarn
yarn dev
```


## Next Steps

To demonstrate that you have learned how this component works, you could try adding a way (button / link) for the user to restart the quiz at the end without having to refresh the browser.

> "Success is not final, failure is not fatal: it is the courage to continue that counts."

As a junior developer, it is easy to get overwhelmed by the vast amount of knowledge and skills required in the field. It is important to remember that every expert was once a beginner and that success in programming comes from perseverance, practice, and a willingness to learn.
