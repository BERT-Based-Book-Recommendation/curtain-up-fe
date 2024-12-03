import React from "react";
import styled from "styled-components";

interface ReviewInterface {
  rv_title: string;
  writer: string;
}

interface ReviewProps {
  review: ReviewInterface;
}

const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <WrapContent>
      <p>{review.writer}</p>
      <h1>"{review.rv_title}"</h1>
    </WrapContent>
  );
};

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  background-color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 0.8rem;

  h1 {
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 0.6rem;
    padding: 0;
    margin: 0;
  }
`;

export default Review;
