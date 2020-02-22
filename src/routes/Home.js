import React, { useState, useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Movies from '../components/Movies';
import Sort from '../components/Sort';

const GET_MOVIES = gql`
  query GetMovies($sort_by: String!, $page: Int!) {
    list(sort_by:$sort_by, page: $page) {
      id
      title
      poster_path
    }
  }
`
const sortOption = [
  "popularity.desc",
  "vote_average.desc",
  "release_date.desc",
]

export default () => {
  const [sortIdx, setSortIdx] = useState(0);
  const { loading, error, data, fetchMore, refetch, networkStatus } = useQuery(GET_MOVIES, {
    variables: {
      sort_by: sortOption[sortIdx],
      page: 1
    },
    /* notifyOnNetworkStatusChange: Whether updates to the network status or network error should re-render your component. Defaults to false. */
    // notifyOnNetworkStatusChange: true,
  })
  const fetchByPopularity = () => { setSortIdx(0) };
  const fetchByRating = () => { setSortIdx(1) };
  const fetchByReleaseDate = () => { setSortIdx(2) }

  if (networkStatus === 4) return 'Refetching!';
  if (error) return `Error! ${error}`;

  /* sorting */
  useEffect(() => {
    refetch({
      variables: {
        sort_by: sortOption[sortIdx],
        page: 1
      }
    })
  }, [sortIdx])

  return (
    <Container>
      <Order>
        <Sort id={0} text='Popularity' checked={sortIdx} fetch={fetchByPopularity}></Sort>
        <Sort id={1} text='Rating' checked={sortIdx} fetch={fetchByRating}></Sort>
        <Sort id={2} text='Release Date' checked={sortIdx} fetch={fetchByReleaseDate}></Sort>
      </Order>

      <Header>
        <Title>MovieQL</Title>
        <Subtitle>Movie app built with React, Apollo and GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {!loading && data.list && (
        <Movies
          list={data.list}
          onLoadMore={(page) => { /* infinite scroll */
            return fetchMore({
              variables: { page: page },
              updateQuery: (prev, { fetchMoreResult }) => fetchMoreResult ? { list: [...prev.list, ...fetchMoreResult.list] } : prev.list
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

const Order = styled.div`
  position: absolute;
  top: 28%;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: wrap;
  justify-content: center;
  align-items: center;
`

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  margin-top: 8%;
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 40px;
  @media only screen and (min-width: 1080px) {
    margin-top: 4%;
    font-size: 80px;
  }
`;

const Subtitle = styled.h3`
  font-size: 25px;
  width: 80%;
  text-align: center;
  @media only screen and (min-width: 1080px) {
    font-size: 35px;
  }
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;