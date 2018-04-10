"use strict";
console.log('-----GENERICS-----');
// simple generic
function simpleGeneric(data) {
    return data;
}
console.log(simpleGeneric('digitallync').length);
console.log(simpleGeneric(23));
console.log(simpleGeneric({ name: 'digitallync', location: 'gachibowli' }));
// better generic function 
function betterGeneric(data) {
    return data;
}
console.log(betterGeneric('digitallync').length);
console.log(betterGeneric(23));
console.log(betterGeneric({ name: 'digitallync', location: 'gachibowli' }));
// built-in generics
var results = [2, 3, 4, 5, 5, 6];
results.push(100);
console.log(results);
// arrays
function printAll(args) {
    args.forEach(function (element) {
        console.log(element);
    });
}
printAll([1, 3, 4, 5, 6, 7]);
var Genericlass = /** @class */ (function () {
    function Genericlass() {
    }
    Genericlass.prototype.calc = function () {
        return +this.baseValue + +this.multiplyValue;
    };
    return Genericlass;
}());
var simpleclassgeneric = new Genericlass();
simpleclassgeneric.baseValue = '20';
simpleclassgeneric.multiplyValue = '20';
console.log(simpleclassgeneric.calc());
//# sourceMappingURL=generics.js.map