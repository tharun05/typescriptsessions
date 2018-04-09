class Person{
    name:string;
    private type:string = "digitallync";
    username:string;
    static company:string = "HCL";
    protected age:number = 23;
    constructor(name:string,username:string){
        this.name = name;
        this.username = username;
    }
    printAge(){
        console.log(this.age);
    }
    setType(type:string){
        this.type = type;
        console.log(this.type)
    }
}

let employee = new Person('tharun','dillikar');
employee.setType('developer');
console.log(Person.company);

class Persontwo extends Person{
    constructor(){
        super('arun','dillikar');
     
    }
}
class personthree extends Persontwo{
    constructor(){
        super();
      
    }
}
let persontwo = new Persontwo();
console.log(persontwo);