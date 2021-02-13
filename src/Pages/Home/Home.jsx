import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

import Styles from './Home.module.css';

const GET_POSTS = gql`
    query GetPosts {
        posts {
            data {
                id
                title
                body
            }
        }
    }
`;

function Home() {
    const { loading, error, data } = useQuery(GET_POSTS);

    return (
        <div className={Styles.home}>
            <h1>Posts</h1>
            <pre>{JSON.stringify(data, undefined, 4)}</pre>
        </div>
    )
}

export default Home;