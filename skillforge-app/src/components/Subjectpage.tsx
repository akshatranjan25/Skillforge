import React from "react";
import { Link } from "react-router-dom";

// Define the interface for the props
interface SubjectPageProps {
  subject: string;
  description: string;
  courses: string[];
  assessments: string[];
}

const SubjectPage: React.FC<SubjectPageProps> = ({ subject, description, courses, assessments }) => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-100 to-blue-300 text-gray-900 flex flex-col items-center px-4 py-10">
      {/* Navigation */}
      <nav className="w-full max-w-4xl flex justify-between items-center py-4">
        <Link to="/assessments" className="text-lg font-semibold hover:text-blue-600 transition duration-300">Back to Assessments</Link>
        <h1 className="text-3xl font-bold">{subject}</h1>
      </nav>

      {/* Subject Introduction */}
      <section className="text-center py-8 px-6 bg-blue-200 rounded-xl shadow-lg w-full max-w-3xl animate-fade-in">
        <h2 className="text-2xl font-bold">Introduction to {subject}</h2>
        <p className="mt-4 text-lg">{description}</p>
      </section>

      {/* Recommended Courses */}
      <div className="py-8 px-6 max-w-4xl animate-slide-in-left">
        <h2 className="text-xl font-semibold mb-4">Recommended Courses</h2>
        <ul className="list-disc list-inside">
          {courses.map((course, index) => (
            <li key={index} className="text-blue-600 hover:underline">{course}</li>
          ))}
        </ul>
      </div>

      {/* Assessments */}
      <div className="py-8 px-6 max-w-4xl animate-slide-in-right">
        <h2 className="text-xl font-semibold mb-4">Assessments</h2>
        <ul className="list-disc list-inside">
          {assessments.map((assessment, index) => (
            <li key={index} className="text-blue-600 hover:underline">{assessment}</li>
          ))}
        </ul>
      </div>

      {/* Learning Path Flowchart Placeholder */}
      <div className="py-8 px-6 max-w-4xl bg-blue-300 rounded-xl shadow-lg animate-zoom-in">
        <h2 className="text-xl font-semibold mb-4">Learning Path</h2>
        <p>Flowchart visualization for {subject} learning path will go here.</p>
      </div>
    </div>
  );
};

export default SubjectPage;

