import React from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';

const Form = pure( props => (
  <FormWrapper>
    <Message type="text"
    value={props.body}
    onChange={(event) => props.handleChangeBody(event)} />
    <Submit onClick={(event) => props.handleSubmit(event)}>
     送信
    </Submit>
  </FormWrapper>
) );

const Message = styled.input`
  flex: 0 0 70%;
  height: 30px;
  font-size: 16px;
  border-radius: 5px;
  outline: 0;
 `;

const Submit = styled.button`
  flex: 0 0 20%;
  height: 36px;
  color: #fff;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  background-color: lightcoral;
  box-shadow: 1px 1px 1px #999;
  pointer: cursor;
  outline: 0;
 `;

const FormWrapper = styled.form`
  width: 100%;
  height: 50px
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: pink;
 `;

export default Form;
