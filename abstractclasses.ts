abstract class Animal{
    abstract makeSound():void;
    move():void {
        console.log('roaming on earth')
    }
    type():void{
        console.log('black')
    }
}


abstract class Department{    
    constructor(public name:string){
    }
    printName():void{
        console.log('department name is '+' '+ this.name)
    }
    abstract printMeeting():void;
}
class AccountingDep extends Department{
    constructor(){
        super('accountint and auditing');
    }
    printMeeting():void{
        console.log('the accounting dept meets each monday at 10am')
    }
}

console.log(typeof Department)
let accountingdep = new AccountingDep();
console.log(accountingdep)
accountingdep.printMeeting();

let department: Department;

department = new AccountingDep();
department.printMeeting();