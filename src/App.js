import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import { Home } from './pages/Home';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <div className="Home">
                <Home />
              </div>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
