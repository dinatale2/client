import React from 'react';
import InputHelper from './VInputHelper';
import {observer,Provider} from "mobx-react";

@observer
export default class MetadataStep extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const metadata = this.props.metadataStore;
		
		
		return (
				
	            <div className="container-fluid form-horizontal">
	            
	            
	            <Provider dataStore={metadata}>
	            <div>
	            {metadata.getValue("repository_link") &&
	            <div className="form-group form-group-sm row">
	        		<InputHelper field="repository_link" label="Repository Link: " elementType="display" />
	        	</div>
	            }
	            
	            
	            
	    	    <div className="form-group form-group-sm row">
	            	<InputHelper field="software_title" label="Software Title" elementType="input" />
	            </div>
	            
	            
	            <div className="form-group form-group-sm row">
	            	<InputHelper field="acronym" label="Short Title or Acronym" elementType="input"  />                
	            </div>
	            
	            <div className="form-group form-group-sm row">
	            	<InputHelper field="doi" label="DOI" elementType="input"  />              
	            </div>
	            
	            	
	            <div className="form-group form-group-sm row">
	            	<InputHelper field="description" label="Description/Abstract" elementType="textarea" />
	            </div>
	            	
	            	
	           <div className="form-group form-group-sm row">
	            	<InputHelper divStyle="col-sm-10" field="date_of_issuance" label="Date of Issuance" elementType="date"  />
	            </div>
	            	
	            	
	            <hr/>	
	            <div className="form-group form-group-sm row">
	            <InputHelper field="keywords" label="Keywords" elementType="input" value={metadata.keywords} />
	            <InputHelper field="other_special_requirements" label="Other Special Requirements" elementType="input" />
	            </div>
	            
	            <div className="form-group form-group-sm row">
	            <InputHelper field="related_software" label="Related Software" elementType="input" />
	            <InputHelper field="site_accession_number" label="Site Accession Number" elementType="input"  />
	            </div>
	            
	            </div>
                </Provider>

               
                </div>
		);
	}




}
