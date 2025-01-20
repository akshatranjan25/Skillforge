

const LeaderboardPage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col items-center px-4 py-10 animate-fade-in">
        <h1 className="text-4xl font-bold">Leaderboard</h1>
        <p className="mt-4 text-lg">Track your progress and compete with others!</p>
        <div className="w-full max-w-4xl bg-gray-700 rounded-xl p-6 mt-6 animate-slide-in-left shadow-lg">
          <h2 className="text-xl font-semibold">Top Performers</h2>
          <ul className="mt-4">
            <li className="text-lg">🏆 Alice - 1500 pts</li>
            <li className="text-lg">🥈 Bob - 1400 pts</li>
            <li className="text-lg">🥉 Charlie - 1300 pts</li>
          </ul>
        </div>
      </div>
    );
  };

  export default LeaderboardPage;