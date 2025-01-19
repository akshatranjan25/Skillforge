import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaClipboardList, FaLightbulb, FaCalendarAlt, FaBook, FaBolt } from "react-icons/fa";

const Assessments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-300 text-gray-900 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Navigation Bar */}
      <nav className="w-full max-w-4xl flex justify-between items-center py-4">
        <Link to="/" className="text-lg font-semibold hover:text-blue-600 transition duration-300 flex items-center">
          <FaArrowLeft className="mr-2" /> Home
        </Link>
        <h1 className="text-3xl font-bold">Assessments</h1>
      </nav>
      
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-blue-200 rounded-xl shadow-lg w-full max-w-3xl transition-transform duration-300 hover:scale-105">
        <h2 className="text-2xl font-bold">Test Your Skills</h2>
        <p className="mt-4 text-lg">Enhance your knowledge with AI-driven assessments.</p>
      </section>
      
      {/* Assessment Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16 px-6 max-w-6xl">
        <div className="p-6 bg-blue-300 rounded-xl shadow-md hover:scale-105 transition-transform flex flex-col items-center text-center">
          <FaClipboardList className="text-4xl" />
          <h3 className="text-xl font-semibold mt-4">Coding Assessments</h3>
          <p className="mt-2">Solve real-world coding problems.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Start Now</button>
        </div>
        <div className="p-6 bg-blue-400 rounded-xl shadow-md hover:scale-105 transition-transform flex flex-col items-center text-center">
          <FaLightbulb className="text-4xl" />
          <h3 className="text-xl font-semibold mt-4">Conceptual Tests</h3>
          <p className="mt-2">Improve theoretical understanding.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Start Now</button>
        </div>
      </div>
      
      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16 px-6 max-w-6xl">
        <div className="p-6 bg-blue-500 rounded-xl shadow-md hover:scale-105 transition-transform flex flex-col items-center text-center">
          <FaCalendarAlt className="text-4xl" />
          <h3 className="text-xl font-semibold mt-4">Streak Calendar</h3>
          <p className="mt-2">Track your daily progress and maintain consistency.</p>
        </div>
        <div className="p-6 bg-blue-600 rounded-xl shadow-md hover:scale-105 transition-transform flex flex-col items-center text-center">
          <FaBolt className="text-4xl" />
          <h3 className="text-xl font-semibold mt-4">Recommended Challenges</h3>
          <p className="mt-2">Personalized assessments based on your past performance.</p>
        </div>
        <div className="p-6 bg-blue-700 rounded-xl shadow-md hover:scale-105 transition-transform flex flex-col items-center text-center">
          <FaBook className="text-4xl" />
          <h3 className="text-xl font-semibold mt-4">Courses to Improve</h3>
          <p className="mt-2">Enhance your scores with expert-recommended courses.</p>
        </div>
      </div>
      
      {/* Topics for Assessments */}
      <div className="py-16 px-6 text-center max-w-4xl bg-blue-200 rounded-xl shadow-lg hover:scale-105 transition-transform">
        <h2 className="text-2xl font-semibold">Assessment Topics</h2>
        <p className="mt-4 text-lg">Covering essential subjects for CS majors:</p>
        <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-lg">
          <li><Link to="/assessments/ai" className="text-blue-600 hover:underline">AI</Link></li>
          <li><Link to="/assessments/ml" className="text-blue-600 hover:underline">ML</Link></li>
          <li><Link to="/assessments/development" className="text-blue-600 hover:underline">Development</Link></li>
          <li><Link to="/assessments/dsa" className="text-blue-600 hover:underline">DSA</Link></li>
          <li><Link to="/assessments/cn" className="text-blue-600 hover:underline">CN</Link></li>
          <li><Link to="/assessments/dbms" className="text-blue-600 hover:underline">DBMS</Link></li>
          <li><Link to="/assessments/os" className="text-blue-600 hover:underline">OS</Link></li>
          <li><Link to="/assessments/dlcd" className="text-blue-600 hover:underline">DLCD</Link></li>
        </ul>
      </div>
      
      {/* Footer */}
      <footer className="py-6 text-center bg-blue-300 w-full max-w-3xl rounded-xl shadow-lg hover:scale-105 transition-transform">
        <p>&copy; 2025 SkillForge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Assessments;
