var fs = require('fs');
function pwd (str)   {
    process.stdout.write(process.argv[1]);
    process.stdout.write('\nprompt: ');
}
function date (str)    {
    process.stdout.write(Date());
    process.stdout.write('\nprompt: ');
}
function ls (str)    {
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

function cat(str) {
  fs.readFile(str, function read(err, data) {
    if(err) {
      throw "error";
    } else {
      process.stdout.write(data);
    }
    process.stdout.write('\nprompt: ');
  });

}

function head(str) {
  fs.readFile(str, function read(err, data) {
    if(err) {
      throw "error";
    } else {
      var lines = data.toString().split("\n");
      for(var i = 0; i < 5; i++) {
        process.stdout.write(lines[i] + "\n");
      }
    }
    process.stdout.write('\nprompt: ');
  });

}

function tail(str) {
  fs.readFile(str, function read(err, data) {
    if(err) {
      throw "error";
    } else {
      var lines = data.toString().split("\n");
      for(var i = lines.length - 5; i < lines.length; i++) {
        process.stdout.write(lines[i] + "\n");
      }
    }
    process.stdout.write('\nprompt: ');
  });

}

module.exports = {pwd, ls, date, echo, cat, head, tail};
