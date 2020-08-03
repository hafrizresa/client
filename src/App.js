import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

//containers
import Home from './containers/Home';
import Checkout from './containers/Checkout';

//components
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/checkout' exact component={Checkout} />
        <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
