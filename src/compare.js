const _ = require('lodash');

const compareFiles = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));

  return keys.map((key) => {
    if (!_.has(data2, key)) {
      return `- ${key}: ${data1[key]}`;
    }

    if (!_.has(data1, key)) {
      return `+ ${key}: ${data2[key]}`;
    }

    if (!_.isEqual(data1[key], data2[key])) {
      return [
          `- ${key}: ${data1[key]}`,
          `+ ${key}: ${data2[key]}`
      ].join('\n');
    }
    return ` ${key}: ${data1[key]}`;
  }).join('\n');
};

module.exports = compareFiles;
