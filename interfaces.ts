interface NamedPerson{
    firstname:string;
    greet(lastname:string):void;
    age?:number;
    [propName:string]:any
}

function greet(person:NamedPerson){
    console.log(person.firstname)    
}
function changeName(person:NamedPerson){
    person.firstname = 'digitallync'
}

const personlist : NamedPerson = {
    firstname:'sam',
    greet(){
        console.log(this.firstname)
    }
}

class PersonOne implements NamedPerson{
    firstname:string = 'joel';
    lastname:string = '20';
    greet(){
        console.log(this.firstname)
    }
}

let personone = new PersonOne();
console.log(personone)



