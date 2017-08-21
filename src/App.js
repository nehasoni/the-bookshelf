import React, { Component } from 'react';
import logo from './images/book.gif';
import './App.css';
import BookCard from './components/bookCard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The BookShelf</h2>
        </div>
        <div className="cards-container">
            <BookCard/>
        </div>
      </div>
    );
  }
}

export default App;
