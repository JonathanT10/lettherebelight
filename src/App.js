import React from 'react';
import { Switch, Router, BrowserRouter } from 'react-router-dom';
import Begining from './components/begining';

function App() {
  return (
    <Provider>
    <div>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Begining} />
    </Switch>
    </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
