import React, { Component } from 'react';
import { Route, NavLink} from 'react-router-dom';

import WishRegister from './container/WishRegister/WishRegister';
import WishList from './container/WishList/WishList';
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

        <nav>
          <NavLink to="/">Wish Register</NavLink>
          <NavLink to="/WishList">Wish List</NavLink>
        </nav>
        <Route path="/" component={WishRegister} exact/>
        <Route path="/WishList" component={WishList}/>
      </div>
    );
  }
}

export default App;
