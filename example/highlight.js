var LineUp = require('../index');
var lineup = new LineUp();

lineup.highlight.start('COMMANDS');
console.log("cd new_project");
console.log("myapp --help");
lineup.highlight.end();
