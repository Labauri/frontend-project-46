import path from 'path';
import * as fs from 'fs';
import parser from './parser.js';
import doFormatting from './formatters/index.js';
import ast from './ast.js';

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);
const extractFormat = (filePath) => path.extname(filePath).slice(1);
const getData = (filePath) => parser(fs.readFileSync(filePath, 'utf-8'), extractFormat(filePath));

const genDiff = (filePath1, filePath2, formatName = 'stylish') => {
  const fullPath1 = getFullPath(filePath1);
  const fullPath2 = getFullPath(filePath2);
  const data1 = getData(fullPath1);
  const data2 = getData(fullPath2);
  const buildAst = ast(data1, data2);
  const formatting = doFormatting(buildAst, formatName);
  return formatting;
};
export default genDiff;
