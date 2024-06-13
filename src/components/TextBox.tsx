import React from "react";
import styled from "styled-components";

const TextBox = () => {
  return (
    <TextContainer>
      <MessageByMe>
        <div className="message-container">
          <div className="tail"></div>
          <div className="message">
            <div>귀여운 동물이 나오면서 주인공과 모험하는 소설을 읽고싶어.</div>
          </div>
        </div>
      </MessageByMe>

      <MessageByOther>
        <div className="message-section">
          <div className="message-container">
            <div className="tail"></div>
            <div className="message">
              『이상한 나라의 앨리스』는 7살 소녀 앨리스가 토끼 굴을 타고 떨어져
              도착한 이상한 나라에서 겪는 모험을 그리고 있죠. 앨리스는 이상한
              나라에서 토끼, 모자장수, 체셔 고양이 등 다양한 기발한 캐릭터들을
              만나게 됩니다. 이들과의 만남을 통해 앨리스는 성장하고 자신의
              정체성을 찾아가는 과정을 보여줍니다. 『이상한 나라의 앨리스』는
              지금까지도 많은 사랑을 받고 있는 고전 명작 중 하나입니다. 귀여운
              동물 캐릭터와 함께 펼쳐지는 앨리스의 모험을 만나보세요!
            </div>
            <div className="wrapper"></div>
          </div>
        </div>
      </MessageByOther>
    </TextContainer>
  );
};

const TextContainer = styled.div`
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
