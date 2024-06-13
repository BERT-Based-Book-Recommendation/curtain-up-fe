import React from "react";
import styled from "styled-components";

const TextInput = () => {
  return (
    <InputContainer>
      <input
        type="text"
        placeholder="추천 받고 싶은 도서의 내용을 입력하세요."
      />
      <img src="/assets/send-icon.png" alt="send-button" />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e5e0d8;

  width: 100%;
  height: 60px;
  border-radius: 16px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);

  input {
    width: 90%;
    padding: 30px 0px 30px 30px;
    outline: none;
    background: none;
    border: none;
  }
  ::placeholder {
    font-size: 1rem;
    line-height: normal;
  }

  img {
    width: 30px;
    padding-right: 20px;
  }
`;

export default TextInput;
