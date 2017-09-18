var command = require('./command.js')
process.stdout.write('prompt: ');
var cmd;

process.stdin.on('data', function (data) {
  cmds = data.toString().trim().split(/\s*\|\s*/g);
  let stdin = "";
  for(var i=0;i<cmds.length; i++) {
    var comm = cmds.shift();
    i--;
    cmd = comm.substr(0, comm.indexOf(' '));
    rest = comm.substr(comm.indexOf(" ") + 1);
    if (cmd === 'pwd')  {command.pwd(stdin, rest, done);}
    else if (cmd === 'ls')   {command.ls(stdin, rest, done);}
    else if (cmd === 'date')    {command.date(stdin, rest, done);}
    else if (cmd === 'echo')    {command.echo(stdin, rest, done);}
    else if (cmd === 'cat') {command.cat(stdin, rest, done);}
    else if (cmd === 'head') {command.head(stdin, rest, done);}
    else if (cmd === 'tail') {command.tail(stdin, rest, done);}
    else if (cmd === 'sort') {command.sortIt(stdin, rest, done);}
    else if (cmd === 'wc') {command.wc(stdin, rest, done);}
    else if (cmd === 'uniq') {command.uniq(stdin, rest, done);}
    else if (cmd === 'curl') {command.curl(stdin, rest, done);}
  }

});

var done = function(output) {
  if(cmds.length > 0) {
    console.log("on to the next command");
    stdin = output.toString();
  } else {
    console.log("printing it");
    process.stdout.write(output);
    process.stdout.write("\n" + "prompt: ");
  }

  
}



