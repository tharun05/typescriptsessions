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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('roaming on earth');
    };
    Animal.prototype.type = function () {
        console.log('black');
    };
    return Animal;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('department name is ' + ' ' + this.name);
    };
    return Department;
}());
var AccountingDep = /** @class */ (function (_super) {
    __extends(AccountingDep, _super);
    function AccountingDep() {
        return _super.call(this, 'accountint and auditing') || this;
    }
    AccountingDep.prototype.printMeeting = function () {
        console.log('the accounting dept meets each monday at 10am');
    };
    return AccountingDep;
}(Department));
console.log(typeof Department);
var accountingdep = new AccountingDep();
console.log(accountingdep);
accountingdep.printMeeting();
var department;
department = new AccountingDep();
department.printMeeting();
//# sourceMappingURL=abstractclasses.js.map