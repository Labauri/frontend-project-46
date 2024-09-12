import _ from 'lodash';
import parse from './parser.js';
import stylish from './formatters/stylish.js';

const buildDiff = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  return keys.map((key) => {
    if (!_.has(data2, key)) {
      return { key, type: 'removed', value: data1[key] };
    }
    if (!_.has(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { key, type: 'nested', children: buildDiff(value1, value2) };
    }
    if (value1 !== value2) {
      return { key, type: 'updated', value1, value2 };
    }
    return { key, type: 'unchanged', value: value1 };
  });
};

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);
  const diff = buildDiff(data1, data2);

  if (format === 'stylish') {
    return stylish(diff);
  }

  throw new Error(`Unknown format: ${format}`);
};

export default gendiff;

