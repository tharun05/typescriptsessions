"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.type = "digitallync";
        this.age = 23;
        this.name = name;
        this.username = username;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    Person.company = "HCL";
    return Person;
}());
var employee = new Person('tharun', 'dillikar');
employee.setType('developer');
console.log(Person.company);
var Persontwo = /** @class */ (function (_super) {
    __extends(Persontwo, _super);
    function Persontwo() {
        return _super.call(this, 'arun', 'dillikar') || this;
    }
    return Persontwo;
}(Person));
var personthree = /** @class */ (function (_super) {
    __extends(personthree, _super);
    function personthree() {
        return _super.call(this) || this;
    }
    return personthree;
}(Persontwo));
var persontwo = new Persontwo();
console.log(persontwo);
//# sourceMappingURL=classes.js.map