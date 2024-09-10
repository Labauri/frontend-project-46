import gendiff from '../src/index.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('compare flat YAML files', () => {
  const filepath1 = path.join(__dirname, '../__fixtures__/filepath1.yml');
  const filepath2 = path.join(__dirname, '../__fixtures__/filepath2.yml');

  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
  const result = gendiff(filepath1, filepath2);
  expect(result).toBe(expected);
});
