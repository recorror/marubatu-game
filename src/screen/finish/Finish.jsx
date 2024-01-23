import React from "react";
import { useLocation, Link } from "react-router-dom";

function Finish() {
  const location = useLocation();
  // console.log(location.state.winner)
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8 border-4 border-double border-yellow-400 rounded-2xl p-2">{location.state.winner}</h1>
      <h1 className="text-4xl font-bold mb-8">{location.state.winner === `Drow`? `残念ながら引き分けです。` : `おめでとうございます！`}</h1>
      <div className="flex space-x-4">
        <Link to="/">
          <button className="px-4 py-2 font-bold bg-blue-500 text-white rounded-md">ホームヘ</button>
        </Link>
        <Link to="/Game">
          <button className="px-4 py-2 font-bold bg-green-500 text-white rounded-md">もう一度</button>
        </Link>
      </div>
    </div>
  );
}

export default Finish;