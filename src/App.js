import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter, Redirect, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
// import CreateUser from './components/CreateUser'

import './App.css';
import PostContent from './PostContent';
import PostCard from './components/PostCard';
import LeftCard from './components/LeftCard';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <div className="container">
        <div className="Row">
          <div className="col">
            <LeftCard />
          </div>
        </div>

        <div className="container p-4">
          <Route path="/" exact component={NotesList} />
          <Route path="/edit/:id" component={CreateNote} />
          <Route path="/create" component={CreateNote} />
          <Route path="/PostCard" component={PostCard} />
          <Route path="/PostContent" component={PostContent} />
          {/* <Route path="/user" component={CreateUser} /> */}
          <Redirect to='/' />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
