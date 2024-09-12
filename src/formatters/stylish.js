import _ from 'lodash';

const getIndent = (depth) => ' '.repeat(depth * 4 - 2);

const stringify = (value, depth) => {
  if(!_.isPlainObject(value)) {
    return value;
  }

const entries = Object.entries(value)
  .map(([key, val]) => `${getIndent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`);
  return `{\n${entries.join('\n')}\n${getIndent(depth)}  }`;
};

const stylish = (diff, depth = 1) => {
  const result = diff.map((node) => {
    const {
      type, key, value, value1, value2, children,
    } = node;

    switch (type) {
      case 'added':
        return `${getIndent(depth)}+ ${key}: ${stringify(value, depth)}`;
      case 'removed':
        return `${getIndent(depth)}- ${key}: ${stringify(value, depth)}`;
      case 'unchanged':
        return `${getIndent(depth)}  ${key}: ${stringify(value, depth)}`;
      case 'updated':
        return `${getIndent(depth)}- ${key}: ${stringify(value1, depth)}\n${getIndent(depth)}+ ${key}: ${stringify(value2, depth)}`;
      case 'nested':
        return `${getIndent(depth)}  ${key}: {\n${stylish(children, depth + 1)}\n${getIndent(depth)}  }`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return result.join('\n');
};

export default stylish;
