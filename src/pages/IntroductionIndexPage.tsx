import React from "react";
import styled from "styled-components";
import bookList from "../constants/bookList";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const IntroductionIndexPage = () => {
  return (
    <Introduction>
      <HomeContainer>
        <WrapText>
          <p>
            내가 읽고 싶은 도서를 <br /> 내용 기반으로 추천해주는 AI 서비스{" "}
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
          총 1,325권의 도서 데이터 <br /> 13,250개의 리뷰 데이터를 활용한 도서
          추천 서비스
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
          <motion.a
            className="section"
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Section>
              <img src="/assets/1.png" alt="icon" className="icon" />
              <h3> 내용 기반 추천 </h3>
              <p>
                영화나 드라마에만 예고편이 필요한 것이 아닙니다. 이제 여러분이
                읽고 싶은 내용의 도서를 AI로 추천받으세요!
              </p>
            </Section>
          </motion.a>

          <motion.a
            className="section"
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Section>
              <img src="/assets/2.jpg" alt="icon" className="icon" />
              <h3> 선호도 기반 추천 알고리즘 </h3>
              <p>
                교보문고에서 제공하는 '함께 구매한 도서 목록' 데이터를 사용하여
                다른 사용자들의 선호도를 기반으로 한 추천 알고리즘을 제공합니다.
              </p>
            </Section>
          </motion.a>

          <motion.a
            className="section"
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Section>
              <img src="/assets/3.png" alt="icon" className="icon" />
              <h3> 생성형 AI 책 소개 </h3>
              <p>
                도서 추천 모델이 제공하는 책을 생성형 AI를 활용하여 흥미로운
                문구와 함께 추천해드립니다!
              </p>
            </Section>
          </motion.a>
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
  width: 220px;
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
    margin: 60px 0;
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

  .section {
    width: 30%;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fffbf6;

  .icon {
    width: 200px;
    height: 200px;
    border-radius: 30px;
    background-color: #fffbf6;
    object-fit: cover;
  }

  p {
    margin: 0;
    width: 70%;
  }
`;

export default IntroductionIndexPage;
