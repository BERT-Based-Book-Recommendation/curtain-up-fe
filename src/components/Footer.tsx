import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <WrapPTag>
        <div>
          <p>리북 : Recommend Book, Read Book</p>
          <div className="github">
            <img
              className="github-icon"
              src="/assets/github-icon.svg"
              alt="github"
            />
            <p>프로젝트 깃허브 링크 바로가기</p>
          </div>
        </div>
        <p>제작 김연주 | 박솔미 | 황서현</p>
      </WrapPTag>
      <WrapLogo>
        <img className="logo" src="/assets/logo.svg" alt="로고" />
        <h1>리북</h1>
      </WrapLogo>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;

  background-color: #e5d2b8;
  height: 140px;
  padding: 20px 40px;
  font-size: 0.8rem;
`;

const WrapPTag = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  .github {
    display: flex;
    align-items: center;
  }
  .github-icon {
    padding-right: 0.3rem;
    width: 20px;
  }
  p {
    margin: 0.5rem 0;
  }
`;

const WrapLogo = styled.div`
  display: flex;
  align-items: center;

  .logo {
    width: 70px;
  }
  h1 {
    padding: 10px 0 0 1rem;
  }
`;
export default Footer;
