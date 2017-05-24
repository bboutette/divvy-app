import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Profile from './components/Profile';
import AddGoals from './components/AddGoals';
import Learn from './components/Learn';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="Learn" component={Learn} />
      <Route path="AddGoals" component={AddGoals} />
      <Route path="/:profileId" component={ (props) => <Profile {...props} /> } />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>),
  document.getElementById('root')
);
