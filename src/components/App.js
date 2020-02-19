import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from "../routes/Home"
import Detail from "../routes/Detail"

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
