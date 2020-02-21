import React, { useEffect } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';

export default ({ list, onLoadMore }) => {
  const handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (scrollHeight - innerHeight - scrollTop <= 0) {
      /* infinite scroll */
      onLoadMore && onLoadMore()
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Container>
      {list.map(item => (<Movie key={item.id} id={item.id} bg={`${IMAGE_PATH}${item.poster_path}`} />))}
    </Container>
  )
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 80%;
  position: relative;
  top: -50px;
  @media only screen and (min-width: 1080px) {
    width: 50%;
  }
`;