import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Component/login/index';
import './App.css';

import  Dashboard  from './Component/dashboard/dashboard';
import  Profile  from './Component/profile/profile';
import Repos from './Component/Repos/Repos';


const App: React.FC= () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login} />

          <Route path='/Dashboard' exact component={Dashboard} />
          <Route path='/Profile' exact component={Profile} />
          <Route path='/repos/:val' exact component={Repos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
