import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-4xl font-bold mb-6">Welcome to SkillForge!</h1>
      <p className="mb-4">Assess your skills and compete with others to improve!</p>
      <Link
        to="/assessments"
        className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
      >
        Take Skill Assessment
      </Link>
    </div>
  );
};

export default Home;
