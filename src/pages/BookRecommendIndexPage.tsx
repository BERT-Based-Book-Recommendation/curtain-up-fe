import React, { useState } from "react";
import styled from "styled-components";
import TextBox from "../components/TextBox";
import TextInput from "../components/TextInput";

const BookRecommendIndexPage = () => {
  const [isShown, setIsShown] = useState(false);

  const handleOnChange = (e: any) => {
    // console.log(e.target.value);
  };

  return (
    <BookRecommend>
      <ImageContainer>
        <img src="/assets/line.png" alt="line" />
      </ImageContainer>
      <Title>
        <strong>어떤 도서</strong>를 읽고 싶으신가요?
      </Title>
      <TextContainer>
        <TextBox visible={isShown} />
        <TextInput
          onChange={handleOnChange}
          setIsShown={() => setIsShown(true)}
        />
      </TextContainer>
    </BookRecommend>
  );
};

const BookRecommend = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  img {
    width: 100%;
    height: auto;
  }
`;

const Title = styled.h1`
  margin-top: 250px;
  text-align: center;
  letter-spacing: 11px;

  strong {
    color: #d2ab80;
  }
`;

const TextContainer = styled.div`
  padding: 40px;
  width: 100%;
  box-sizing: border-box;
`;

export default BookRecommendIndexPage;
