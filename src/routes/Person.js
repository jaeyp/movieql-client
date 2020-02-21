import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movies from '../components/Movies';
import Home from '../components/Home';

const GET_PERSON = gql`
  query GetPerson($id: Int!) {
    person(person_id: $id) {
      id
      name
      birthday
      biography
      profile_path
      filmography {
        id
        title
        release_date
        poster_path
      }
    }
  }
`

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_PERSON, {
    variables: { id: parseInt(id) }
  });
  return (
    <Container>
      <Home />
      {loading ? <Loading>Loading...</Loading> : data.person &&
        <>
          <Header>
            <Title>{data.person.name}</Title>
            <Box>
              <Biography>{data.person.biography}</Biography>
            </Box>
          </Header>
          <Movies list={data.person.filmography} />
        </>
      }
    </Container>
  )
}

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
  margin-bottom: 10px;
`;

const Box = styled.div`
  width: 60%;
  height: 30%;
  margin: 1% 15%;
`;

const Biography = styled.div`
  font-size: 18px;
  /* multiline truncation with ellipsis */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;  
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;