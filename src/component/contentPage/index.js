import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Manhua from "./../manhua"
import Upload from "./../manhua/upload"
import NotFound from './../notFound';

class ContentPage extends Component {
    constructor(props){
    	super(props);
    	this.state={

    	}
    }

    render(){
    	return (
	    	<div id="content-box">
	    		  <Switch>
	    		  	       {/* 漫画 */}
	    		  	       <Route exact path="/app/manhua/index" component={ Manhua }></Route>
	    		  	       <Route exact path="/app/manhua/upload" component={ Upload } ></Route>

	    		  	       <Route component={ NotFound } />
	    		  </Switch>
	    	</div>
    	)
    }
}

export default ContentPage;