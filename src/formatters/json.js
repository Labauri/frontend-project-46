const json = (diffTree) => {
  const result = diffTree.reduce((acc, item) => {
    if (item.type === 'nested') {
      acc[item.key] = json(item.children);
    } else if (item.type === 'added' || item.type === 'removed' || item.type === 'updated') {
      acc[item.key] = item.value;
    }
    return acc;
  }, {});
  return JSON.stringify(result, null, 2);
};

export default json;
