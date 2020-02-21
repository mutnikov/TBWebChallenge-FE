import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  LogIn, SignUp, NotFound, Dashboard, News, Sport, Tasks, Photos,
} from './containers';
import './App.scss';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { healthCheck } from './store/actions/healthCheck';

const App = ({ user, healthCheck }) => {
  const AuthenticatedRoutes = () => user && (
    <div>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/sport">
        <Sport />
      </Route>
      <Route path="/tasks">
        <Tasks />
      </Route>
      <Route path="/photos">
        <Photos />
      </Route>
    </div>
  );

  useEffect(() => {
    healthCheck();
  });

  return (
    <Router>
      <div className="page">
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (user
                ? <Redirect to={{ pathname: '/dashboard' }} />
                : <Redirect to={{ pathname: '/login' }} />)}
            />
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
            <AuthenticatedRoutes />
            <Redirect to={{ pathname: '/404' }} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

App.propTypes = {
  user: PropTypes.shape({}),
  healthCheck: PropTypes.func,
};


const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  healthCheck: () => dispatch(healthCheck()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
