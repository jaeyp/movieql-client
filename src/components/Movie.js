import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default ({ id, bg }) => {
  console.log(bg)
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
    </Container>
  )
};

const Container = styled.div`
  height: 200px;
  width: 100%;
  box-shoadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
  @media only screen and (min-width: 1080px) {
    height: 300px;
  }
`

const Poster = styled.div`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`