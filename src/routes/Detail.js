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
    credits(movie_id: $id) {
      id
      character
      name
      profile_path
    }
  }
`

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_DETAILS, {
    variables: { id: parseInt(id) }
  });
  return (
    <Container>
      <Column>
        {loading ? <Title>"Loading..."</Title> :
          data.details && (
            <>
              <Title style={data.details.title.length < 20 ? { fontSize: '65px' } : { fontSize: '45px' }}>{data.details.title}</Title>
              <Subtitle>Rate: {data.details.vote_average}</Subtitle>
              <Subtitle>Popularity: {Math.floor(data.details.popularity)}</Subtitle>
              {data.credits && <Cast>{data.credits.slice(0, 4).map((item, i) => i < 3 ? `${item.name}, ` : `${item.name}`)}</Cast>}
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
  font-weight: 500;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 24px;
  font-weight: bold;
  color: #252829;
  margin-bottom: 4px;
`;

const Cast = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #252829;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  margin-right: 10px;
  width: 25%;
  height: 70%;
  /*border-radius: 14px;*/
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;