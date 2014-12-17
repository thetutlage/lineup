var LineUp = require('../index');
var colors = require('colors');
var lineup = new LineUp();
var sticker_options = {
  align:'center',
  color: 'yellow'
}
var string = 'Hello world';
var fancy_string = colors.green(string);
lineup.sticker.note(fancy_string,string);
lineup.sticker.show(sticker_options);
