/**
 * License Description 1
 *  
 * License Description 2
 */

import { LightningElement, api, track } from 'lwc';
 
import getContactList from '@salesforce/apex/ContactController.getContactList';
 
const columns = [
    {
        label: 'First Name',
        fieldName: 'FirstName'
    },
    {
        label: 'Last Name',
        fieldName: 'LastName'
    },
    {
        label: 'Title',
        fieldName: 'Title'
    },
    {
        label: 'Phone',
        fieldName: 'Phone'
    }
];
 
export default class ContactList extends LightningElement {
 
    @api accountId;
 
    @track columns = columns;
    @track contacts = [];
 
 
 
    connectedCallback(){
        this.getContacts();
    }
 
    async getContacts(){
        try {
            const result = await getContactList({
                accountId : this.accountId
            });
            this.contacts = result;
        } catch(e) {
            console.error(e);
        }
    }
 
    handleRowSelection(event){
        event.preventDefault();
        event.stopPropagation();
        
        try {
            const selectedRows = event.detail.selectedRows;
            console.log('selectedRows: ', selectedRows);

            const customEvent = new CustomEvent('rowselection', {
                detail: {value : selectedRows
                }
            });
            this.dispatchEvent(customEvent);{
                detail: {
                    values : selectedRows
                }   
            });
            this.dispatchEvent(customEvent);
        } catch(e) {
            console.error(e);
        }
    }
    @api
    method(param){
        try {
            console.log('method param: ', param);
        } catch(e){
            console.error(e);
        }
    }
}