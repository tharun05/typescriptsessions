"use strict";
function greet(person) {
    console.log(person.firstname);
}
function changeName(person) {
    person.firstname = 'digitallync';
}
var personlist = {
    firstname: 'sam',
    greet: function () {
        console.log(this.firstname);
    }
};
var PersonOne = /** @class */ (function () {
    function PersonOne() {
        this.firstname = 'joel';
        this.lastname = '20';
    }
    PersonOne.prototype.greet = function () {
        console.log(this.firstname);
    };
    return PersonOne;
}());
var personone = new PersonOne();
console.log(personone);
//# sourceMappingURL=interfaces.js.map