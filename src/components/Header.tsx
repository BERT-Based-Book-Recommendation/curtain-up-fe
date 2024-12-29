import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <WrapLogo>
        <h1>CURTAIN UP</h1>
        {/* <img src="/assets/logo.svg" alt="로고" /> */}
        {/* <h1>뮤지컬추천</h1> */}
      </WrapLogo>
      {/* <WrapMenus>
        <div>Home</div>
        <div>About</div>
        <div>Work</div>
        <div>Contact</div>
      </WrapMenus> */}
      <CatchPrase>보고 싶은 뮤지컬 추천받기</CatchPrase>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  color: white;

  position: sticky;
  top: 0;

  z-index: 99;
`;
const WrapLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 70px;
  }
  h1 {
    font-family: Nanum_SonGeurSsi;
    font-size: 2rem;
    padding: 10px 0 0 1rem;
  }
`;

const CatchPrase = styled.div`
  display: flex;
  gap: 35px;
  padding-top: 10px;
  flex-wrap: wrap;

  font-size: 2rem;
  font-family: Nanum_SonGeurSsi;

  @media (max-width: 650px) {
    display: none;
  }
`;

// const WrapMenus = styled.div`
//   display: flex;
//   gap: 35px;
//   padding-top: 10px;
//   flex-wrap: wrap;

//   font-size: 1.3rem;
// `;
