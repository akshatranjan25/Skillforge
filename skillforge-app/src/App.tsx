import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Assessments from "./pages/Assessments.tsx";
//import Challenges from "./pages/Challenges.tsx";
//import Leaderboard from "./pages/Leaderboard.tsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessments" element={<Assessments />} />
          {/* <Route path="/challenges" element={<Challenges />} />
          <Route path="/leaderboard" element={<Leaderboard />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

