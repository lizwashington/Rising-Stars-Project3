import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS, QUERY_ME_BASIC } from '../../utils/queries';
import PostList from '../PostList';
import PostForm from '../PostForm';
import Auth from '../../utils/auth';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_POSTS);
  // use object destructuring to extract 'data' from the useQuery hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  const posts = data?.posts || [];
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className='flex-row justify-space-between'>
        {loggedIn && (
          <div className='col-12 mb-3'>
            <PostForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
              <PostList posts={posts} title='Baby Feed ' />
            )}
        </div>
        {loggedIn && userData ? (
          <div className='col-12 col-lg-3 mb-3'>
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;