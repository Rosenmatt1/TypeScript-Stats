import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the 'DataReader' inteface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
console.log("MatchReader Matches", matchReader.matches)

const summary = new Summary(new WinsAnalysis('Manchester United'), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);