import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTasks, FaTrophy, FaChartLine, FaCode, FaBook, FaUsers } from "react-icons/fa";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-b from-black via-blue-900 to-white transition-colors duration-500 ${isScrolled ? "text-gray-900" : "text-gray-700"} flex flex-col items-center justify-center px-4 overflow-hidden`}>
      {/* Navigation Bar */}
      <nav className="w-full max-w-4xl flex justify-center space-x-6 py-4">
        <Link to="/Assessments" className="text-lg font-semibold text-gray-400 hover:text-blue-300 transition duration-300">Assessments</Link>
        <Link to="/Challenges" className="text-lg font-semibold text-gray-400 hover:text-blue-300 transition duration-300">Challenges</Link>
        <Link to="/Leaderboard" className="text-lg font-semibold text-gray-400 hover:text-blue-300 transition duration-300">Leaderboard</Link>
      </nav>
      
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-blue-100 rounded-xl shadow-lg w-full max-w-3xl transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold">Welcome to SkillForge</h1>
        <p className="mt-4 text-lg">Enhance your skills with AI-powered recommendations</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">Get Started</button>
      </section>
      
      {/* Feature Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16 px-6 max-w-6xl">
        <div className="p-6 bg-blue-200 rounded-xl shadow-md hover:scale-105 transition-transform">
          <FaTasks className="text-4xl mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Assessments</h2>
          <p className="mt-2">Test your skills with AI-driven assessments.</p>
          <Link to="/assessments" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Take an Assessment</Link>
        </div>
        <div className="p-6 bg-blue-300 rounded-xl shadow-md hover:scale-105 transition-transform">
          <FaCode className="text-4xl mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Challenges</h2>
          <p className="mt-2">Improve your problem-solving skills.</p>
          <Link to="/challenges" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Explore Challenges</Link>
        </div>
        <div className="p-6 bg-blue-400 rounded-xl shadow-md hover:scale-105 transition-transform">
          <FaTrophy className="text-4xl mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Leaderboard</h2>
          <p className="mt-2">See how you rank among your peers.</p>
          <Link to="/leaderboard" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">View Leaderboard</Link>
        </div>
      </div>
      
      {/* Testimonials */}
      <section className="py-16 px-6 text-center max-w-4xl bg-blue-100 rounded-xl shadow-lg hover:scale-105 transition-transform">
        <h2 className="text-2xl font-semibold">What Our Users Say</h2>
        <p className="mt-4 italic">"SkillForge helped me land my dream job!" - User A</p>
      </section>
      
      {/* Footer */}
      <footer className="py-6 text-center mt-4 mb-4 bg-blue-200 w-full max-w-3xl rounded-xl shadow-lg hover:scale-105 transition-transform">
        <p>&copy; 2025 SkillForge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
