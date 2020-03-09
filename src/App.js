import React, { Component } from 'react';
import NewsApp from './container/news';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header_background" />
        <h1 className="header_title">LATEST 100 CORONAVIRUS (COVID-19) UPDATES WORLDWIDE</h1>
        <NewsApp />
      </div>
    );
  }
}


export default App;
