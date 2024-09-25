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
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const absolutePath1 = path.resolve(filepath1);
    const absolutePath2 = path.resolve(filepath2);

    const diff = gendiff(absolutePath1, absolutePath2, options.format);
    console.log(diff);
  });

program.parse(process.argv);
