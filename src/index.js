import parse from './parser.js';
import buildDiff from './diffBuilder.js';
import json from './formatters/json.js';
import plain from './formatters/plain.js';
import stylish from './formatters/stylish.js';

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);
  const diff = buildDiff(data1, data2);

  switch (format) {
    case 'plain':
      return plain(diff);
    case 'json':
      return json(diff);
    default:
      return stylish(diff);
  }
};

export default gendiff;

