import plain from './plain.js';
import stylish from './stylish.js';

const formatters = {
  plain,
  stylish,
};

export default (diffTree, formatName) => {
  const format = formatters[formatName];
  if (!format) {
    throw new Error(`Unknown format: ${formatName}`);
  }
  return format(diffTree);
};
