import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { pure } from 'recompose';
import styled from 'styled-components';

const Home = pure( props => (
    <Wrapper>
      <h1>React Chat App</h1>
      <Input type="text"
      value={props.myName}
      onChange={(event) => props.handleChangeName(event)} />
      <Enter to='./chat'>Enter</Enter>
    </Wrapper>
) );

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: mistyrose;
 `;

const Input = styled.input`
  font-size: 16px;
 `;

const Enter = styled(Link)`
  margin: 10px;
  text-align: center;
  line-height: 30px 
  text-decoration: none;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: lightcoral;
  color: #fff;
  box-shadow: 1px 1px 1px #999;
 `;

export default Home;
