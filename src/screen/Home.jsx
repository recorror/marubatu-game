import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [chkP1, setChkP1] = useState(false);
  const [chkP2, setChkP2] = useState(false);

  const ChangeP1 = () => {
    setChkP1(chkP1 => !chkP1)
  }
  const ChangeP2 = () => {
    setChkP2(chkP2 => !chkP2)
  }
  
  useEffect(() => {
    if (chkP1 && chkP2) {
      navigate('/Game')
    }
  }, [chkP1, chkP2])

  return (
    <section className="text-center">
      <br />
      <br />
      <article>
        <p className="text-xl font-bold">○×クイズゲーム</p>
      </article>
      <br />
      <article className="m-5 mx-auto border-solid border-2 p-3 w-[960px] rounded-md border-gray-800">
        <p className="font-bold">ルール</p>
        <p>このゲームは2人のプレイヤーがそれぞれ3つずつ問題を出した後、相手に質問をする。</p>
        <p>このとき質問は必ず○×で答えられなければならず、もし答えられない場合はペナルティ
          <span onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} className="font-bold text-red-700">{ isHovering ? ` 下段の参照欄をご覧ください！ ` : `[1] `}</span>を得る。</p>
        <p>点数は各問題につき1点だが、ペナルティは得るたびに1点ずつ大きくなる。</p>
        <br />
        <div className="m-5 mx-auto border-double border-4 p-3 w-[840px] rounded-md border-gray-800">
          <p className="font-bold">参照</p>
          <p>Player1が問題を相次いで3回出した後、順番を変えてPlayer2が問題を相次いで3回出す。</p>
          <p>相手プレイヤーが問題を出し間違えた場合 <span className="font-bold text-red-700">届出機能</span>が使用できる。</p>
          <br />
          <p>ex :: 最初のペナルティ:-1、2番目のペナルティ:-2、3番目のペナルティ:-3</p>
        </div>
      </article>
      <br />
      <article className="m-1">
        {/* <button className="w-32 h-12 m-1 border-solid rounded-md border border-indigo-600 font-semibold" onClick={ChangeP1}>Player 1</button> */}
        <button className={chkP1 ? "w-32 h-12 m-1 border-solid rounded-md border border-indigo-600 bg-indigo-600 text-white font-semibold"  : "w-32 h-12 m-1 border-solid rounded-md border border-indigo-600 text-indigo-600 font-semibold"
} onClick={ChangeP1}>{chkP1 ? "Ready" : "Player 1"}</button>
        <button className={chkP2 ? "w-32 h-12 m-1 border-solid rounded-md border border-pink-600 bg-pink-600 text-white font-semibold"  : "w-32 h-12 m-1 border-solid rounded-md border border-pink-600 text-pink-600 font-semibold"
} onClick={ChangeP2}>{chkP2 ? "Ready" : "Player 2"}</button>
        {/* <button className="w-32 h-12 m-1 border-solid rounded-md border border-pink-600 text-pink-600 font-semibold" onClick={ChangeP2}>Player 2</button> */}
      </article>
    </section>
  )
}

export default Home;