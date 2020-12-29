import { useState } from "react";

const AnswerInput = (props) => {
  const [response, setResponse] = useState("");

  props.onGameover;

  const handle_change = (event) => {
    const value = event.target.value;
    setResponse(value);
  };

  const guess = () => {
    props.onGuess(response);
    setResponse("");
  };

  return (
    <div>
      <input
        placeholder="Answer"
        value={response}
        onChange={handle_change}
        className="w-52 p-2 border-2 border-black rounded mr-2"
      />
      <button
        onClick={guess}
        className="bg-red-500 hover:bg-red-700 text-white font-bold p-3 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default AnswerInput;