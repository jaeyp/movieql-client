import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';

export default ({ id, title, bg }) => {
  return (
    <Container>
      <StyledLink to={`/${id}`}>
        <Poster bg={bg}>{title}</Poster>
      </StyledLink>
    </Container>
  )
};

const Container = styled.div`
  height: 200px;
  width: 100%;
  box-shoadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  @media only screen and (min-width: 1080px) {
    height: 300px;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  color: black;
`

const Poster = styled.div`
  background-image: url(${props => props.bg !== 'null' ? `${IMAGE_PATH}${props.bg}` : null});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  font-size: ${props => props.bg !== 'null' ? "0em" : "1em"};
  display: flex;
  justify-content: center;
  align-items: center;
`