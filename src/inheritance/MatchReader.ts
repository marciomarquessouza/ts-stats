import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../MatchResult';
import { convertStrintToDate } from '../utils';

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {

  mapRow(row: string[]): MatchData {
    return [
      convertStrintToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ];
  }
}