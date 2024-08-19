#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information');

program.on('--help', () => {
  console.log();
  console.log('Usage: gendiff [options] <filepath1> <filepath2>');
  console.log();
  console.log('Compares two configuration files and shows a difference.');
  console.log();
  console.log('Options:');
  console.log('  -V, --version        output the version number');
  console.log('  -f, --format [type]  output format');
  console.log('  -h, --help           output usage information');
  console.log();
});

program.parse(process.argv);
