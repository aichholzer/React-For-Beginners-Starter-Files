// Modules
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import App from './App';
import StorePicker from './StorePicker';
import NotFound from './NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' exact component={StorePicker} />
          <Route path='/stores/:storeId' component={App} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
