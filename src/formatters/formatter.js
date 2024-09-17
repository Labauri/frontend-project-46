import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const formatters = {
  plain,
  stylish,
  json,
};

export default (diffTree, formatName) => {
  const format = formatters[formatName];
  if (!format) {
    throw new Error(`Unknown format: ${formatName}`);
  }
  return format(diffTree);
};
