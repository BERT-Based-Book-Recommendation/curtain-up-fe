import React from "react";
import styled from "styled-components";

const ContactServiceIndexPage = () => {
  return (
    <ContactService>
      <Title>서비스 문의</Title>
      <WrapForm>
        <TextArea placeholder="메세지를 입력하세요." />
        <InputArea>
          <input type="email" placeholder="메일 주소를 입력하세요." />
          <button>문의 보내기</button>
        </InputArea>
      </WrapForm>
      <WrapInfo>
        <tbody>
          <tr>
            <TableHeader>이메일</TableHeader>
            <TableData>ReBook@gmail.com</TableData>
          </tr>
          <tr>
            <TableHeader>전화번호</TableHeader>
            <TableData>010-1234-1234</TableData>
          </tr>
        </tbody>
      </WrapInfo>
    </ContactService>
  );
};

const ContactService = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 250px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 11px;
`;

const WrapForm = styled.div`
  display: inline-flex;
  margin-top: 1em;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`;
const TextArea = styled.textarea`
  margin: 0;
  border: 1px solid #d2ab80;
  border-radius: 16px;

  resize: none;
  padding: 20px;
  width: 360px;

  &::placeholder {
    color: #d2ab80;
  }

  &:focus-visible {
    border: 1px solid #d2ab80;
    outline: none;
  }
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 360px;

  input {
    margin: 0;
    border: 1px solid #d2ab80;
    border-radius: 16px;
    padding: 20px;
    height: 24px;
    line-height: 48px;

    &::placeholder {
      color: #d2ab80;
    }

    &:focus-visible {
      border: 1px solid #d2ab80;
      outline: none;
    }
  }

  button {
    all: unset;
    height: 64px;
    line-height: 64px;
    border-radius: 16px;
    color: white;
    text-align: center;
    font-weight: 700;
    background-color: #b3b792;
    cursor: pointer;
    padding: 0 20px;

    &:hover {
      opacity: 0.8;
    }

    &:focus-visible {
      outline: 4px solid var(--color-sub);
    }
  }
`;

const WrapInfo = styled.table`
  margin: 2rem 0;
  text-align: left;
  border-spacing: 0 1.3rem;
`;

const TableHeader = styled.th`
  font-size: 0.9em;
  font-weight: 600;
  border-right: 5px solid #e5d2b8;
  color: #725c3a;

  text-align: right;
  padding-right: 3em;
`;

const TableData = styled.td`
  padding-left: 1.5rem;
`;

export default ContactServiceIndexPage;
