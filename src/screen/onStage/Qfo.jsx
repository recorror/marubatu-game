import React, { useState } from "react";
import Maru from "../../img/radio_button_unchecked_FILL0_wght400_GRAD0_opsz24.svg";
import Batu from "../../img/close_FILL0_wght400_GRAD0_opsz24.svg";
import MaruW from "../../img/radio_button_unchecked_white.svg";
import BatuW from "../../img/close_white.svg";
import Report from "../../img/notifications_active.svg"
import BeforeReport from "../../img/notifications.svg"

function Qfo({ information, setThisScore }) {
  let penalty = 0
  // console.log(information)
  const mainColor = information[0].text !== "Player1-Question1" ? `indigo` : `pink` ;
  
  const [isReady, setIsReady] = useState(false);
  const [select, setSelect] = useState([
    { maru: false, batu: false },
    { maru: false, batu: false },
    { maru: false, batu: false },
  ]);

  const gameReady = () => {
    setIsReady(isReady => !isReady);
    let updatedScore = 0;
    // 로직 작성 !!!
    for (let i = 0; i < select.length; i++) {
      if (information[i].selected.maru === true && select[i].maru === true) {
        updatedScore++;
      } else if (information[i].selected.batu === true && select[i].batu === true ) {
        updatedScore++;
      }
    }
    updatedScore = updatedScore - penalty

    setThisScore(updatedScore)
  };

  const [isReport, setIsReport] = useState([false, false, false])

  const accusation = (index) => {
    const updatedReport = [...isReport]
    updatedReport[index] = !updatedReport[index]
    setIsReport(updatedReport)
    // 지금은 일방적 신고 가능.
    // 상대와 채팅을 통해 누가 옳은가 판별할 수 있는
    // 막고라 시스템이 필요함.
    // 물론, AI로 문제의 검증을 할 수 있다면 필요없음.
    if (updatedReport[index]) {
      penalty++
    } else {
      penalty--
    }
  }

  const handleOptionSelection = (index, option) => {
    const updatedSelect = [...select];
    updatedSelect[index][option] = !updatedSelect[index][option];

    if (option === "maru") {
      updatedSelect[index]["batu"] = false;
    } else {
      updatedSelect[index]["maru"] = false;
    }

    setSelect(updatedSelect);
  };

  const PlayerInput = (index) => {

    const { maru, batu } = select[index];
    
    return (
      <section key={`answer-${index}`}>
        <section className="m-3 ml-48 flex justify-start">
          <p>問題 {index+1} : <span>{information[index].input}</span></p>
        </section>
        <section className="mb-5 flex justify-center">
          <img
            src={maru ? MaruW : Maru}
            alt="maru"
            className={`w-8 h-8 m-2 border-2 border-solid rounded-md border-${mainColor}-600 ${
              maru ? `bg-${mainColor}-600` : ""
            }`}
            onClick={() => handleOptionSelection(index, "maru")}
          />
          <img
            src={batu ? BatuW : Batu}
            alt="batu"
            className={`w-8 h-8 m-2 border-2 border-solid rounded-md border-${mainColor}-600 ${
              batu ? `bg-${mainColor}-600` : ""
            }`}
            onClick={() => handleOptionSelection(index, "batu")}
          />
          <img src={isReport[index] ? Report : BeforeReport} alt="Report"
            className="absolute ml-64"
            onClick={() => accusation(index)}
          />
        </section>
      </section>
    );
  };

  return (
    <article className="grid content-center">
      <p className="mx-auto">問題セクション</p>
      <section className={`border border-solid rounded-lg w-[540px] h-[480px] border-${mainColor}-600`}>
        {PlayerInput(0)}
        {PlayerInput(1)}
        {PlayerInput(2)}
        <section className="flex justify-center mt-10 mb-5">
          <button
            onClick={gameReady}
            className={`font-bold rounded-md w-16 ${isReady? `h-8 border border-solid bg-${mainColor}-600 text-white` : "border-4 border-double" } border-${mainColor}-600`}
          >
            {isReady ? "Ready" : "제출"}
          </button>
        </section>
      </section>
    </article>
  );
}

export default Qfo;
