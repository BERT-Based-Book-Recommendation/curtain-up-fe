import React, { useState } from "react";
import styled from "styled-components";

const RECOMMEND_LIST = [
  "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788952776372.jpg",
  "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791130649672.jpg",
  "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791138483049.jpg",
  "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791161571188.jpg",
];

const RecommendListIndexPage = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  return (
    <RecommendList>
      <Title>추천 도서 리스트</Title>
      <WrapCards>
        {RECOMMEND_LIST.map((book, index) => (
          <WrapCard
            $align={index % 2}
            $isClicked={clickedIndex === index}
            key={book}
          >
            <CardImg
              key={book}
              src={book}
              alt="book"
              $isClicked={clickedIndex === index}
              $align={index % 2}
              onClick={() => handleClick(index)}
            />
            <WrapText $align={index % 2}>
              <h3>첫 번째 도서 제목</h3>
              <p>
                도서 설명 도서 설명 도서 설명 도서 설명 도서 설명 도서 설명 도서
                설명 도서 설명 도서 설명 도서 설명 도서 설명 도서 설명 도서 설명
                도서 설명 도서 설명 도서 설명 도서 설명 도서 설명 도서 설명 도서
                설명 도서 설명 도서 설명 도서 설명 도서 설명 도서 설명 도서 설명
                도서 설명 도서 설명 도서 설명 도서 설명 도서 설명 도서 설명 도서
                설명 도서 설명 도서 설명 도서 설명 도서 설명 도서 설명 도서 설명
                도서 설명 도서 설명 도서 설명 도서 설명
              </p>
              <button>구매하러 가기</button>
            </WrapText>
          </WrapCard>
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
  flex-direction: column;
  gap: 40px;
  padding: 0 40px;
`;

const WrapCard = styled.div<{ $align: number; $isClicked: boolean }>`
  display: flex;
  position: relative;
  justify-content: ${({ $align }) =>
    $align === 0 ? "flex-start" : "flex-end"};
`;

const WrapText = styled.div<{ $align: number }>`
  position: absolute;
  top: 10%;
  /* right: 10%; */
  ${(props) =>
    props.$align === 1 &&
    `
    left: 5%;
  `}
  ${(props) =>
    props.$align === 0 &&
    `
    right: 5%;
  `}
  text-align: center;
  max-width: 35%;

  h3 {
    font-size: 1.3rem;
  }
  p {
    font-size: 0.8rem;
    font-weight: 600;
  }

  button {
    background-color: #b3b792;
    color: white;
    border-radius: 50px;
    border: none;
    padding: 10px 52px;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

const CardImg = styled.img<{ $isClicked: Boolean; $align: number }>`
  width: ${({ $isClicked }) => ($isClicked ? "50%" : "100%")};
  height: 300px;
  object-fit: cover;
  border-radius: ${({ $align, $isClicked }) =>
    $isClicked
      ? $align === 0
        ? "0 150px 150px 0"
        : "150px 0 0 150px"
      : "30px"};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
  z-index: 999;

  &:hover {
    cursor: pointer;
  }

  transition: all 0.5s ease;
`;

export default RecommendListIndexPage;
