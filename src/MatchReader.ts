import { convertStrintToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): string[][];
}

export class MatchReader {
  constructor(public reader: DataReader) {}

  static fromCSV(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  load(): MatchData[] {
    return this.reader.read().map((row: string[]): MatchData => (
      [
        convertStrintToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ]
    ));
  }

/*    */
}
