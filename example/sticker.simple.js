var LineUp = require('../index');
var lineup = new LineUp();
var sticker_options = {
  align:'left',
  color: 'green'
}

lineup.sticker.note("I am a sticker");
lineup.sticker.show(sticker_options);
