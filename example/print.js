var LineUp = require('../index');
var lineup = new LineUp();

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
lineup.print.ol(daily_routine);
