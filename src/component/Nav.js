import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavStyle>
      <div id="logo">Foody</div>
    </NavStyle>
  );
};
const NavStyle = styled.nav`
  background: black;
  color: white;
  text-align: center;
  padding: 1rem 0rem;
  font-size: 1.6rem;
  font-family: "Lobster", cursive;
`;

export default Nav;
