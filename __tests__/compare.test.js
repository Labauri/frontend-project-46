import { readFile, parseFile } from '../src/parser.js';
import compareFiles from '../src/compare.js';

describe('compareFiles', () => {
  it('compares two JSON files correctly', () => {
    const file1 = readFile('file1.json');
    const file2 = readFile('file2.json');

    const data1 = parseFile(file1);
    const data2 = parseFile(file2);

    const result = compareFiles(data1, data2);

    expect(result).toMatchInlineSnapshot(`
      "- follow: false
        host: hexlet.io
      - proxy: 123.234.53.22
      - timeout: 50
      + timeout: 20
      + verbose: true"
    `);
  });
});
