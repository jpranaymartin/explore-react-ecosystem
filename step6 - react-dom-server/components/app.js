import React from 'react';
import TaskList from './list.js';
import TaskForm from './form.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const TaskApp = ({children}) => (
  <Router>
    <div>
      <Link to="/">List</Link> <Link to="/add">Add</Link> <a href="/about">About</a>
      <Route exact path="/" component={TaskList}/>
      <Route path="/add" component={TaskForm}/>
  </div>
  </Router>
);

export default TaskApp;
