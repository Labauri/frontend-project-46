import gendiff from '../src/index.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('compare nested JSON files (default stylish format)', () => {
  const filepath1 = path.join(__dirname, '../__fixtures__/file1.json');
  const filepath2 = path.join(__dirname, '../__fixtures__/file2.json');

  const result = gendiff(filepath1, filepath2);
  expect(result).toMatchSnapshot();
});

test('compare nested JSON files in plain format', () => {
  const filepath1 = path.join(__dirname, '../__fixtures__/file1.json');
  const filepath2 = path.join(__dirname, '../__fixtures__/file2.json');

  const result = gendiff(filepath1, filepath2, 'plain');
  expect(result).toMatchSnapshot();
});

test('compare nested JSON files in JSON format', () => {
  const filepath1 = path.join(__dirname, '../__fixtures__/file1.json');
  const filepath2 = path.join(__dirname, '../__fixtures__/file2.json');

  const result = gendiff(filepath1, filepath2, 'json');
  expect(result).toMatchSnapshot();
});
