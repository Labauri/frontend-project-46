#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const program = new Command();

const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(fileContent);
};

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);

    console.log('File 1 data:', data1);
    console.log('File 2 data:', data2);
  });

program.parse(process.argv);
