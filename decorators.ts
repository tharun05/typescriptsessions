function logged(constructorFun:Function){
    console.log(constructorFun)
}

@logged
class Employee{
    constructor(){
        console.log('this is from emp constructor')
    }
}
let emp = new Employee();
console.log(emp);

function logging(value:boolean){
    return value ? logged :null;
}


@logging(false)
class Employeeone{

}
