/**
 * @description       : 
 * @author            : developer@example.com
 * @group             : 
 * @last modified on  : 2025-07-08
 * @last modified by  : developer@example.com
**/
import { LightningElement, api } from 'lwc';
 
export default class ParentComponent extends LightningElement {
    @api recordId;
    @api objectApiName;
 
    connectedCallback(){
        console.log('parentComponent connectedCallback recordId -> ', this.recordId);
        console.log('parentComponent connectedCallback objectApiName -> ', this.objectApiName);
    }
 
    handleSelection(event){
        event.preventDefault();
        event.stopPropagation();
 
        try {
            const selectedRows = event.detail.value;
            console.log('parentComponent handleSelection -> ', selectedRows);
        } catch(e){
            console.error(e);
        }
    }
 
    handleClick(event){
        event.preventDefault();
        event.stopPropagation();
 
        try {
            // const child = this.template.querySelector('c-contact-list');
            const child = this.template.querySelector('.dkbmc-contact-list');
            if(child){
                child.method('parameter');
            }
 
 
            // this.refs.conatctList.method('parameter');
            if(this.refs.contactList){
                this.refs.conatctList.method('parameter');
            }
        } catch(e){
            console.error(e);
        }
    }
} 