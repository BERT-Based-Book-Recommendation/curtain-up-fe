import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <WrapLogo>
        <img src="/assets/logo.svg" alt="로고" />
        <h1>리북</h1>
      </WrapLogo>
      <WrapMenus>
        <div>서비스 소개</div>
        <div>도서 추천</div>
        <div>도서 추천 리스트</div>
        <div>서비스 문의</div>
      </WrapMenus>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;
const WrapLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 70px;
  }
  h1 {
    padding: 10px 0 0 1rem;
  }
`;

const WrapMenus = styled.div`
  display: flex;
  gap: 35px;
  padding-top: 10px;
  flex-wrap: wrap;

  font-size: 1.3rem;
`;
