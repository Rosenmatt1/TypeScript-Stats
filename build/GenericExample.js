"use strict";
var HoldAnything = /** @class */ (function () {
    function HoldAnything() {
    }
    HoldAnything.prototype.add = function (a) {
        return a;
    };
    return HoldAnything;
}());
var holdNumber = new HoldAnything();
holdNumber.data = 123;
holdNumber.add(10);
var holdString = new HoldAnything();
holdString.data = "dscdcsdc";
