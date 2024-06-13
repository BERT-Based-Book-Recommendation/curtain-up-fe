import React from "react";
import styled from "styled-components";
import bookList from "../constants/bookList";
import Marquee from "react-fast-marquee";

const IntroductionIndexPage = () => {
  return (
    <Introduction>
      <HomeContainer>
        <WrapText>
          <p>
            내가 읽고 싶은 도서를 <br /> 내용 기반으로 추천해주는 서비스{" "}
          </p>
          <button>도서 추천 받으러 가기</button>
        </WrapText>
        <WrapObject>
          <img src="/assets/home-object.svg" alt="오브제" />
          <img className="circle-image" src="/assets/book.jpeg" alt="도서" />
        </WrapObject>
      </HomeContainer>
      <BookListContainer>
        <h1>
          총 0000권의 도서 데이터 <br /> 000000개의 리뷰 데이터를 활용한 도서
          추천 AI 서비스
        </h1>
        <WrapCards>
          <Marquee speed={80} pauseOnHover={true}>
            {bookList.images1.map((book) => (
              <CardImg key={book} src={book} alt="book" />
            ))}
          </Marquee>
          <Marquee speed={80} direction="right" pauseOnHover={true}>
            {bookList.images2.map((book) => (
              <CardImg key={book} src={book} alt="book" />
            ))}
          </Marquee>
        </WrapCards>
      </BookListContainer>
      <RecommendStandard>
        <img src="/assets/wave-object.png" alt="backgroud" />
        <h1>리북만의 도서 추천 기준</h1>
        <WrapSection>
          <Section>
            <div className="icon" />
            <h3> 첫 번째 기준 </h3>
            <p>
              {" "}
              첫 번째 기준입니다. 첫 번째 기준입니다. 첫 번째 기준입니다. 첫
              번째 기준입니다. 첫 번째 기준입니다. 첫 번째 기준입니다. 첫 번째
              기준입니다.{" "}
            </p>
          </Section>
          <Section>
            <div className="icon" />
            <h3> 두 번째 기준 </h3>
            <p>
              {" "}
              두 번째 기준입니다. 두 번째 기준입니다. 두 번째 기준입니다. 두
              번째 기준입니다. 두 번째 기준입니다. 두 번째 기준입니다. 두 번째
              기준입니다.{" "}
            </p>
          </Section>
          <Section>
            <div className="icon" />
            <h3> 세 번째 기준 </h3>
            <p>
              {" "}
              세 번째 기준입니다. 세 번째 기준입니다. 세 번째 기준입니다. 세
              번째 기준입니다. 세 번째 기준입니다. 세 번째 기준입니다. 세 번째
              기준입니다.{" "}
            </p>
          </Section>
        </WrapSection>
      </RecommendStandard>
    </Introduction>
  );
};

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 250px;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;
const WrapText = styled.div`
  p {
    font-size: 2rem;
    font-weight: 600;
  }

  button {
    background-color: #57663e;
    color: white;
    border-radius: 50px;
    border: none;
    padding: 17px 52px;
    font-size: 1.2rem;
  }
`;
const WrapObject = styled.div`
  position: relative;
  transform: translate(-140px, 0);
  margin-top: 2rem;

  .circle-image {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(50%, 0);

    width: 280px;
    height: 280px;
    border-radius: 50%;
    object-fit: cover;
    background-position: center top;
  }
`;

const BookListContainer = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 70px;
    letter-spacing: 11px;
  }
`;
const WrapCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const CardImg = styled.img`
  height: 320px;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
  margin-right: 20px;
`;

const RecommendStandard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 30px 0;
    letter-spacing: 11px;
  }

  img {
    width: 100%;
  }
`;
const WrapSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;

  .icon {
    width: 200px;
    height: 200px;
    border-radius: 30px;
    background-color: lightgray;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 25%;

  p {
    margin: 0;
  }
`;

export default IntroductionIndexPage;
