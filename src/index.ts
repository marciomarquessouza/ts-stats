import { MatchReader } from './MatchReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReports';

const matches = MatchReader.fromCSV('football.csv').load();
const winAnalysis = new WinsAnalysis('Arsenal');
const consoleReport = new ConsoleReport();

const summary = new Summary(winAnalysis, consoleReport);

summary.buildAndPrintReport(matches);
