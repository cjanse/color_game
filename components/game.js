import { useState, useEffect } from "react";
import AnswerInput from "./AnswerInput";
import Questions from "./Questions"

const randint = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Game = (props) => {

  const [score, setScore] = useState(0);

  const new_question = () => {
    if (score < 10) {
        setScore(score + 1);
    }
  };

  useEffect(new_question, []);

  const guess = (response) => {
    if (score == 1 && response == "yellow") {
      new_question();
    } 
    else if (score == 2 && response == "pink"){
        new_question();
    }
    else if (score == 3 && response == "green"){
        new_question();
    }
    else if (score == 4 && response == "purple"){
        new_question();
    }
    else if (score == 5 && response == "blue"){
        new_question();
    }
    else if (score == 6 && response == "black"){
        new_question();
    }
    else if (score == 7 && response == "yellow"){
        new_question();
    }
    else if (score == 8 && response == "pink"){
        new_question();
    }
    else if (score == 9 && response == "purple"){
        new_question();
    }
    else if (score == 10 && response == "blue"){
        props.onGameover(score);
    }
    else {
      props.onGameover(score);
    }
  };

  return (
    <div className="bg-gray-200">
      <div className="text-4xl mb-2">Question: {score}</div>
      <div className="text-7xl font-bold mb-10">
      <Questions number={score}/>
      </div>
      <AnswerInput onGuess={guess} />
    </div>
  );
};

export default Game;