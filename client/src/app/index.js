import React, { Component } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { connect } from 'react-redux';
import { getProfileFetch, logoutUser } from '../store/actions/authAction';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Home from '../components/Home'


export class App extends Component {
  constructor(props) {
    super(props);
    this.props.getProfileFetch();
    console.log(this.props.isAuthenticated);
  }
  render() {
    const { isAuthenticated } = this.props;
    console.log(this.props.isAuthenticated);
    return (
      <BrowserRouter>
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
          />
          <Route path="/login" component={Login} />
          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </BrowserRouter>

    )
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})
const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch()),
  logoutUser: () => dispatch(logoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
