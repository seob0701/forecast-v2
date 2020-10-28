import React from "react";
import "../scss/board.scss";

const test_contents = [
  {
    num: "1",
    title: "오늘 뭐하냐 공부 이거 만들고 회원가입까지",
    id: "shimyuseob",
    date: "2020-10-26",
  },
  {
    num: "2",
    title: "너무 힘들다 만들기도 귀찮고",
    id: "jypark1111",
    date: "2020-10-26",
  },
  {
    num: "3",
    title: "오늘은 이것만 하고 자야지!!",
    id: "test",
    date: "2020-10-26",
  },
];

const Board = () => {
  return (
    <div className="board">
      <div className="board-box">
        <h1>Board</h1>
        <table className="type10">
          <thead>
            <tr>
              <th scope="cols">#</th>
              <th scope="cols">Title</th>
              <th scope="cols">ID</th>
              <th scope="cols">Date</th>
            </tr>
          </thead>
          <tbody>
            {test_contents.map((ele, key) => {
              return (
                <tr key={key}>
                  <th scope="row">{ele.num}</th>
                  <td>
                    <p>{ele.title}</p>
                  </td>
                  <th>{ele.id}</th>
                  <th>{ele.date}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="write-btn">
        <button>
          <a href="/write">Writing</a>
        </button>
      </div>
    </div>
  );
};

export default Board;
