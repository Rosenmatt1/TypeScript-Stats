import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv')
reader.read()

//enum - enumeration - shows we are referencing closely related values
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUnitedWins = 0;

// If Man United was home and won or was away team and won
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === 'A' ) {
    manUnitedWins++
  }
}


console.log(`Man United won ${manUnitedWins} games`)