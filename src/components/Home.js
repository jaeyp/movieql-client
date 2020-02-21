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
  top: 30px;
  left: 40px;
  .home {
    font-size: 2.4em;
    color: white;
  }
  .home:hover {
    color: gray;
  }
`