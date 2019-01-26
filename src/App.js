import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Intro from './component/Intro/Intro';
import Authentication from './container/Authentication/Authentication';
import WishRegister from './container/WishRegister/WishRegister';
import WishList from './container/WishList/WishList';


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Intro} exact/>
        <Route path="/Authentication" component={Authentication}/>
        <Route path="/WishListRegister" component={WishRegister}/>
        <Route path="/WishList" component={WishList}/>
      </div>
    );
  }
}

export default App;
