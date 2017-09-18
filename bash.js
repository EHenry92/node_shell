var command = require('./command.js')
process.stdout.write('prompt: ');

process.stdin.on('data', function (data) {
    var cmd = data.toString().trim().split(' ');
    var rest = cmd.slice(1).join(' ');

    if (cmd[0] === 'pwd')  {command.pwd();}
    else if (cmd[0] === 'ls')   {command.ls();}
    else if (cmd[0] === 'date')    {command.date();}
    else if (cmd[0] === 'echo')    {command.echo(rest);}
    else if (cmd[0] === 'cat') {command.cat(rest);}
    else if (cmd[0] === 'head') {command.head(rest);}
    else if (cmd[0] === 'tail') {command.tail(rest);}
    else if (cmd[0] === 'sort') {command.sortIt(rest);}
    else if (cmd[0] === 'wc') {command.wc(rest);}
    else if (cmd[0] === 'uniq') {command.uniq(rest);}
    else if (cmd[0] === 'curl') {command.curl(rest);}
    
    
    
});
