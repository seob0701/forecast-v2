import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../scss/write.scss";

const Write = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const _login = () => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.user) {
        setUserName(response.data.user[0].name);
        setUserEmail(response.data.user[0].email);
      }
      // console.log(response.data.user);
    });
  };

  const _save = () => {
    //작성한 글의 제목, 내용, 작성자, 시간 정보를 DB에 저장한다.

    if (title !== "" && desc !== "") {
      console.log(userName, userEmail, date, title, desc);
    } else {
      alert("Fill in all the blanks, please.");
    }
  };

  function getFormatDate(date) {
    let year = date.getFullYear(); //yyyy
    let month = 1 + date.getMonth(); //M
    month = month >= 10 ? month : "0" + month; //month 두자리로 저장
    let day = date.getDate(); //d
    day = day >= 10 ? day : "0" + day; //day 두자리로 저장

    return year + "-" + month + "-" + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }

  useEffect(() => {
    _login();
    let currentDate = new Date();
    currentDate = getFormatDate(currentDate);

    setDate(currentDate); //날짜저장

    // console.log(userInfo);
  }, []);

  const _handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setDesc(value);
    }
  };

  return (
    <div className="board">
      <div className="board-box">
        <h1>Board</h1>
      </div>
      <form action="">
        <label htmlFor="">Title</label>
        <input name="title" type="text" onChange={_handleChange} />
        <label htmlFor="">Description</label>
      </form>

      <textarea
        className="text-box"
        name="desc"
        id=""
        onChange={_handleChange}
      ></textarea>
      <div className="write-btn">
        <button>
          <a onClick={_save}>Save</a>
        </button>
      </div>
    </div>
  );
};

export default Write;
