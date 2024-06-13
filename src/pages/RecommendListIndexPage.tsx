import React from "react";
import styled from "styled-components";

const RECOMMEND_LIST = [
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788952776372.jpg",
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788998441012.jpg",
  "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791161571768.jpg",
  "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788954697941.jpg",
];

const RecommendListIndexPage = () => {
  return (
    <RecommendList>
      <Title>추천 도서 리스트</Title>
      <WrapCards>
        {RECOMMEND_LIST.map((book) => (
          <CardImg key={book} src={book} alt="book" />
        ))}
      </WrapCards>
    </RecommendList>
  );
};

const RecommendList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 250px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 70px;
  letter-spacing: 11px;
`;

const WrapCards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  padding: 0 40px;
`;
const CardImg = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
`;

export default RecommendListIndexPage;
