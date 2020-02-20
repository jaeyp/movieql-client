import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

const GET_DETAILS = gql`
  query GetDetails($id: Int!) {
    details(movie_id: $id) {
      id
      title
      popularity
      vote_average
      poster_path
      overview
      release_date
      runtime
    }
  }
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_DETAILS, {
    variables: { id: parseInt(id) }
  });
  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data.details.title}</Title>
        {!loading && data.details && (
          <>
            <Subtitle>Popularity: {Math.floor(data.details.popularity)} · Rate: {data.details.vote_average}</Subtitle>
            <Description>{data.details.overview}</Description>
          </>
        )}
      </Column>
      <Poster bg={data && `${IMAGE_PATH}${data.details.poster_path}`} />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  /*border-radius: 14px;*/
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;