/**
 * @description       : 
 * @author            : developer@example.com
 * @group             : 
 * @last modified on  : 2025-07-08
 * @last modified by  : developer@example.com
**/
import { LightningElement } from 'lwc';
 
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
 
const columns = [
    {
        label: 'Account Name',
        fieldName: 'Name'
    },
    {
        label: 'Phone',
        fieldName: 'Phone'
    },
    {
        label: 'Type',
        fieldName: 'Type'
    },
    {
        label: 'Owner',
        fieldName: 'Owner.Name'
    }
];
 
export default class AccountList extends LightningElement {
    columns = columns;
 
    accounts = [];
 
    connectedCallback(){
        this.getAccounts();
    }
 
    async getAccounts(){
        try {
            const result = await getAccountList();
            this.accounts = result;
            let accountIds = this.accounts.map((account) => {
                return account.Id;
            });
            this.getContacts(accountIds);
        } catch(e){
            console.error(e);
        }
    }
 
    async getContacts(accountIds){
        try {
            const result = await getContactList({
                accountIds : accountIds
            });
            console.log('getContactList result -> ', result);
        } catch(e) {
            console.error(e);
        }
    }
 
}
 