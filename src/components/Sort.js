import React from 'react';
import styled from 'styled-components';

/* radio-like button */
export default ({ id, checked, text, fetch }) => {
  return (
    <Container>
      <Button id={id} checked={checked} onClick={() => fetch()}>{text}</Button>
    </Container>
  )
};

const Container = styled.div`
`

const Button = styled.div`
  background: ${props => props.id === props.checked ? "palevioletred" : "white"};
  color: ${props => props.id === props.checked ? "white" : "palevioletred"};

  display: inline-block;
  font-size: 0.9em;
  font-weight: 700;
  text-align: center;
  margin: 0.4em;
  padding: 0.1em 0.8em 0.2em 0.8em;
  border: ${props => props.id === props.checked ? "1px solid white" : "2px solid palevioletred"};
  border-radius: 6px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  :hover {
    cursor:pointer;
  }
  @media only screen and (min-width: 1080px) {
    font-size: 1.2em;
    margin: 1em;
    padding: 0.2em 1em 0.3em 1em;
    border-radius: 12px;
  }
`