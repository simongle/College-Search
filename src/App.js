import React, { Component } from 'react';
import './App.css';
import './Fonts.css';
import Search from './SearchWrapper.js';
class App extends Component {
  render() {
    return (
      <div className="App">
				<Search />        
      </div>
    );
  }
}

export default App;
