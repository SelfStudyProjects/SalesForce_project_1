/**
 * License Description 1
 *  
 * License Description 2
**/

/**
trigger를 쓰는 수준이 개발자의 실력을 보여준다.
데이터들이 많이 들어올 때 들어오는 흐름을 조절해준다.
delete에서는 old만 있음
insert에서는 new만 있음

Before일 때는 record 값을 바꿀 수가 있음

**/

trigger AccountTrigger on Account (
    before insert
    ,before update
    ,before delete
    ,after insert
    ,after update
    ,after delete
    ,after undelete
) {

    if(Trigger.isBefore && Trigger.isInsert) {
        System.debug('Trigger -> before -> insert');

        List<Account> upd = new List<Account>();
        for(Account acc : Trigger.new){
            acc.Name = acc.Name + 'new account';
            upd.add(acc);
        }

        update upd;
    }

    if(Trigger.isAfter && Trigger.isInsert) {
        System.debug('Trigger -> before -> insert');

        List<Contact> Icon = new List<Contact>();
        for(Account acc : Trigger.new){
            Contact con = new Contact();
            con.AccountId = acc.Id;
            con.LastName = 'Test';

            Icon.add(con);
        }

        insert Icon
    }

    List<Account> oldList = Trigger.old;
    List<Account> newList = Trigger.new;



    Map<Id, Account> newmap = Trigger.newMap;
    Map<Id, Account> oldmap = Trigger.oldMap;
}