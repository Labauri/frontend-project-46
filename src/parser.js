import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parse = (filepath) => {
  const ext = path.extname(filepath);
  const data = fs.readFileSync(filepath, 'utf-8');

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

export default parse;
