import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Header from "../components/Header";

const LandingPage = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    // 스크롤 이벤트 처리 함수
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    // 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <WrapPage>
      <Header />
      <StyledBackground />

      <WrapStar $scrollValue={scrollValue}>
        <BackgroundStar className="star1" src={"/assets/landing/bg-star.png"} />
        <BackgroundStar
          className="star2"
          src={"/assets/landing/bg-star2.png"}
        />
        <BackgroundStar
          className="twinkle"
          src={"/assets/landing/bg-twinkle.png"}
        />
      </WrapStar>
      <WrapMoon $scrollValue={scrollValue}>
        <BackgroundMoon $scrollValue={scrollValue} />
      </WrapMoon>

      <WrapFixedBackground>
        <Background
          src="/assets/landing/bg-1.png"
          $top={"40"}
          $left={"-3"}
          $scale={1 + scrollValue * 0.001}
        />
        <Background
          src="/assets/landing/bg-2.png"
          $top={"50"}
          $scale={1 + scrollValue * 0.001}
        />
      </WrapFixedBackground>

      <WrapScrollContent>
        <Background
          className="bg-3"
          src="/assets/landing/bg-3.png"
          $top={"45"}
          $left={"-15"}
          $scale={1 + scrollValue * 0.001}
          $isContain={false}
        />
        <Background
          src="/assets/landing/bg-4.png"
          $top={"65"}
          $scale={1 + scrollValue * 0.001}
        />
      </WrapScrollContent>
    </WrapPage>
  );
};

const WrapPage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const StyledBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #4b0e9f,
    #9544cf,
    #fa96ff 66.67%,
    #f997ff 100%
  );
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const twinkleAnimation = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const WrapStar = styled.div<{ $scrollValue: number }>`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: ${({ $scrollValue }) => $scrollValue}px;
  > .star1 {
  }
  > .star2 {
    animation: ${twinkleAnimation} 1.5s infinite;
  }

  > .twinkle {
    animation: ${twinkleAnimation} 1.5s infinite;
  }
`;
const BackgroundStar = styled.div<{ src: string }>`
  width: 100%;
  max-width: 1500px;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-repeat: repeat-x;
  background-size: contain;

  position: absolute;

  &.star1 {
    width: 100%;
    top: 0;
  }

  &.star2 {
    width: 150%;
    left: -5%;
    top: -5%;
  }

  &.twinkle {
    width: 100%;
  }

  z-index: 2;

  transform-origin: center;
`;

const WrapMoon = styled.div<{ $scrollValue: number }>`
  width: 800px;
  height: 800px;

  position: absolute;
  top: ${({ $scrollValue }) => Math.min(30 + $scrollValue * 0.75, 100)}%;
  left: ${({ $scrollValue }) => Math.min(10 + $scrollValue * 0.4, 100)}%;
  z-index: 2;

  transition: top 0.1s ease, left 0.1s ease;
`;
const BackgroundMoon = styled.div<{ $scrollValue: number }>`
  width: 150px;
  height: 150px;
  background-image: url("/assets/landing/moon.png");
  background-repeat: no-repeat;
  background-size: contain;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const WrapFixedBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;

  width: 100%;
  height: 100%;
`;

const WrapScrollContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

interface BackgroundProp {
  src: string;
  $top: string;
  $left?: string;
  $isContain?: boolean;
  $scale?: number; // scale 속성 추가
}
const Background = styled.div<BackgroundProp>`
  width: 120%;
  height: 100%;
  position: absolute;
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => ($left ? $left : "-3")}%;
  background-image: url(${({ src }) => src});
  background-size: ${({ $isContain }) => ($isContain ? "contain" : "cover")};
  background-repeat: no-repeat;
  z-index: 4;

  ${({ $scale }) =>
    $scale &&
    css`
      transform: scale(${$scale});
      transition: transform 0.1s ease; // 부드러운 애니메이션 추가
    `}
  transition: transform 0.1s ease;
`;

Background.defaultProps = {
  $isContain: true,
};

export default LandingPage;
