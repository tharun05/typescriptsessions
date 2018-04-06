var calcMath;
(function (calcMath) {
    calcMath.PI = 2.14;
    function calcRadius() {
        return 2 * calcMath.PI;
    }
    calcMath.calcRadius = calcRadius;
})(calcMath || (calcMath = {}));
