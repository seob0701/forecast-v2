import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../scss/write.scss";

const View = () => {
  // const [lists, setLists] = useState([]);
  // const [array, setArray] = useState("");
  const [data, setData] = useState([
    { id: "", name: "", email: "", title: "", description: "", date: "" },
  ]);

  const _lists = () => {
    // console.log(window.location.pathname.split("/")[2]);
    Axios.post("http://localhost:3001/lists").then((response) => {
      // console.log(response.data);

      response.data.map((ele) => {
        if (ele.id === parseInt(window.location.pathname.split("/")[2])) {
          setData(ele);
        }
      });
      // setLists(data);
      //데이터 뿌려주려면 배열에 저장 해줘야 함.
    });

    // console.log(lists);
  };

  useEffect(() => {
    // console.log(window.location.pathname.split("/")[2]);
    // setArray();
    _lists();
    console.log("useEffect");
  }, []);

  // console.log(array);
  console.log(data);
  // console.log(data);

  const _delete = () => {};

  return (
    <div className="board">
      <div className="board-box">
        <h1>View</h1>
      </div>

      <form action="">
        <label htmlFor="">Information</label>
        <input
          name="title"
          type="text"
          value={`Writer: ${data.name}   Email: ${data.email}   Date: ${data.date}`}
          style={{ fontWeight: "bold" }}
        />
        <label htmlFor="">Title</label>
        <input
          name="title"
          type="text"
          value={data.title}
          style={{ fontWeight: "bold" }}
        />
        <label htmlFor="">Description</label>
      </form>
      <textarea
        className="text-box"
        name="desc"
        id=""
        value={data.description}
        style={{ fontWeight: "bold" }}
      ></textarea>
      <div className="write-btn">
        <button>
          <a onClick={_delete}>Delete</a>
        </button>
      </div>
    </div>
  );
};

export default View;
