import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../scss/board.scss";

import { withRouter } from "react-router-dom";

const Board = (props) => {
  const [lists, setLists] = useState([]);

  const _lists = () => {
    Axios.post("http://localhost:3001/lists").then((response) => {
      setLists(response.data);
      //데이터 뿌려주려면 배열에 저장 해줘야 함.
    });
  };

  const _handleClick = (ele) => {
    window.location.href = `/view/${ele.id}`;
  };

  useEffect(() => {
    _lists();
  }, []);

  return (
    <div className="board">
      <div className="board-box">
        <h1>Board</h1>
        <table className="type10">
          <thead>
            <tr>
              <th scope="cols">#</th>
              <th scope="cols">Title</th>
              <th scope="cols">Name</th>
              <th scope="cols">Date</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((ele, index) => {
              return (
                <tr key={ele.id} onClick={() => _handleClick(ele)}>
                  <th scope="row">{index}</th>
                  <td>
                    <p>{ele.title}</p>
                  </td>
                  <th>{ele.name}</th>
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

export default withRouter(Board);
