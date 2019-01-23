import React, { Component } from 'react';
import { Route, NavLink} from 'react-router-dom';

import WishRegister from './container/WishRegister/WishRegister';
import WishList from './container/WishList/WishList';
import Intro from './component/Intro/Intro';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/WishList">Wish List</NavLink>
        </nav>
        <Route path="/" component={Intro} exact/>
        <Route path="/WishListRegister" component={WishRegister}/>
        <Route path="/WishList" component={WishList}/>
      </div>
    );
  }
}

export default App;
