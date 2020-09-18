import React, { Component } from 'react';
import Items from './containers/Items';
import Navbar from './components/Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Items />
      </div>
    );
  }
}

export default App;
