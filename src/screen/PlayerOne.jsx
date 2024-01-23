import React, { useState } from "react";
import Maru from "../img/radio_button_unchecked_FILL0_wght400_GRAD0_opsz24.svg";
import Batu from "../img/close_FILL0_wght400_GRAD0_opsz24.svg";
import MaruW from "../img/radio_button_unchecked_white.svg";
import BatuW from "../img/close_white.svg";

function PlayerOne({ oneOnReady }) {
  const [oneSelect, setOneSelect] = useState([
    { maru: false, batu: false },
    { maru: false, batu: false },
    { maru: false, batu: false },
  ]);
  const [isReady, setIsReady] = useState(false);
  const [inputValues, setInputValues] = useState(["", "", ""]);

  const handleOptionSelection = (index, option) => {
    const updatedOneSelect = [...oneSelect];
    updatedOneSelect[index][option] = !updatedOneSelect[index][option];

    if (option === "maru") {
      updatedOneSelect[index]["batu"] = false;
    } else {
      updatedOneSelect[index]["maru"] = false;
    }

    setOneSelect(updatedOneSelect);
  };

  const handleInputChange = (index, value) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = value;
    setInputValues(updatedInputValues);
  };

  const gameReady = () => {
    setIsReady(false);

    const questionsData = [
      {
        text: "Player1-Question1",
        selected: oneSelect[0],
        input: inputValues[0]
      },
      {
        text: "Player1-Question2",
        selected: oneSelect[1],
        input: inputValues[1]
      },
      {
        text: "Player1-Question3",
        selected: oneSelect[2],
        input: inputValues[2]
      }
    ];
    const selectIsTrue = (e) => {
      return questionsData[e].selected.maru || questionsData[e].selected.batu
    }

    // 이 부분의 질문이 맞는지는 Ai로 검사하거나 몇 음절 이상의 질문인지를 판별하는 식을 세워야함.
    // 끝이 ?로 끝나는가도 중요한 쟁점 중 하나일 수 있음.
    // 自然言語処理が必要
    const isInputTrue = (e) => {
      return inputValues[e].length !== 0
    }

    if (selectIsTrue(0) && selectIsTrue(1) && selectIsTrue(2)) {
      if (isInputTrue(0) && isInputTrue(1) && isInputTrue(2)) {
        setIsReady(true);
        oneOnReady(questionsData);
      } else { alert("1P様 問題를 적어주세요. ") }
    } else { alert(" ○×를 선택해주세요. ") }
  };

  const renderQuestion = (index, labelText) => {
    const { maru, batu } = oneSelect[index];

    return (
      <section key={`question-${index}`} id={`question-${index + 1}`}>
        <div className="flex justify-center">
          <p className="m-1">{labelText}</p>
          <input
            type="text"
            value={inputValues[index]}
            className="my-1 border border-solid border-indigo-800 rounded-sm"
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>
        <section className="mb-5 flex justify-center">
          <img
            src={maru ? MaruW : Maru}
            alt="maru"
            className={`w-8 h-8 m-2 border-2 border-solid rounded-md border-indigo-800 ${
              maru ? "bg-indigo-800" : ""
            }`}
            onClick={() => handleOptionSelection(index, "maru")}
          />
          <img
            src={batu ? BatuW : Batu}
            alt="batu"
            className={`w-8 h-8 m-2 border-2 border-solid rounded-md border-indigo-800 ${
              batu ? "bg-indigo-800" : ""
            }`}
            onClick={() => handleOptionSelection(index, "batu")}
          />
        </section>
      </section>
    );
  };

  return (
    <section className="m-3">
      <p>1P エリア</p>
      <section className="grid content-around w-[540px] h-[420px] border-2 border-solid rounded-2xl border-indigo-600">
        <section id="question-section">
          {renderQuestion(0, "問題1 : ")}
          {renderQuestion(1, "問題2 : ")}
          {renderQuestion(2, "問題3 : ")}
        </section>
        <button
          onClick={gameReady}
          className={`font-bold rounded-md w-16 m-auto ${isReady? "h-8 border border-solid bg-indigo-600 text-white" : "border-4 border-double" } border-indigo-600`}
        >
          {isReady ? "Ready" : "제출"}
        </button>
      </section>
    </section>
  );
}

export default PlayerOne;
