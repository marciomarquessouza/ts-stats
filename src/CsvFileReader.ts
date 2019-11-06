import fs from 'fs';

export class CsvFileReader {

  constructor(public filename: string) {}

  read(): string[][] {
    return fs
    .readFileSync(this.filename, { encoding: 'utf-8' })
    .split('\n')
    .map((row: string): string[] => row.split(','))
  }
}