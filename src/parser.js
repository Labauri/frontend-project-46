import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const getParsedFile = (data, ext) => {
  switch (ext) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
    case '.yaml':
      return yaml.load(data);
    default:
      throw new Error(`Unsupported file format: ${ext}`);
  }
};

const parse = (filepath) => {
  const ext = path.extname(filepath);
  const data = readFile(filepath);
  return getParsedFile(data, ext);
};

export default parse;
