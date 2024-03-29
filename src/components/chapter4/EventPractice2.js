import React, { Component } from "react";
import { ContentTitle } from "../chapter3/titleLink";
import Title from "../common/Title";

class EventPractice2 extends Component {
  state = {
    message: "",
  };
  render() {
    return (
      <div>
        <Title Component={ContentTitle} id={"EventPractice2"} />
        <p>text박스에 입력후 state로 받은 값을 버튼클릭 후 alert으로 확인</p>
        <input
          type={"text"}
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
        {/* 버튼을 눌러서 입력된 input의 값이 state로 잘 변경되었는지 확인하는 부분 */}
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice2;
