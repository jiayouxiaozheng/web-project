import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './component/login';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

ReactDOM.render(
      <Router>
	        <Switch>
	            <Route exact path="/" render={() => <Redirect to="/app/manhua/index" push />} />        
	            <Route path="/app" component={ App } />
	            <Route exact path="/login" component={ Login } />
	        </Switch>
     </Router>
	, document.getElementById('root'));
registerServiceWorker();
