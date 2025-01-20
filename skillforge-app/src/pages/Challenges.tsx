
const ChallengesPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex flex-col items-center px-4 py-10 animate-fade-in">
        <h1 className="text-4xl font-bold">Challenges</h1>
        <p className="mt-4 text-lg">Solve coding challenges and improve your skills!</p>
        <div className="w-full max-w-4xl bg-blue-600 rounded-xl p-6 mt-6 animate-slide-in-right shadow-lg">
          <h2 className="text-xl font-semibold">Ongoing Challenges</h2>
          <ul className="mt-4">
            <li className="text-lg">💻 AI Optimization Challenge</li>
            <li className="text-lg">⚡ Speed Coding Challenge</li>
            <li className="text-lg">🔍 Debugging Quest</li>
          </ul>
        </div>
      </div>
    );
  };

  export default ChallengesPage;