var command = require('./command.js')
process.stdout.write('prompt: ');

process.stdin.on('data', function (data) {
    var cmd = data.toString().trim().split(' ');
    var rest = cmd.slice(1).join(' ');

    if (cmd[0] === 'pwd')  {command.pwd(rest, done);}
    else if (cmd[0] === 'ls')   {command.ls(rest, done);}
    else if (cmd[0] === 'date')    {command.date(rest, done);}
    else if (cmd[0] === 'echo')    {command.echo(rest, done);}
    else if (cmd[0] === 'cat') {command.cat(rest, done);}
    else if (cmd[0] === 'head') {command.head(rest, done);}
    else if (cmd[0] === 'tail') {command.tail(rest, done);}
    else if (cmd[0] === 'sort') {command.sortIt(rest, done);}
    else if (cmd[0] === 'wc') {command.wc(rest, done);}
    else if (cmd[0] === 'uniq') {command.uniq(rest, done);}
    else if (cmd[0] === 'curl') {command.curl(rest, done);}
});


var done = function(output) {
  process.stdout.write(output + "\n");
  process.stdout.write('prompt: ');
}
