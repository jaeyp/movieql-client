import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

const ButtonTop = ({ show }) => {
  return (
    <Top show={show}>
      <i className="home fas fa-arrow-alt-circle-up" onClick={() => document.documentElement.scrollTop = 0} />
    </Top>
  )
};

const Top = styled.div`
  display: ${props => props.show ? "block" : "none"};
  position: fixed;
  top: 90%;
  left: 90%;
  .home {
    font-size: 2.4em;
    color: hotpink;
    @media only screen and (min-width: 1080px) {
      font-size: 3em;
    }
  }
  .home:hover {
    color: gray;
    cursor:pointer;
  }
`

export default ({ list, onLoadMore }) => {
  const [showTop, setShowTop] = useState(false)
  const [page, setPage] = useState(1);
  const handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

    /* infinite scroll */
    if (scrollHeight - innerHeight - scrollTop <= 0) {
      onLoadMore && onLoadMore(page + 1)
      setPage(page + 1)
    }

    /* show/hide buttonTop */
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowTop(true)
    } else {
      setShowTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <Container>
      <ButtonTop show={showTop} />
      {list.map(item => (<Movie key={item.id} id={item.id} title={item.title} bg={`${item.poster_path}`} />))}
    </Container>
  )
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 70%;
  position: relative;
  top: -50px;
  @media only screen and (min-width: 1080px) {
    width: 50%;
  }
`;