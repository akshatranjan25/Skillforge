import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Assessments from "./pages/Assessments.tsx";
import Challenges from "./pages/Challenges.tsx";
import Leaderboard from "./pages/Leaderboard.tsx";
import SubjectPage from "./components/Subjectpage.tsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/subjects/ai" element={<SubjectPage subject="Artificial Intelligence" description="Learn AI concepts and applications." courses={["AI Basics", "Deep Learning"]} assessments={["AI Quiz 1", "AI Coding Challenge"]} />} />
      <Route path="/subjects/ml" element={<SubjectPage subject="Machine Learning" description="Explore ML algorithms and techniques." courses={["ML Foundations", "Neural Networks"]} assessments={["ML Quiz 1", "ML Project"]} />} />
      <Route path="/subjects/dsa" element={<SubjectPage subject="Data Structures & Algorithms" description="Master DSA for problem-solving." courses={["DSA Course", "Advanced Algorithms"]} assessments={["DSA Mock Test", "Coding Contest"]} />} />
      <Route path="/subjects/cn" element={<SubjectPage subject="Computer Networks" description="Understand networking principles." courses={["Networking Basics", "Advanced CN"]} assessments={["CN Quiz", "Packet Analysis"]} />} />
      <Route path="/subjects/dbms" element={<SubjectPage subject="Database Management Systems" description="Learn about relational databases." courses={["SQL Basics", "DBMS Concepts"]} assessments={["DBMS Quiz", "Database Project"]} />} />
      <Route path="/subjects/os" element={<SubjectPage subject="Operating Systems" description="Explore OS concepts and management." courses={["OS Essentials", "Advanced OS"]} assessments={["OS Quiz", "Process Scheduling"]} />} />
      <Route path="/subjects/dlcd" element={<SubjectPage subject="Digital Logic & Computer Design" description="Understand digital circuits." courses={["DLCD Basics", "Logic Design"]} assessments={["DLCD Test", "Circuit Design"]} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

