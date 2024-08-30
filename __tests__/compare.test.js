import { readFile, parseFile } from '../src/parser.js';
import compareFiles from '../src/compare.js';

describe('compareFiles', () => {
  it('compares two JSON files correctly', () => {
    const file1 = readFile('__fixtures__/file1.json');
    const file2 = readFile('__fixtures__/file2.json');

    const data1 = parseFile(file1);
    const data2 = parseFile(file2);

    const result = compareFiles(data1, data2);
    const expected = readFile('__fixtures__/expected_file.json');

    expect(result).toBe(expected);
  });
});
