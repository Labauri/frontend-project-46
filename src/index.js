import parse from './parser.js';
import buildDiff from './diffBuilder.js';
import format from './formatters/formatter.js';

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parse(filepath1);
  const data2 = parse(filepath2);
  const diff = buildDiff(data1, data2);

  return format(diff, formatName);
};

export default gendiff;

