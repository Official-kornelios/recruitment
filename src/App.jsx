import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Apply from './components/Apply';
import Process from './components/Process';
import Teams from './components/Teams';
import Life from './components/Life';
import People from './components/People';
import Programs from './components/Programs';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/Search_and_Apply" component={Apply} />
          <Route path="/Our_Process" component={Process} />
          <Route path="/Teams" component={Teams} />
          <Route path="/Life_at_TIS" component={Life} />
          <Route path="/People" component={People} />
          <Route path="/Programs" component={Programs} />
        </div>
      </Router>
    );
  }
}

export default App;
