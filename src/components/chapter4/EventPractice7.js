import React, { useState } from "react";
import { ContentTitle } from "../chapter3/titleLink";
import Title from "../common/Title";

// EventPractice6을 함수형 컴포넌트로 변경
function EventPractice7() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <Title Component={ContentTitle} id={"EventPractice7"} />
      <p>4-6(클래스형 컴포넌트)를 함수형 컴포넌트로 변경</p>
      <input
        type={"text"}
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type={"text"}
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
}

export default EventPractice7;
