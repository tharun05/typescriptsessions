console.log('-----GENERICS-----');

// simple generic
function simpleGeneric(data:any){
    return data;
}
console.log(simpleGeneric('digitallync').length);
console.log(simpleGeneric(23));
console.log(simpleGeneric({name:'digitallync',location:'gachibowli'}));

// better generic function 

function betterGeneric<T>(data: T){
    return data;
}
console.log(betterGeneric('digitallync').length)
console.log(betterGeneric(23))
console.log(betterGeneric({name:'digitallync',location:'gachibowli'}));

// built-in generics

const results: Array<number> = [2,3,4,5,5,6];
results.push(100);
console.log(results)

// arrays

function printAll<T>(args:T[]){
    args.forEach(element => {
        console.log(element)
    });
}

printAll<number>([1,3,4,5,6,7]);

class Genericlass<T extends number | string, U extends number | string>{
    baseValue: T;
    multiplyValue:U;
    calc(){
        return +this.baseValue + +this.multiplyValue;
    }
}
let simpleclassgeneric = new Genericlass();
simpleclassgeneric.baseValue = '20';
simpleclassgeneric.multiplyValue = '20';
console.log(simpleclassgeneric.calc());