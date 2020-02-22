import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default () => {
  return (
    <Container>
      <Link to={`/`}>
        <i className="home fas fa-home" />
      </Link>
    </Container>
  )
};

const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  @media only screen and (min-width: 1080px) {
    top: 30px;
    left: 40px;
  }
  .home {
    font-size: 1.8em;
    color: white;
    @media only screen and (min-width: 1080px) {
      font-size: 2.4em;
    }
  }
  .home:hover {
    color: gray;
  }
`