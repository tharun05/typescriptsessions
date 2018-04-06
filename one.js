var calcMath;
(function (calcMath) {
    calcMath.PI = 2.14;
    function calcRadius() {
        return 2 * calcMath.PI;
    }
    calcMath.calcRadius = calcRadius;
})(calcMath || (calcMath = {}));
var calcMath;
(function (calcMath) {
    function clacRect(width, height) {
        return width * height;
    }
    calcMath.clacRect = clacRect;
})(calcMath || (calcMath = {}));
/// <reference path="two.ts" />
/// <reference path="three.ts" />
console.log(calcMath.clacRect(10, 30));
console.log(calcMath.calcRadius());
