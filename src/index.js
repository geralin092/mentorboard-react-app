import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeComponent from './components/home';
import MentorsComponent from './components/mentors';
import MenteesComponent from './components/mentees';
import NotFoundComponent from './components/404';

const AppWithProps = ({ component: Component, ...rest }) => {
  return (
    <Component {...rest} />
  );
};

ReactDOM.render(
  <Router>
      <Switch>
      <Route exact path="/404" component={NotFoundComponent} />  
        <AppWithProps component={App}>
          <Route exact path="/" component={ HomeComponent } />
          <Route exact path="/mentees" component={ MenteesComponent } />
          <Route exact path="/mentors" component={ MentorsComponent } />
          {/* <Route path='*' exact={true} component={NotFoundComponent} /> */}
        </AppWithProps>
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
