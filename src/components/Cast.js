import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

export default ({ id, name }) => {
  return (
    <Container>
      <StyledLink to={`/person/${id}`}>
        {name}
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
  font-size: 24px;
  font-weight: 500;
  color: #252829;
  margin: 5px 0;
  padding: 5px 10px;
  display: inline-block;
`