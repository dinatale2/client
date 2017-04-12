import {observable} from 'mobx';
import BaseData from './BaseData';
import Validation from '../utils/Validation';

const validation = new Validation();
export default class VMetadata extends BaseData {

    constructor() {
    	
        @observable metadata = {
                "code_id": 0,
                "open_source": '',
                "repository_link": '',
                "software_title": '',
                "acronym": '',
                "doi": '',
                "description": '',
                "country_of_origin": '',
                "date_of_issuance" : '',
                "keywords": '',
                "site_accession_number": '',
                "other_special_requirements": '',
                "related_software": '',
                "licenses": [],
                "access_limitations": [],
                "developers": [],
                "contributors": [],
                "sponsoring_organizations" : [],
                "contributing_organizations" : [],
                "research_organizations" : [],
                "related_identifiers" : [],
                "recipient_name": '',
                "recipient_email": '',
                "recipient_phone": '',
                "recipient_org": '',
                "files": []
            }
        
        /*
	    "files": {required:false, completed:false, hasError:false, validations: [], Panel: 1, errorMessage: ''},
    	        "country_of_origin": {required:true, completed:false, hasError:false, validations: [], Panel: 2, errorMessage: ''},
"licenses": {required:true, completed:false, hasError:false, validations: [], Panel: 3, errorMessage: ''},
        "access_limitations": {required:false, completed:false, hasError:false, validations: [], Panel: 3, errorMessage: ''},	        "developers": {required:true, completed:false, hasError:false, validations: [], Panel: 4, errorMessage: ''},
      	        "contributors": {required:true, completed:false, hasError:false, validations: [], Panel: 4, errorMessage: ''},
      	        "sponsoring_organizations" : {required:true, completed:false, hasError:false, validations: [], Panel: 5, errorMessage: ''},
      	        "contributing_organizations" : {required:false, completed:false, hasError:false, validations: [], Panel: 5, errorMessage: ''},
      	        "research_organizations" : {required:true, completed:false, hasError:false, validations: [], Panel: 5, errorMessage: ''},
      	        "related_identifiers" : {required:false, completed:false, hasError:false, validations: [], Panel: 6, errorMessage: ''},
*/
        @observable infoSchema = {

    		   	"repository_link": {required:true, completed:false, validations: ["URL"], Panel: 1, errorMessage: ''},
    	        "software_title": {required:true, completed:false, validations: [], Panel: 2, errorMessage: ''},
    	        "acronym": {required:false, completed:false, validations: [], Panel: 2, errorMessage: ''},
    	        "doi": {required:false, completed:false, validations: ["DOI"], Panel: 2, errorMessage: ''},
    	        "description": {required:true, completed:false, validations: [], Panel: 2, errorMessage: ''},

    	        "date_of_issuance" : {required:true, completed:false, validations: [], Panel: 2, errorMessage: ''},
    	        "keywords": {required:false, completed:false, validations: [], Panel: 2, errorMessage: ''},
    	        "site_accession_number": {required:false, completed:false, validations: [], Panel: 2, errorMessage: ''},
    	        "other_special_requirements": {required:false, completed:false, validations: [], Panel: 2, errorMessage: ''},
    	        "related_software": {required:false, completed:false, validations: [], Panel: 2, errorMessage: ''},

    	        "recipient_name": {required:true, completed:false, validations: [], Panel: 7, errorMessage: ''},
    	        "recipient_email": {required:true, completed:false, validations: ["Email"], Panel: 7, errorMessage: ''},
    	        "recipient_phone": {required:true, completed:false, validations: ["Phone"], Panel: 7, errorMessage: ''},
    	        "recipient_org": {required:true, completed:false, validations: [], Panel: 7, errorMessage: ''},
       }
        
        let props = {"fieldMap" : metadata, "infoSchema": infoSchema};
        
        super(props);
    	
    }


   getPanelStatus(panelNumber) {

     let panelStatus = {"remainingRequired" : 0, "remainingOptional": 0, "errors" : "", "hasRequired" : false, "hasOptional" : false}
     const infoSchema = this.getInfoSchema();
     for (var field in infoSchema) {
     const obj = this.getInfo(field);
     
     if (obj.Panel == panelNumber) {

     if (obj.errorMessage)
    	 panelStatus.errors += obj.errorMessage + " ";
     

     if (obj.required) {
       panelStatus.hasRequired = true;
       if (!obj.completed)
           panelStatus.remainingRequired++;

     } else {
       panelStatus.hasOptional = true;
       if (!obj.completed)
           panelStatus.remainingOptional++;

     }


     }


     }

     return panelStatus;
   }




    updateMetadata(data) {
    	const oldRepo = new String(this.metadata.repository_link);
    	data.repository_link = oldRepo;
    	this.metadata = data;

    }




}