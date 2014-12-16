var colors = require('colors');

var main = {
  info: colors.cyan('ℹ'),
  success: colors.green('✔'),
  warning: colors.yellow('⚠'),
  error: colors.red('✖')
};

var win = {
  info: colors.cyan('i'),
  success: colors.green('√'),
  warning: colors.yellow('‼'),
  error: colors.red('×')
};

module.exports = process.platform === 'win32' ? win : main;
