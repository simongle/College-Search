import React, { Component } from 'react';
import './App.css';
import Search from './SearchWrapper.js';
class App extends Component {
  render() {
    return (
      <div className="App">
			  <h1>College Spending</h1>
				<Search />        
      </div>
    );
  }
}

export default App;
