import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import { motion } from "framer-motion";

interface resultProp {
  name: string;
  pre_intro: string;
  similarity: number;
}

const RecommendPage = () => {
  const text = "어떤 뮤지컬을 보고 싶나요?"; // 타이핑할 문구
  const indexRef = useRef(0); // index를 useRef로 관리
  const speed = 200; // 글자 타이핑 속도 (밀리초 단위)

  const [inputValue, setInputValue] = useState("");
  const [resultList, setResultList] = useState<resultProp[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post("http://127.0.0.1:8000/model", {
        inputText: inputValue,
      })
      .then((response) => {
        setResultList(response.data.recommended_books);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    function typeWriter() {
      const textElement = window.document.getElementById("text");

      if (textElement && indexRef.current < text.length) {
        textElement.textContent += text.charAt(indexRef.current); // 한 글자씩 추가
        indexRef.current++; // useRef를 통해 index 값 관리
        setTimeout(typeWriter, speed);
      } else if (textElement) {
        setTimeout(() => {
          textElement.textContent = ""; // 텍스트 초기화
          indexRef.current = 0; // index 초기화
          typeWriter(); // 반복 호출
        }, 5000); // 반복 간격
      }
    }

    if (resultList.length === 0) typeWriter();
  }, [text, speed, resultList]); // 의존성 배열에 text와 speed 추가

  return (
    <>
      {resultList.length !== 0 && (
        <WrapResult>
          <WrapButton>
            <button onClick={() => setResultList([])}>
              <img src="/assets/recommend/arrow.png" alt="뒤로" />
              다시하기
            </button>
          </WrapButton>
          {resultList.map((result) => (
            <MotionDiv
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                stiffness: 260,
                damping: 20,
              }}
            >
              <Section key={result.name}>
                <img src="/assets/recommend/뮤지컬레드북.jpeg" alt="포스터" />
                <div>
                  <span className="title">{result.name}</span>
                  <span className="introduction">{result.pre_intro}</span>
                </div>
              </Section>
            </MotionDiv>
          ))}
        </WrapResult>
      )}
      <WrapContent>
        <WrapBackground>
          <img
            className="bg"
            src="/assets/recommend/background.png"
            alt="배경"
          />
          <img
            className="star-1"
            src="/assets/landing/bg-twinkle.png"
            alt="별"
          />
          <img
            className="star-2"
            src="/assets/landing/bg-twinkle.png"
            alt="별"
          />
          <img className="girl" src="/assets/recommend/girl.png" alt="소녀" />
        </WrapBackground>
        <Content>
          <div>
            <span id="text" />
            <span id="cursor" />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              value={inputValue}
              placeholder="웅장한 역사 스토리를 담은 뮤지컬을 추천해줘"
              onChange={handleChange}
            />
            <button type="submit">
              {isLoading ? (
                <BeatLoader color="white" size="10" />
              ) : (
                <>
                  <img src="/assets/recommend/theater-masks.png" alt="아이콘" />
                  추천받기
                </>
              )}
            </button>
          </form>
        </Content>
      </WrapContent>
    </>
  );
};

const WrapResult = styled.div`
  position: absolute;
  width: 100%;
  height: 100%; /* WrapResult의 높이를 100%로 설정 */
  z-index: 99999;

  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 2rem;

  overflow-y: auto;
`;

const WrapButton = styled.div`
  display: flex;
  justify-content: end;
  width: 76%;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 7rem;

    padding: 0.6rem 0.8rem;
    background-color: #9544cf;
    border-radius: 0.9rem;
    border: none;
    color: white;
    font-weight: 600;
  }

  img {
    width: 1.3rem;
    padding-right: 0.3rem;
  }
`;

const MotionDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1rem;

  &:last-child {
    margin-bottom: 4rem;
  }
`;

const Section = styled.div`
  width: 70%;
  min-height: 50%;
  max-height: 50vh;
  overflow-y: auto;

  background-color: #d4ccdf;
  border-radius: 1rem;
  padding: 2rem;

  display: flex;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 16rem;
    height: 23rem;
    object-fit: cover;
  }

  .title {
    font-size: 1.5rem;
    color: #330a6a;
    font-weight: 700;
  }

  .introduction {
    font-size: 1rem;
    margin-top: 1rem;
    color: #330a6a;
  }
`;

const WrapContent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #330a6a;
  position: relative;
  overflow: hidden;

  position: absolute;
  z-index: 99;
`;

const WrapBackground = styled.div`
  /* width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 244, 255, 0.1) 50%,
    rgba(255, 218, 255, 0) 70%
  ); */

  position: absolute;
  width: 100%; /* 부모 요소가 화면 전체를 덮도록 설정 */
  height: 100%; /* 부모 요소가 화면 전체를 덮도록 설정 */
  bottom: -2%;
  left: 0;
  overflow: hidden; /* 필요하면 추가 */

  .bg {
    position: absolute;
    bottom: 0%;
    width: 60rem;
  }

  .star-1 {
    position: absolute;
    bottom: 40%;
    width: 45rem;

    transform: rotate(30deg);
  }

  .star-2 {
    position: absolute;
    bottom: 75%;
    width: 40rem;

    transform: scaleX(-1);
    transform: rotate(-150deg);
  }

  .girl {
    width: 30rem;
    position: absolute;
    bottom: 0%;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.3rem;
  font-family: Nanum_SonGeurSsi;

  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  div,
  form {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  #cursor {
    border-left: 2px solid #fff; /* 커서 스타일 */
    animation: blink 0.7s infinite;
    display: inline-block;
    margin-left: 2px;
    height: 35px; /* 폰트 크기와 동일하게 설정 */
    vertical-align: middle;
  }

  #text {
    font-size: 2rem;
    color: white;
    display: inline-block;
  }

  input {
    width: 30rem;
    height: 2.3rem;
    border-radius: 0.9rem;
    padding: 0.1rem 0.8rem;

    border: none;

    &::placeholder {
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.9rem;

    margin-left: 0.5rem;
    width: 6rem;
    height: 2.3rem;

    background-color: #9544cf;
    border: none;
    color: white;
    font-weight: 600;

    img {
      width: 1rem;
      padding-right: 0.3rem;
    }
  }
`;

export default RecommendPage;
