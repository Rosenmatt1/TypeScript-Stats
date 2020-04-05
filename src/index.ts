import fs from 'fs';

// console.log("Index fule works")

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map(
    (row: string): string[] => {
      return row.split(',');
    }
  );

console.log(matches)
// let manUnitedWins = 0;