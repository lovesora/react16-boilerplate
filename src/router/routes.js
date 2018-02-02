import React from 'react';

// react router
import {
  BrowserRouter as Router
} from 'react-router-dom';

import { AppRoute } from './app.route';

export const Routes = () => {
  return (
    <Router>
      <AppRoute match={{ url: '' }} />
    </Router>
  );
}
