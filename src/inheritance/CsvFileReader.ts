import fs from 'fs';

export abstract class CsvFileReader<T> {

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): T[] {
    return fs
    .readFileSync(this.filename, { encoding: 'utf-8' })
    .split('\n')
    .map((row: string): string[] => row.split(',')) 
    .map(this.mapRow)
  }
}