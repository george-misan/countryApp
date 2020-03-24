import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Countries from './components/countries/Countries';
import Country from './components/countries/Country';
import CountryState from './context/country/countryState';

function App() {
  return (
    <CountryState>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Countries} />
            <Route exact path="/country/:name" component={Country} />
          </Switch>
        </div>
      </Router>
    </CountryState>
  );
}

export default App;
