import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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
  if (loading) {
    return "loading";
  }
  if (data && data.details) {
    return data.details.title;
  }
};