#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const program = new Command();

const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(fileContent);
};


const compareFiles = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));

  return keys.map((key) => {
    if (!_.has(data2, key)) {
      return `- ${key}: ${data1[key]}`;
    }

    if (!_.has(data1, key)) {
      return `+ ${key}: ${data2[key]}`;
    }

    if (!_.isEqual(data1[key], data2[key])) {
      return [
          `- ${key}: ${data1[key]}`,
          `+ ${key}: ${data2[key]}`
      ].join('\n')
    }
    return ` ${key}: ${data1[key]}`;
  }).join('\n');
}

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);

    const diff = compareFiles(data1, data2);
    console.log(diff);
  });

program.parse(process.argv);
