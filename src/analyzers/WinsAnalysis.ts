import { Analyser } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyser {

  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let win = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.homeWin) win ++;
      else if (match[2] === this.team && match[5] === MatchResult.awayWin) win ++;
    }

    return `${this.team} won ${win} games`
  }
}