import React, { Component } from 'react';
import { Route, withRouter} from 'react-router-dom';
import { connect } from "react-redux";

import Intro from './component/Intro/Intro';
import Authentication from './container/Authentication/Authentication';
import Logout from './container/Authentication/Logout/Logout';
import WishRegister from './container/WishRegister/WishRegister';
import WishList from './container/WishList/WishList';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" render={(propsRouter) => <Intro {...propsRouter} isSignIn={this.props.token} />} exact/>
        <Route path="/Authentication" component={Authentication} />
        <Route path="/Logout" component={Logout} />
        <Route path="/WishListRegister" component={WishRegister} />
        <Route path="/WishList" component={WishList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authSignIn.idToken
  }
}

export default withRouter(connect(mapStateToProps)(App));
