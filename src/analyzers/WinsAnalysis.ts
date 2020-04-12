import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult'

//Using the implments is optional but allows TypeScript to tell me if I am missing something like the run method.  Must have run, but can have other methods too.
export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        wins++
      }
    }

    return `Man United won ${wins} games`
  }
}