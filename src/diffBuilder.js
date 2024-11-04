import _ from 'lodash';

const buildDiff = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2));
  return keys.reduce((acc, key) => {
    if (!_.has(obj1, key)) {
      acc.push({ key, status: 'added', value: obj2[key] });
    } else if (!_.has(obj2, key)) {
      acc.push({ key, status: 'removed', value: obj1[key] });
    } else if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      acc.push({ key, status: 'nested', children: buildDiff(obj1[key], obj2[key]) });
    } else if (!_.isEqual(obj1[key], obj2[key])) {
      acc.push({ key, status: 'updated', oldValue: obj1[key], newValue: obj2[key] });
    } else {
      acc.push({ key, status: 'unchanged', value: obj1[key] });
    }
    return acc;
  }, []);
};

export default buildDiff;
