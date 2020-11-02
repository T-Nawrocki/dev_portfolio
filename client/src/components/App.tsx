import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about-me" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} /> */}
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
