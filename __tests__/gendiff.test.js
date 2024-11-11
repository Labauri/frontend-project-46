import path from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixture = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixture(filename), 'utf-8');

test('test1 genDiff .json default=stylish formatter', () => {
  const file1 = getFixture('file1.json');
  const file2 = getFixture('file2.json');
  const response = gendiff(file1, file2);
  const fileContent = readFixtureFile('stylish_result.txt').trim();
  expect(response.trim()).toEqual(fileContent);
});

test('test2 genDiff .yml default=stylish formatter', () => {
  const file1 = getFixture('file1.yml');
  const file2 = getFixture('file2.yml');
  const response = gendiff(file1, file2);
  const fileContent = readFixtureFile('stylish_result.txt').trim();
  expect(response.trim()).toEqual(fileContent);
});

test('test3 genDiff .yml plain formatter', () => {
  const file1 = getFixture('file1.yml');
  const file2 = getFixture('file2.yml');
  const response = gendiff(file1, file2, 'plain');
  const fileContent = readFixtureFile('plain_result.txt').trim();
  expect(response.trim()).toEqual(fileContent);
});

test('test4 genDiff json formatter', () => {
  const file1 = getFixture('file1.yml');
  const file2 = getFixture('file2.yml');
  const response = gendiff(file1, file2, 'json');
  const fileContent = readFixtureFile('json_result.txt').trim();
  expect(response.trim()).toEqual(fileContent);
});

test('test5 format error', () => {
  const file1 = getFixture('file1.yml');
  const file2 = getFixture('file2.yml');
  const response = gendiff(file1, file2, 'qwe123');
  expect(response.trim()).toEqual('error');
});
