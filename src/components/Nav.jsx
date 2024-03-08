import React from "react";
import styled from "styled-components";
const Nav = () => {
  return (
    <Navbar>
      <img src="./logo.png" alt="" />
      <input type="text" placeholder="Search Food" />
    </Navbar>
  );
};

const Navbar = styled.div`
  display: flex;
  max-width: 1440px;
  max-height: 241px;
  padding: 85px 120px 31px 120px;
  margin: 0 auto;
  background: #323334;
  justify-content: space-between;
  align-items: center;

  input {
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
  }
`;

export default Nav;
