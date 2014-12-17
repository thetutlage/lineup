var Lineup = require('../index');
var colors = require('colors');


var logger_options = {
  'identifier': 'gulp',
  'showDateTime': true,
  'filePath': __filename,
  'showIcons': true,
  'dateTimeFormat': 'HH:MM'
}
var trace = {
  "#CODE":"190"
}

var lineup = new Lineup(logger_options);
lineup.log.success('Downloaded successfully');
lineup.log.warn('Lineup is too sexy to handle');
lineup.log.info('I was informing you instead of warning you');
lineup.log.error('Grrrrrr , something went wrong');

lineup.log.error('Errors are good for human beings, we need error trace',{trace:trace});

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

lineup.highlight.start('ROUTINE');
lineup.print.ol(daily_routine);
lineup.highlight.end();

var warn_string = "I can warn you using some pretty colors";

lineup.sticker.note("I am a sticker");
lineup.sticker.note(colors.yellow(warn_string),warn_string);
lineup.sticker.note('What about a yo man like update notification, SEE NEXT');
lineup.sticker.show({
  align:'left',
  color: 'green'
});

var label = 'Update available: ';
var version = '1.2.0 ';
var current_version = '(current: 1.0.0)'
var pre_label = 'Run ';
var command = 'npm update -g yo'
var post_label = ' to update';

lineup.sticker.note(label+colors.green(version)+colors.dim(current_version),label+version+current_version);
lineup.sticker.note(pre_label+colors.cyan(command)+post_label,pre_label+command+post_label);
lineup.sticker.show({
  align:'left',
  color: 'yellow'
});

console.log("Let's do some hard work");

lineup.progress.start('hard working .....');
setTimeout(function(){
  lineup.progress.stop();
},5000);
