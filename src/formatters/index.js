import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatters = { stylish, plain, json };
export default (data, name) => {
  const format = formatters[name];
  if (!format) {
    throw new Error(`Unknow formatter name(${name})!`);
  }

  return format(data);
};