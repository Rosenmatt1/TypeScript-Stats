"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    // 10/08/2018
    var dateParts = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    console.log(dateParts);
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
