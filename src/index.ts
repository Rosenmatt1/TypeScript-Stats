import { MatchReader } from './MatchReader';
import { CsvFileReader }from './CsvFileReader';
import { MatchResult } from './MatchResult';

//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the 'DataReader' inteface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
console.log(matchReader.matches)



