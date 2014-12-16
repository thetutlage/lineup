var Logs = require('../index');
var colors = require('colors');


options = {
  'identifier': 'ngCli',
  'showDateTime': true,
  'filePath': __filename,
  'showIcons': true,
  'dateTimeFormat': 'HH:MM'
}
var trace = {
  "#CODE":"190"
}

var log = new Logs(options);
log.log.success('Downloaded successfully');
log.log.warn('Lineup is too sexy to handle');
log.log.info('I was informing you instead of warning you');
log.log.error('Grrrrrr , something went wrong');

log.log.error('Errors are good for human beings, we need error trace',{trace:trace});

var daily_routine = [
  'Wake up early in the morning',
  'Have breakfast',
  'Go to office via',
  ['Car','or bicycle'],
  'Write some code',
  'Have some coffee',
  'Return back to home',
  'If dinner',
  ['brush teeth before','and after'],
  'Sleep and snoor'
]

log.highlight.start('ROUTINE');
log.print.ol(daily_routine);
log.highlight.end();

var warn_string = "I can warn you using some pretty colors";

log.sticker.note("I am a sticker");
log.sticker.note(colors.yellow(warn_string),warn_string);
log.sticker.note('What about a yo man like update notification, SEE NEXT');
log.sticker.show({
  align:'left',
  color: 'green'
});

var label = 'Update available: ';
var version = '1.2.0 ';
var current_version = '(current: 1.0.0)'
var pre_label = 'Run ';
var command = 'npm update -g yo'
var post_label = ' to update';

log.sticker.note(label+colors.green(version)+colors.dim(current_version),label+version+current_version);
log.sticker.note(pre_label+colors.cyan(command)+post_label,pre_label+command+post_label);
log.sticker.show({
  align:'left',
  color: 'yellow'
});

console.log("Let's do some hard work");

log.progress.start('hard working .....');
setTimeout(function(){
  log.progress.stop();
},5000);
