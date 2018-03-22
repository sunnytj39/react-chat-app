import React from 'react';
import styled from 'styled-components';
import { pure } from 'recompose';
import Form from './Form';
import List from './List';
import Header from './Header';

const Chat = props => (
  <Wrapper>
    <Header 
    otherName={props.otherName}
    handleBack={props.handleBack} />
    <List
    myName={props.myName}
    posts={props.posts} />
    <Form
    myName={props.myName} 
    body={props.body}
    onSubmitNewPost={(newPost) => props.saveNewPost(newPost)}
    handleChangeBody={(event) => props.handleChangeBody(event)}
    handleSubmit={(event) => props.handleSubmit(event)} />
  </Wrapper>
);


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: mistyrose;
 `;

export default Chat;
