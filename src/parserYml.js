import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

export const getFixturePath = (filename) => path.resolve('__fixtures__', filename);
export const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

export const parseFile = (fileContent, extname) => {
  switch (extname) {
    case '.json':
      return JSON.parse(fileContent);
    case '.yml':
    case '.yaml':
      return yaml.load(fileContent);
    default:
      throw new Error(`Unsupported file type: ${extname}`);
  }
};
