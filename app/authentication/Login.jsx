import React from 'react';
import ReactDOM from 'react-dom';
import {doAjax, appendQueryString, getQueryParam} from '../utils/utils';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.check = this.check.bind(this);
		this.parseCheck = this.parseCheck.bind(this);
		this.login = this.login.bind(this);
		this.parseLoginResponse = this.parseLoginResponse.bind(this);
		this.parseError = this.parseError.bind(this);
		
	}
	
	
	check() {
		
	    $.ajax({
	        url: "/api/authentication/check",
	        cache: false,
	        method: "GET",
	        beforeSend: function(request) {
	        	request.setRequestHeader("Authorization", "Bearer " + document.cookie);
	        },
	        contentType: "application/json; charset=utf-8",
	        success: this.parseCheck,
	        error: this.parseError
	      });
		//doAjax('GET', "/api/authentication/check", this.parseCheck);
	}
	
	parseCheck() {
		console.log("Checked")
	} 
	
	login() {
		const obj = {"nothing" : "nothing"};
    	doAjax('POST', '/api/login/login',this.parseLoginResponse, obj, this.parseError);
	}
	
	parseLoginResponse(data) {
		document.cookie = data.accessToken;
		console.log("Logged in");
	}
	
	parseError() {
		console.log("I'm being called");
	}
	
	render() {
		
		return(
		<div className="container">
		
		<input type="hidden" name="rememberMe" value="false"/>
		
	    <div className="form-group form-group-sm row">
	    <input type="text" name="username"/>
	    </div>
	    
	    <div className="form-group form-group-sm row">
	    <input type="password" name="password"/>
	    </div>
		
		
		<button type="button" className="btn btn-primary btn-lg" onClick={this.login}>
		Login
		</button>
		
		<button type="button" className="btn btn-lg" onClick={this.check}>
		Check
		</button>
		
		</div>);
		
	}
}