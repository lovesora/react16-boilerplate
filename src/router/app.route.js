// react
import React from 'react';
import { Route } from 'react-router-dom';

import HomeRoute from './home.route';
import PostRoute from './post.route';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export const AppRoute = ({ match }) => {
  return (
    <div>
      <Route path={`${match.url}/home`} component={HomeRoute}/>
      <Route path={`${match.url}/post/:id`} component={PostRoute}/>
    </div>
  );
}
