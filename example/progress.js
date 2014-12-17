var LineUp = require('../index');
var lineup = new LineUp();

lineup.progress.start('hard working .....');
setTimeout(function(){
  lineup.progress.stop();
},5000);
