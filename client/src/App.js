import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Login from './components/Login';
import Messaging from "./components/Messaging";
import Homepage from './components/Homepage';

import Signup from "./components/Signup.js/index.js";

import { setContext } from '@apollo/client/link/context';
import SinglePost from './components/SinglePost';

const httpLink = createHttpLink({
  uri: '/graphql', // Uniform Resource Identifier
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//once the utils auth is set up, wrap below in <AuthProvider> so it can't be accessed unless auth

function App() {

  return (
    
      <ApolloProvider client={client}>
        <>
          <Router>
            
            <Nav />
                <Routes>
                  <Route path="/signup" element={<Signup/>} />
                  <Route path="/login"  element={<Login />} />
                  <Route path="" element={<Homepage />} />
                  <Route path="/Messaging" element={<Messaging />} />
                  <Route path="/post/:id" element={<SinglePost />} />
    
                </Routes>
            
          </Router>
        </>
      </ApolloProvider>
  );
}

export default App;