/**
 * License Description 1
 *  
 * License Description 2
**/

public with sharing class AccountController {
 
    public Account myAccount { get; set; }
 
    public AccountController() {
        System.debug('AccountController');
    }
 
    public AccountController(String name) {
        if(name != null){
            myAccount = new Account( Name = name );
            insert myAccount;
        }
    }
 
    public List<Account> getAccountList() {
 
        String query = 'SELECT Id, Name FROM Account';
        List<Account> lacc = Database.query(query, AccessLevel.USER_MODE);
 
        if(!lacc.isEmpty()) {
            for(Account acc : lacc) {
                system.debug(acc.Id + ' ' + acc.Name);
            }
        }
 
        return lacc;
    }
 
    public List<Account> getAccount4Page(Integer pageNum, Integer pageSize){
        ApexPages ap = Page.AccountList;
        ap.getParameters.put('pageNum', String.valueOf(pageNum));
        ap.getParameters.put('pageSize', String.valueOf(pageSize));
 
        http h = new http();
        httprequest req = new httpRequest();
        req.setEndpoint(ap.getUrl());
        req.setMethod('GET');
        HttpResponse res = h.send(req);
        // Blob d = ap.getContent();
        list<Account> lacc = getAccountList2(d);
        
        return lacc;
    }
 
    public List<Account> getAccountList2(Blob data){
 
        for(integer i = pageStart; i < pageStart + pageSize; i++){
            if(i < lacc.size()){
                lacc[i] = lacc[i];
            }
        }
        return lacc;
    }
}