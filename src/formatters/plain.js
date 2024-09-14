import _ from 'lodash';

const formatValue = (value) => {
  if (_.isObject(value) && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (diffTree) => {
  const iter = (tree, parent) => tree
    .filter(({ type }) => type !== 'unchanged')
    .map((node) => {
      const property = parent ? `${parent}.${node.key}` : node.key;
      switch (node.type) {
        case 'added':
          return `Property '${property}' was added with value: ${formatValue(node.value)}`;
        case 'removed':
          return `Property '${property}' was removed`;
        case 'updated':
          return `Property '${property}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;
        case 'nested':
          return iter(node.children, property);
        default:
          throw new Error(`Unknown type: '${node.type}'`);
      }
    })
    .join('\n');

  return iter(diffTree, '');
};

export default plain;
