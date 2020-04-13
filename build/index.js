"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
//Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying the 'DataReader' inteface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
console.log("MatchReader Matches", matchReader.matches);
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Manchester United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
