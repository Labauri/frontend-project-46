const path = require('path');
const fs = require('fs');

const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return fs.readFileSync(absolutePath, 'utf-8');
};

const parseFile = (fileContent) => JSON.parse(fileContent);

module.exports = { readFile, parseFile };
