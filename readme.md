!["Screen Shot"](https://raw.githubusercontent.com/thetutlage/lineup/master/screenshot.png)

Take cares of all tedious tasks you have to do while writing cli app/tools.

Table of Contents

* Getting Started
* Objects List
* API
* Examples

## Getting Started

### Install

```
npm install lineup
```

### Initiating

```javascript
var LineUp = require('lineup');
var lineup = new LineUp()

/*
  ----------------------------
        OR WITH OPTIONS
  ---------------------------
*/

logger_options = {
  'identifier': 'npm', // just for example
  'showDateTime': true,
  'filePath': __filename,
  'showIcons': true,
  'dateTimeFormat': 'HH:MM'
}

var lineup = new LineUp(logger_options)

```

* **identifier** get's prepended with every log command you run [npm] "your log"

* **showDateTime** if true will concatenate identifier

* **filePath** if you want to show from which file log has been generated.

* **showIcons** may be you like graphics

* **dateTimeFormat** time format for above date

> Above options only work with the logger object

## Objects List

Above i mentioned something about logger object, now let's have a look at available objects and their methods.

* **log** to log messages to console
  * **success**: output a success message
  * **error** : output error message and exit process
  * **warn** : output warning
  * **info** : inform user


* **highlight** creates a highlighter section
  * **start** starts highlighter section
  * **end** end higlighter section


* **print** print list items using array and object ( values only )
  * **ol** prints ordered list
  * **li** prints unordered list


* **progress** creates a minimal progress ticker
  * **start** start new progress ticker
  * **stop** stop above started progress ticker and shows time elapsed.

* **sticker** creates a bordered sticker
  * **note** add new note to be shown inside sticker [can have multiple]**
  * **show** show above added sticker notes


## API

### Log ( object )

Log object will expose 4 methods to log warnings, success , info and error messages and they all accept config options.

#### Available Options

```javascript
var logger_options = {
  'identifier': 'npm', //npm is used as an example
  'showDateTime': true,
  'filePath': __filename,
  'showIcons': true,
  'dateTimeFormat': 'HH:MM'
}
```

* **identifier** get's prepended with every log command you run [npm] "your log"

* **showDateTime** if true will concatenate identifier

* **filePath** if you want to show from which file log has been generated.

* **showIcons** may be you like graphics

* **dateTimeFormat** time format for above date

You can pass above options at the time of initiating the class or with every object method.

#### Example ( at the time of initiating )

```javascript
var LineUp = require('lineup');
var logger_options = {
  'identifier': 'npm', //npm is used as an example
  'showDateTime': true,
  'filePath': __filename,
  'showIcons': true,
  'dateTimeFormat': 'HH:MM'
}
var lineup = new LineUp(logger_options)

```

#### Or ( with individual methods )

```javascript
var LineUp = require('lineup');
var options = {
  'showDateTime': false,
  'showIcons': false
}
var lineup = new LineUp()
lineup.log.success("Success message",options);

```
#### Avialable methods

```javascript
lineup.log.warn("message");
lineup.log.error("message");
lineup.log.info("message");
lineup.log.success("message");
```

### highlight

Highlighter can be used when you want to highlight some of information and exposes couple of methods

```javascript
var LineUp = require('lineup');
var lineup = new LineUp();

lineup.highlight.start('COMMANDS');
console.log("cd new_project");
console.log("myapp --help");
lineup.highlight.end();

```

Above will produce

![](http://i1117.photobucket.com/albums/k594/thetutlage/ScreenShot2014-12-17at112605am_zps132e95a2.png)

### Print

print will help you in printing ordered and un-ordered lists using array of data, only 2 level indentation is supported.

```javascript
var LineUp = require('lineup');
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
// OR
// lineup.print.li(daily_routine);

```

will give you results similar to below image

![](http://i1117.photobucket.com/albums/k594/thetutlage/ScreenShot2014-12-17at113310am_zps31c418a7.png)

### Progress

Progress is a progress ticker instead of a progress bar.

```javascript
var LineUp = require('lineup');
var lineup = new LineUp();

lineup.progress.start('hard working .....');
setTimeout(function(){
  lineup.progress.stop();
},5000);

```

Above will result in

![](http://i.gyazo.com/5d7e0e7a45e162fc3500e8ac142e6af3.gif)

### Sticker

Sticker will let you create updates like yeoman, and accept couple of options which needs to be passed
at the time of displaying sticker.

Sticker works with registering notes and then show those notes with the help of show method.

#### Simple Usage

```javascript
var LineUp = require('lineup');
var lineup = new LineUp();
var sticker_options = {
  align:'left',
  color: 'green'
}

lineup.sticker.note("I am a sticker");
lineup.sticker.show(sticker_options);

```
Above will output

![](http://i1117.photobucket.com/albums/k594/thetutlage/ScreenShot2014-12-17at114438am_zps8b3a797f.png)


#### Advanced Usage using (https://www.npmjs.com/package/colors)

** IMPORTANT **

~~Lineup uses string length to create sticker width and height , and tools like colors add ASCII characters to strings to produce desired results , resulting in bigger string length.~~

~~A string called `Hello World` used with colors will have a length greater than 30 characters where as the original length is 11 characters including the space. In order to achieve better results you are advised to
pass original string as the 2nd parameter on `note` method.~~

## Update ( 0.0.7 )

Now there is no need to pass 2nd parameter, lineup now automatically escapes ansi characters.

#### Example

```javascript
  var LineUp = require('lineup');
  var colors = require('colors');
  var lineup = new LineUp();
  var sticker_options = {
    align:'center',
    color: 'yellow'
  }
  var string = 'Hello world';
  var fancy_string = colors.green(string);
  lineup.sticker.note(fancy_string);
  lineup.sticker.show(sticker_options);  
```

![](http://i1117.photobucket.com/albums/k594/thetutlage/ScreenShot2014-12-17at115252am_zpsbeaa3120.png)

#### Options

* **align** can be center or left
* **color** will be used as the border color and should be a valid color from https://www.npmjs.com/package/colors


## Update ( 0.0.6 )

Added new objects to show actions , display icons and extend colors.

### Actions

CLI tools performs bunch of actions , which does not falls in notification or logs category, you can simply use lineup.action object to display following actions.

```javascript
var LineUp = require('../index');
var lineup = new LineUp();

lineup.action.success('create','Created file at /lib/action.js');
lineup.action.error('failed','There was an error creating file at /lib/action.js');
lineup.action.warn('failed','All files at /lib will be overwritten');
lineup.action.info('create','/lib has 777 rights ');
```

!["Screen Shot"](https://raw.githubusercontent.com/thetutlage/lineup/master/actions.png)

### Icons

Use lineup in-built icons anywhere you wish

```javascript
var LineUp = require('../index');
var lineup = new LineUp();

console.log(lineup.icon('info'));
console.log(lineup.icon('success'));
console.log(lineup.icon('warn'));
console.log(lineup.icon('error'));
```

!["Screen Shot"](https://raw.githubusercontent.com/thetutlage/lineup/master/icons.png)

### Colors

Lineup makes heavy use of [colors](https://www.npmjs.com/package/colors) , if you want to use colors, instead of downloading it as dependency, you can simply extend lineup colors object.

```javascript
var LineUp = require('../index');
var lineup = new LineUp();

console.log(lineup.colors.green('this is success'));

```

Complete [colors](https://www.npmjs.com/package/colors) api is available as lineup.colors

### See /examples for list of all example
