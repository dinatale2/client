import React from 'react';
import ReactDOM from 'react-dom';
import {doAjax, doAuthenticatedAjax, appendQueryString, getQueryParam} from '../utils/utils';

export default class ConfirmUser extends React.Component {
	constructor(props) {
		super(props);
		this.parseConfirm = this.parseConfirm.bind(this);
		this.parseError = this.parseError.bind(this);
		this.state = {"showSuccess" : false, "showError" : false, "apiKey" : ""};

	}


    componentDidMount() {
		doAjax('GET', appendQueryString("/api/user/confirm"), this.parseConfirm, undefined, this.parseError);
    }
	
	parseConfirm(data) {
		this.setState({"showSuccess": true, "apiKey" : data.apiKey});
		console.log("Success!")

	}
	
	parseError() {
		this.setState({"showError" : true});
		console.log("Encountered Error.");
	}
	

	
    render() {
    	return (
        <div>
        {this.state.showSuccess &&
        <h2>Thank you for registering with DOE Code. Your account has been confirmed. The following is your API Key: 
        {this.state.apiKey}	
        </h2>	
        }
        
        {this.state.showError &&
        <h2>The confirmation code provided does not exist or has expired. To register a new account click <a href="/register"> here</a>. </h2>		
        }
        
        </div>
    	)
    }
}