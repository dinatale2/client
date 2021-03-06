import React from 'react';
import MetadataField from '../field/MetadataField';
import {observer,Provider} from "mobx-react";

@observer
export default class SupplementalInfoStep extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const countries = [
			{label: 'United States', value: 'United States'},
			{label: 'Canada', value: 'Canada'},
			{label: 'France', value: 'France'},
			{label: 'Switzerland', value: 'Switzerland'},
			{label: 'United Kingdom', value: 'United Kingdom'}
			];



		return (

	            <div className="container-fluid form-horizontal">
	            	<MetadataField field="acronym" label="Short Title or Acronym" elementType="input"  />
	            	<MetadataField  field="country_of_origin" label="Country of Origin" options={countries} elementType="select"  />
	            	<MetadataField field="keywords" label="Keywords" elementType="input" />
	            	<MetadataField field="other_special_requirements" label="Other Special Requirements" elementType="input" />
	              <MetadataField field="site_accession_number" label="Site Accession Number" elementType="input"  />
                </div>
		);
	}




}
