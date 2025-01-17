import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl font-bold">Welcome to SkillForge</h1>
        <p className="mt-4 text-lg">Enhance your skills with AI-powered recommendations</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">Get Started</button>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-semibold text-center">Why Choose SkillForge?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">AI-Powered Recommendations</h3>
            <p className="mt-2">Get personalized learning paths based on your interests.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Real-Time Interaction</h3>
            <p className="mt-2">Engage with mentors and peers using live chat and discussions.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Seamless Integration</h3>
            <p className="mt-2">Works with various tools and platforms effortlessly.</p>
          </div>
        </div>
      </section>
      
      {/* Recommended Courses Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold">Recommended Courses</h2>
        <p className="mt-4">Our AI suggests the best courses for you.</p>
        <button className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600">Explore Courses</button>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold">What Our Users Say</h2>
        <p className="mt-4 italic">"SkillForge helped me land my dream job!" - User A</p>
      </section>
      
      {/* Footer */}
      <footer className="py-6 text-center bg-gray-200 dark:bg-gray-800">
        <p>&copy; 2025 SkillForge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
