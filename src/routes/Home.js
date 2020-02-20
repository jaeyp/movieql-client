import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Movies from '../components/Movies';

const GET_MOVIES = gql`
  query GetMovies($page: Int!) {
    list(sort_by:"popularity.desc", page: $page) {
      id
      title
      poster_path
    }
  }
`

export default () => {
  let page = 1;
  const { loading, error, data, fetchMore } = useQuery(GET_MOVIES, {
    variables: { page: page }
  })

  console.log(loading, error, data)

  return (
    <Container>
      <Header>
        <Title>MovieQL</Title>
        <Subtitle>by Jaehyun Park</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {!loading && data.list && (
        <Movies
          list={data.list}
          onLoadMore={() => { /* infinite scroll */
            return fetchMore({
              variables: { page: page = page + 1 },
              updateQuery: (prev, { fetchMoreResult }) => fetchMoreResult ? { list: [...prev.list, ...fetchMoreResult.list] } : prev
            })
          }} />
      )}
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 35px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;