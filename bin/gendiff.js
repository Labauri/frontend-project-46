#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import process from 'process';
import gendiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve('__fixtures__', filepath1);
    const absolutePath2 = path.resolve('__fixtures__', filepath2);

    const diff = gendiff(absolutePath1, absolutePath2);
    console.log(diff);
  });

program.parse(process.argv);
