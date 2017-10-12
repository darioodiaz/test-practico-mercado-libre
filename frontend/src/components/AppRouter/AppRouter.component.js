import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './appRouter.style.css';
import App from '../App/App.component';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>);
}

export default AppRouter;
