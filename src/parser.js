import path from 'path';
import fs from 'fs';

export const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(absolutePath, 'utf-8');
};

export const parseFile = (fileContent) => JSON.parse(fileContent);
