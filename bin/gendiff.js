#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import process from 'process';
import { readFile, parseFile } from '../src/parser.js';
import compareFiles from '../src/compare.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(filepath1);
    const absolutePath2 = path.resolve(filepath2);

    const fileContent1 = readFile(absolutePath1);
    const fileContent2 = readFile(absolutePath2);

    const data1 = parseFile(fileContent1);
    const data2 = parseFile(fileContent2);

    const diff = compareFiles(data1, data2);
    console.log(diff);
  });

program.parse(process.argv);
