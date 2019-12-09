import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
         <Route path = "/" exact component={Home}/>
         <Route path="/contact" component={Contact}/>
         <Route path="/about" component={About}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
