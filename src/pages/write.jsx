import React from "react";
import "../scss/write.scss";

const Write = () => {
  return (
    <div className="board">
      <div className="board-box">
        <h1>Board</h1>
      </div>
      <form action="">
        <label htmlFor="">Title</label>
        <input type="text" />
        <label htmlFor="">Description</label>
      </form>

      <textarea className="text-box" name="" id=""></textarea>
      <div className="write-btn">
        <button>
          <a href="/board">Save</a>
        </button>
      </div>
    </div>
  );
};

export default Write;
