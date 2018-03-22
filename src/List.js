import React from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';

/** 投稿ひとつ分を描画する */
const renderPost = (post, myName) => {
  if( post.name == myName ) {
    return (
      <ContentWrapper name={post.name} myName={myName}>
        <Content name={post.name} myName={myName}>{post.body}</Content>
        <Icon src="image/icon1.jpg" />
      </ContentWrapper>
    );
  } else {
    return (
      <ContentWrapper name={post.name} myName={myName}>
        <Icon src="image/icon2.jpg" />
        <Content name={post.name}>{post.body}</Content>
      </ContentWrapper>
    );
  }
}

const List = pure( props => {
  return (
    <Messages>
    { props.posts.map((post, index) => {
      return (
        <Message key={index}>
        {renderPost(post, props.myName)}
        </Message>
      );
    }) }
    </Messages>
  )
})

const Icon = styled.img`
  width: 45px;
  border-radius: 50%;
 `;

const Messages = styled.div`
  width: 95%;
  height: calc(100% - 100px);
  overflow: scroll;
  margin: 0 auto;
 `;

const Message = styled.div`
  position: relative;
  padding: 7px 0;
 `;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${ props => (props.name == props.myName) ? 'flex-end' : 'flex-start'};
 `;

const Content = styled.div`
  display: inline-block;
  max-width: 70%;
  word-wrap: break-word;
  background-color: #fff;
  padding: 10px 15px;
  margin: 0 15px;
  border-radius: 10px;
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 3px; 
    ${ props => (props.name == props.myName) ? 'right' : 'left' }: -19px;
    border: 8px solid transparent;
    border-right: 18px solid #fff;
    transform: rotate(${ props => (props.name == props.myName) ? '145' : '35' }deg);
   }
 `;

export default List;
