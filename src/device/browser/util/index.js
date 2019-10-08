import devices from '../../devices';

const regex = {
  chrome: /chrome\/(\d+)\.(\d+)\.(\d+)\.?(\d+)?/i,
  crios: /crios\/(\d+)\.(\d+)\.(\d+)\.?(\d+)?/i,
  edgea: /edga\/(\d+)\.(\d+)\.(\d+)\.?(\d+)?/i,
  edge: /edge\/(\d+)\.(\d+)\.?(\d+)?/i,
  edgios: /edgios\/(\d+)\.(\d+)\.?(\d+)?/i,
  firefox: /firefox\/(\d+)\.?(\d+)?/i,
  fxios: /fxios\/(\d+)\.?(\d+)?/i,
  safari: /version\/(\d+)\.(\d+)\.?(\d+)?/i,
};

export const getNumbers = (app, regex) => app.match(regex);

export const isArray = list => Array.isArray(list);

export const getNumbersWithApp = browser => {
  const { app } = devices;
  const numbers = getNumbers(app, regex[browser.toLowerCase()]);
  return isArray(numbers) ? numbers : null;
};

export const buildNum = list => list.join('.');

export const getVersions = list =>
  list.map(num => parseInt(num, 10)).filter(int => !Number.isNaN(int));
