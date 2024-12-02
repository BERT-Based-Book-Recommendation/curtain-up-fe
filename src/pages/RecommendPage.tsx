import React, { useEffect } from "react";
import styled from "styled-components";

const RecommendPage = () => {
  const text = "어떤 뮤지컬을 보고 싶나요?"; // 타이핑할 문구
  let index = 0;
  let speed = 200; // 글자 타이핑 속도 (밀리초 단위)

  function typeWriter() {
    const textElement = window.document.getElementById("text");

    if (textElement && index < text.length) {
      textElement.textContent += text.charAt(index); // 한 글자씩 추가
      index++;
      setTimeout(typeWriter, speed);
    } else if (textElement) {
      setTimeout(() => {
        textElement.textContent = "";
        index = 0;
        typeWriter(); // 반복 호출
      }, 5000);
    }
  }

  useEffect(() => {
    typeWriter();
  }, [typeWriter]);

  return (
    <WrapContent>
      <WrapBackground>
        <img className="bg" src="/assets/recommend/background.png" alt="배경" />
        <img className="star-1" src="/assets/landing/bg-twinkle.png" alt="별" />
        <img className="star-2" src="/assets/landing/bg-twinkle.png" alt="별" />
        <img className="girl" src="/assets/recommend/girl.png" alt="소녀" />
      </WrapBackground>
      <Content>
        <div>
          <span id="text" />
          <span id="cursor" />
        </div>
        <div>
          <input placeholder="웅장한 역사 스토리를 담은 뮤지컬을 추천해줘"></input>
          <button>
            <img src="/assets/recommend/theater-masks.png" alt="아이콘" />
            추천받기
          </button>
        </div>
      </Content>
    </WrapContent>
  );
};

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

  div {
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
