import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from "../routes/Home"
import Detail from "../routes/Detail"
import Person from "../routes/Person"

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/person/:id" component={Person} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </HashRouter>
  );
}

export default App;
