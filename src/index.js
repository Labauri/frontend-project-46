import _ from 'lodash';
import parse from './parser.js';

const gendiff = (filepath1, filepath2) => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);

  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const result = keys.map((key) => {
    if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data1[key]}`;
  });

  return `{\n${result.join('\n')}\n}`;
};

export default gendiff;

