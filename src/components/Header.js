import React from "react";

import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
function Header() {
  return (
    <Container>
      <Logo>
        <a>
          <img src="images/logo.svg" />
        </a>
      </Logo>

      <Menu>
        <a href="#">Model S </a>
        <a href="#">Model X </a>
        <a href="#">Model S </a>
        <a href="#">Model S </a>
      </Menu>

      <RightMenu>
        <a href="#">Shop </a>
        <a href="#">Tesla Account </a>
        <CustomMenu />
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled.div``;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 20px;
    flex-wrap: no-wrap;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    margin-right: 10px;
    text-transform: uppercase;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
