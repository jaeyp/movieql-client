import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks'

const GET_MOVIES = gql`{
    list(sort_by:"popularity.desc", page:1) {
        id
        title
        poster_path
    }
}`

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES)

    console.log(loading, error, data)

    if (loading) {
        return "loading..."
    }
    if (data && data.list) {
        return data.list.map(item => <h1>{item.title}</h1>)
    }
};