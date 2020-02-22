import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

export default ({ id, name }) => {
  return (
    <Container>
      <StyledLink to={`/person/${id}`}>
        <Button>
          {name}
        </Button>
      </StyledLink>
    </Container>
  )
}

/** 
 * function styled()
 * Argument: component or tagname (Either a valid react component or a tagname like 'div'.)
 * reference: https://styled-components.com/docs/api
 */
// Applying styled components to component.
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: white;
  }
`

// Applying styled components to tagname.
const Container = styled.p`
  font-size: 18px;
  margin: 0 8%;
  @media only screen and (min-width: 1080px) {
    font-size: 24px;
    font-weight: 500;
    color: #252829;
    margin: 5px 0;
    padding: 5px 10px;
    display: inline-block;
  }
`

const Button = styled.div`
  background: palevioletred;
  color: white;

  display: inline-block;
  font-size: 0.6em;
  font-weight: 500;
  text-align: center;
  margin: 0.2em;
  padding: 0em 0.5em 0.1em 0.5em;
  border: 4px solid palevioletred;
  border-radius: 6px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  :hover {
    cursor:pointer;
    color: black;
  }
  @media only screen and (min-width: 1080px) {
    font-size: 0.8em;
    margin: 0em;
    border-radius: 12px;
  }
`