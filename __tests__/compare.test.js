import { readFile, parseFile } from '../src/parser.js';
import compareFiles from '../src/compare.js';

test('compares two JSON files correctly', () => {
  const fileContent1 = readFile('__fixtures__/file1.json');
  const fileContent2 = readFile('__fixtures__/file2.json');

  const data1 = parseFile(fileContent1);
  const data2 = parseFile(fileContent2);

  const result = compareFiles(data1, data2);

  const expectedResult = [
    '  host: hexlet.io',
    '- timeout: 50',
    '+ timeout: 20',
    '- proxy: 123.234.53.22',
    '- follow: false',
    '+ verbose: true',
  ].join('\n');

  expect(result).toBe(expectedResult);
});
