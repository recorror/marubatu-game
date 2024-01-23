import React, { useState, useEffect } from "react";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";
import { useNavigate } from "react-router-dom";

function Game() {
  const [oneReady, setOneReady] = useState(null);
  const [twoReady, setTwoReady] = useState(null);
  let navigate = useNavigate();

  const handleOneOnReady = (data) => {
    setOneReady(data);
  };
  const handleTwoOnReady = (data) => {
    setTwoReady(data);
  };

  useEffect(() => {
    if (oneReady !== null && twoReady !== null) {
      navigate('/Stage', {
        state: {
          firstPlayer: oneReady,
          secondPlayer: twoReady,
        },
      });
    }
  }, [oneReady, twoReady, navigate]);

  return (
    <article className="">
      <section className="m-3 grid justify-items-center content-evenly mx-auto text-2xl border-4 border-double rounded-xl border-slate-700 h-24 w-[580px]">
        <p className="">管理者向けゲームのセッティング及びテスト画面</p>
        <p className="">問題を出してください</p>
      </section>
      <article className="flex justify-evenly text-center">
        <PlayerOne oneOnReady={handleOneOnReady} />
        <PlayerTwo twoOnReady={handleTwoOnReady} />
      </article>
    </article>
  );
}

export default Game;
