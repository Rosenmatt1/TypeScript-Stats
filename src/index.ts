import { MatchReader } from './MatchReader';
import { CsvFileReader }from './CsvFileReader';
import { MatchResult } from './MatchResult';

//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the 'DataReader' inteface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
console.log(matchReader.matches)

let manUnitedWins = 0;

// If Man United was home and won or was away team and won
for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === 'A' ) {
    manUnitedWins++
  }
}


console.log(`Man United won ${manUnitedWins} games`)