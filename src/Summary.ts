import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]):string;
}

export interface OutputTarget {
  print(report:string): void
}

//this is composition
export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}

new Summary(new WinsAnalysis(), new ConsoleReport());