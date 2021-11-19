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

function App() {
  return (
    <HashRouter>
      <Navigation />

      <div className="container p-4">
        <Route path="/PsicologiaCarlos" component={NotesList} />
        <Route path="/PsicologiaCarlos/edit/:id" component={CreateNote} />
        <Route path="/PsicologiaCarlos/create" component={CreateNote} />
        <Route path="/PsicologiaCarlos/PostCard" component={PostCard} />
        <Route path="/PsicologiaCarlos/PostContent" component={PostContent} />
        {/* <Route path="/user" component={CreateUser} /> */}
        <Redirect to='/PsicologiaCarlos' />
      </div>
    </HashRouter>
  );
}

export default App;
