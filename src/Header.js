import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { pure } from 'recompose';
import styled from 'styled-components';

const Header = pure( props => (
    <Wrapper>
      <Back to='/' onClick={props.handleBack}>＜</Back>
      <OtherName>{props.otherName}</OtherName>
    </Wrapper>
) );

const Back = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin-left: 10px;
 `;

const OtherName = styled.div`
  margin: 0 auto;
  position: relative;
  left: -20px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  background-color: pink;
 `;

export default Header;
