import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './shared/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} /> */}
          </Switch>
        </>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
