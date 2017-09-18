var fs = require('fs');
function pwd ()   {
    process.stdout.write(process.argv[1]);
    process.stdout.write('\nprompt: ');
}
function date ()    {
    process.stdout.write(Date());
    process.stdout.write('\nprompt: ');    
}
function ls ()    {
    fs.readdir('.', function (err, files)   {
        if (err) {process.stdout.write('Error');}
        files.forEach(function(file)    {
            process.stdout.write(file.toString() + '\n');
        })
        process.stdout.write('prompt: ');
    })
}
function echo(str)  {
    process.stdout.write(str);
    process.stdout.write('\nprompt: ');
}

module.exports = {pwd, ls, date, echo};
