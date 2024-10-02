const stringify = (value) => {
  if (value === null) return 'null';
  if (typeof value === 'object') return '[complex value]';
  return `'${value}'`;
};

const plain = (diff) => {
  const iter = (node, path) => {
    return node.flatMap((item) => {
      const currentPath = [...path, item.key];
      if (item.type === 'nested') {
        return iter(item.children, currentPath);
      }
      if (item.type === 'added') {
        return `Property '${currentPath.join('.')}' was added with value: ${stringify(item.value)}`;
      }
      if (item.type === 'removed') {
        return `Property '${currentPath.join('.')}' was removed`;
      }
      if (item.type === 'updated') {
        return `Property '${currentPath.join('.')}' was updated. From ${stringify(item.oldValue)} to ${stringify(item.value)}`;
      }
      return [];
    }).join('\n');
  };
  return iter(diff, []).trim();
};

export default plain;
