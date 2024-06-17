import React, { useState } from "react";
import styled from "styled-components";

const RECOMMEND_LIST = [
  {
    title: "초록은 어디에나",
    text: "감동적인 소설을 찾고 있다면, 임선우의 『초록은 어디에나』를 추천합니다. 저마다의 초록을 품은 따뜻한 슬픔의 모습들 속에서 우리는 엉뚱한 환상이 일상으로 녹아드는 순간을 만날 수 있습니다. 색도 온도도 다른 다양한 감정들이 조화를 이루며 독자의 마음을 따스하게 어루만져 줄 것입니다.",
    img: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788954449496.jpg",
    link: "https://product.kyobobook.co.kr/detail/S000209150116",
  },
  {
    title: "꿰맨 눈의 마을",
    text: "감동적인 소설을 원한다면, 조예은의 『꿰맨 눈의 마을』을 읽어보세요. 바이러스가 뒤덮인 종말의 세계에서 살아남은 이들의 우정과 사랑, 모험이 펼쳐지는 이 소설은 독창적인 호러와 따뜻한 인간애가 공존합니다. 독특한 상상력으로 빚어낸 이야기가 마음 깊이 울림을 줄 것입니다.",
    img: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788954449670.jpg",
    link: "https://product.kyobobook.co.kr/detail/S000211606436",
  },
  {
    title: "투 유",
    text: "감동적인 소설을 찾고 있다면, 『투 유』 앤솔러지를 추천합니다. 김빵, 김화진, 김청귤, 구소현, 명소정이 전하지 못한 마음을 담은 다섯 편의 이야기로, 애써 외면했던 감정을 들여다보게 합니다. 오래도록 마음을 밝혀줄 이 앤솔러지는 당신의 감성을 따뜻하게 어루만질 것입니다.",
    img: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791191824353.jpg",
    link: "https://product.kyobobook.co.kr/detail/S000211606436",
  },
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
            key={index}
          >
            <CardImg
              key={index}
              src={book.img}
              alt="book"
              $isClicked={clickedIndex === index}
              $align={index % 2}
              onClick={() => handleClick(index)}
            />
            <WrapText $align={index % 2}>
              <h3>{book.title}</h3>
              <p>{book.text}</p>
              <a href={book.link} target="_blank">
                <button>구매하러 가기</button>
              </a>
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
