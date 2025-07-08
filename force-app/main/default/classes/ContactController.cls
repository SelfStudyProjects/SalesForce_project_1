/**
 * License Description 1
 *  
 * License Description 2
**/

public with sharing class ContactController {
 
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String accountId){
        try {
            String query = 'SELECT Id, LastName, FirstName, Title ';
            query += 'FROM Contact WHERE AccountId = :accountId';
 
            return Database.query(query, AccessLevel.USER_MODE);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
 
}