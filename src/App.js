import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Main from './components/Main';
import SeeList from './components/SeeList';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Route exact path='/' component={Main}></Route> 
          <Route path='/list' component={SeeList}></Route> 
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
