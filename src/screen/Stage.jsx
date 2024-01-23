import React, { useEffect, useState } from "react";
import Qfo from "./onStage/Qfo";
import { useLocation, useNavigate } from "react-router-dom";


function Stage() {
  const location = useLocation();
  let navigate = useNavigate();

  const [oneScore, setOneScore] = useState(null);
  const [twoScore, setTwoScore] = useState(null);
  const handleOneScore = (data) => {
    setOneScore(data)
  }
  const handleTwoScore = (data) => {
    setTwoScore(data)
  }

  useEffect(() => {
    // console.log(oneScore !== null && twoScore !== null)
    if (oneScore !== null && twoScore !== null) {
      const winner = oneScore > twoScore ? "Player 1 win !" : oneScore === twoScore ? "Drow" : "Player 2 win !" ;
      // console.log(winner)
      navigate('/Finish', {
        state: {winner,}
      });
    } 
  },[oneScore, twoScore, navigate])
  return (
    <article className="grid content-center">
      <section className="mx-auto my-5">
        <p className="text-2xl font-bold">問題を解いてください！</p>
      </section>
      <section className="flex justify-around">
        {/* 異なる出題者が出した問題を解かなければならない。 */}
        {/* Player2の問題 Player1の画面 */}
        <Qfo information={location.state.secondPlayer} setThisScore={handleOneScore} />
        {/* Player1の問題 Player2の画面 */}
        <Qfo information={location.state.firstPlayer} setThisScore={handleTwoScore} />
      </section>
    </article>
  )
}

export default Stage;