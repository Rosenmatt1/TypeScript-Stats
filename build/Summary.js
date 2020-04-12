"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//this is composition
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    return Summary;
}());
exports.Summary = Summary;
new Summary(new WinsAnalysis(), new ConsoleReport());
