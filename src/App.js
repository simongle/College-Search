import React, { Component } from 'react';
import './App.css';
import './Fonts.css';
import Search from './SearchWrapper.js';
class App extends Component {
  constructor() {
    super();
		this.state = {
		  data: {}
		}
	}
	componentDidMount() {
	   const data = fetch('https://s3.amazonaws.com/college-search/college_search_data.json', { mode: 'cors' })
		 .then(response => response.json()) 
		 .then((d) => this.setState({ data: d }))
	}

  render() {
    return (
      <div className="App">
				<Search data={this.state.data} />        
      </div>
    );
  }
}

export default App;
