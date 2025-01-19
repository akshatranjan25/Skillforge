import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

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
      <section className="text-center py-8 px-6 bg-blue-200 rounded-xl shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold">Introduction to {subject}</h2>
        <p className="mt-4 text-lg">{description}</p>
      </section>

      {/* Recommended Courses */}
      <div className="py-8 px-6 max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Recommended Courses</h2>
        <ul className="list-disc list-inside">
          {courses.map((course, index) => (
            <li key={index} className="text-blue-600 hover:underline">{course}</li>
          ))}
        </ul>
      </div>

      {/* Assessments */}
      <div className="py-8 px-6 max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Assessments</h2>
        <ul className="list-disc list-inside">
          {assessments.map((assessment, index) => (
            <li key={index} className="text-blue-600 hover:underline">{assessment}</li>
          ))}
        </ul>
      </div>

      {/* Learning Path Flowchart Placeholder */}
      <div className="py-8 px-6 max-w-4xl bg-blue-300 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Learning Path</h2>
        <p>Flowchart visualization for {subject} learning path will go here.</p>
      </div>
    </div>
  );
};

const SubjectsRoutes = () => {
  return (
    <Routes>
      <Route path="/subjects/ai" element={<SubjectPage subject="Artificial Intelligence" description="Learn AI concepts and applications." courses={["AI Basics", "Deep Learning"]} assessments={["AI Quiz 1", "AI Coding Challenge"]} />} />
      <Route path="/subjects/ml" element={<SubjectPage subject="Machine Learning" description="Explore ML algorithms and techniques." courses={["ML Foundations", "Neural Networks"]} assessments={["ML Quiz 1", "ML Project"]} />} />
      <Route path="/subjects/dsa" element={<SubjectPage subject="Data Structures & Algorithms" description="Master DSA for problem-solving." courses={["DSA Course", "Advanced Algorithms"]} assessments={["DSA Mock Test", "Coding Contest"]} />} />
      <Route path="/subjects/cn" element={<SubjectPage subject="Computer Networks" description="Understand networking principles." courses={["Networking Basics", "Advanced CN"]} assessments={["CN Quiz", "Packet Analysis"]} />} />
      <Route path="/subjects/dbms" element={<SubjectPage subject="Database Management Systems" description="Learn about relational databases." courses={["SQL Basics", "DBMS Concepts"]} assessments={["DBMS Quiz", "Database Project"]} />} />
      <Route path="/subjects/os" element={<SubjectPage subject="Operating Systems" description="Explore OS concepts and management." courses={["OS Essentials", "Advanced OS"]} assessments={["OS Quiz", "Process Scheduling"]} />} />
      <Route path="/subjects/dlcd" element={<SubjectPage subject="Digital Logic & Computer Design" description="Understand digital circuits." courses={["DLCD Basics", "Logic Design"]} assessments={["DLCD Test", "Circuit Design"]} />} />
    </Routes>
  );
};

export { SubjectPage, SubjectsRoutes };
