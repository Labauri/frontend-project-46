import path from 'path';
import fs from 'fs';

export const getFixturePath = (filename) => path.resolve('__fixtures__', filename);
export const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
export const parseFile = (fileContent) => JSON.parse(fileContent);
