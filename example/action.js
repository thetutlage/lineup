var LineUp = require('../index');
var lineup = new LineUp();

lineup.action.success('create','Created file at /lib/action.js' + ' ' +lineup.icon('success'));
lineup.action.error('failed','There was an error creating file at /lib/action.js');
lineup.action.warn('failed','All files at /lib will be overwritten');
lineup.action.info('create','/lib has 777 rights ');