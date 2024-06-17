import React from "react";
import styled from "styled-components";

interface TextBoxProps {
  visible: boolean;
}
const TextBox = ({ visible }: TextBoxProps) => {
  return (
    <TextContainer $visible={visible}>
      <MessageByMe>
        <div className="message-container">
          <div className="tail"></div>
          <div className="message">
            <div>감동적인 소설을 추천해줘.</div>
          </div>
        </div>
      </MessageByMe>

      <MessageByOther>
        <div className="message-section">
          <div className="message-container">
            <div className="tail"></div>
            <div className="message">
              감동적인 소설을 찾고 있다면, 빛의 소설가 백수린의 첫 소설집 『폴링
              인 폴』을 추천합니다. 이번 개정판은 백수린 작가가 처음으로 두 손
              가득 귀중히 떠서 건넸던 새하얀 마음을 담아, 그녀의 섬세하고 찬란한
              소설 세계를 다시 만나볼 수 있는 특별한 기회입니다. 『폴링 인
              폴』은 작가의 깨끗하고 순정했던 마음이 고스란히 담긴 작품으로, 그
              동안의 여정을 되돌아볼 수 있는 소중한 선물이 될 것입니다.
            </div>
            <div className="wrapper"></div>
          </div>
        </div>
      </MessageByOther>
    </TextContainer>
  );
};

const TextContainer = styled.div<{ $visible: boolean }>`
  ${({ $visible }) =>
    $visible
      ? `
      visibility: visible
          `
      : `visibility: hidden`};
  height: 400px;
`;

const MessageByOther = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;
  margin: 16px;

  .message-section {
    > .message-container {
      display: flex;
      align-items: end;
      gap: 0.5rem;
      position: relative;
      flex-grow: 1;

      > .tail {
        position: absolute;
        top: 0;
        left: -10px;
        width: 30px;
        height: 30px;
        clip-path: polygon(100% 0, 0 0, 100% 100%);
        background-color: #f2f2f2;
        z-index: -1;
      }

      > .message {
        width: fit-content;
        max-width: 80%;
        background-color: #f2f2f2;
        padding: 10px;
        border-radius: 1rem;
        color: black;
        line-height: 1.5;
        overflow-wrap: break-word;
        word-break: break-word;
        padding: 20px 30px;
      }

      > .wrapper {
        font-size: 0.6rem;
      }
    }
  }
`;

const MessageByMe = styled.div`
  margin: 16px;
  display: flex;
  justify-content: flex-end;

  > .message-container {
    display: flex;
    position: relative;
    align-items: end;
    justify-content: flex-end;
    gap: 0.5rem;
    max-width: 80%;

    > .wrapper {
      text-align: right;
      font-size: 0.6rem;
    }

    > .tail {
      position: absolute;
      top: 0;
      right: -10px;
      width: 30px;
      height: 30px;
      clip-path: polygon(100% 0, 0 0, 0 100%);
      background-color: #f2f2f2;
      z-index: -1;
    }

    > .message {
      width: fit-content;
      background-color: #f2f2f2;
      padding: 10px;
      border-radius: 1rem;
      line-height: 1.5;
      overflow-wrap: break-word;
      word-break: break-word;
      padding: 20px 30px;
    }
  }
`;

export default TextBox;
