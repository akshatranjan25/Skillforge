import React, { useState } from "react";
const Assessments: React.FC = () => {
  const [score, setScore] = useState(0);

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setScore(score + 1);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Technical Skills Assessment</h2>
      <div className="mt-6">
        <p className="text-lg">Q1: What is 2 + 2?</p>
        <button onClick={() => handleAnswer(true)} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">
          4
        </button>
        <button onClick={() => handleAnswer(false)} className="px-4 py-2 bg-red-500 text-white rounded-md">
          5
        </button>
      </div>
      <div className="mt-4">
        <p className="font-bold">Score: {score}</p>
      </div>
    </div>
  );
};

export default Assessments;
