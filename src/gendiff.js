import { resolve, extname } from 'path';
import { readFileSync } from 'fs';
import parse from './parsers.js';
import makeDiff2 from './finddiff.js';
import stylish from './stylish.js';

const resolveFilepath = (filepath) => resolve(process.cwd(), filepath);
const getFormatByFilepath = (filepath) => extname(filepath).slice(1);

const formatters = { stylish };
const getFormatter = (name) => {
  const formatter = formatters[name];
  if (!formatter) {
    throw new Error(`Unknow formatter ${name}! `);
  }

  return formatter;
};

const getObjectFromFile = (filepath) => {
  const resolvedFilepath = resolveFilepath(filepath);
  const format = getFormatByFilepath(resolvedFilepath);
  const data = readFileSync(resolvedFilepath);

  return parse(data, format);
};

export default (filepath1, filepath2, formatName = 'stylish') => {
  const format = getFormatter(formatName);
  const object1 = getObjectFromFile(filepath1);
  const object2 = getObjectFromFile(filepath2);

  const diff = makeDiff2(object1, object2);
  return format(diff);
};
