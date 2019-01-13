import React, { Component } from 'react';
import WishRegister from './container/WishRegister/WishRegister';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Create a Form and a Data base at Firebase</li>
          <li>Link this form with the External Database</li>
          <li>Create a List in another Page</li>
          <li>Add: Remove and Edit Options</li>
          <li>Style it using CSS/SASS</li>
        </ul>
        <p> List will be a class as well as ViewList. The rest may be a function.</p>
        <WishRegister />
      </div>
    );
  }
}

export default App;
