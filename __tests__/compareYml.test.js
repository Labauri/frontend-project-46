import { readFile } from '../src/parser.js';
import yaml from 'js-yaml';
import compareFiles from '../src/compare.js';

describe('compareFiles with YAML', () => {
  it('compares two YAML files correctly', () => {
    const file1Content = readFile('filepath1.yml');
    const file2Content = readFile('filepath2.yml');

    const data1 = yaml.load(file1Content);
    const data2 = yaml.load(file2Content);

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
