var fs = require('fs');
var request = require('request');
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
    if (err) {
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
function sortIt(str) {
  fs.readFile(str, function read(err, data)  {
    if (err) {
      throw 'error';
    } else {
      var lines = data.toString().split('\n');
      var sorted = lines.sort();
      process.stdout.write(sorted.join('\n'));
    }
    process.stdout.write('\nprompt: ');    
  })
  
}
function wc (str)  {
  fs.readFile(str, function read(err, data)  {
    if (err) {
      throw 'error';
    } else {
      var lines = data.toString().split('\n');
      process.stdout.write(lines.length.toString());
    }
    process.stdout.write('\nprompt: ');    
  }) 
}
function uniq(str)  {
  fs.readFile(str, function read(err, data)  {
    if (err) {
      throw 'error';
    } else {
      var lines = data.toString().split('\n');
      var sorted = lines.sort();

      for (let i = 0; i<sorted.length;i++) {
        if (sorted[i] === sorted[i+1]) {
          sorted.splice(i,1);
          i--;
        }
      }
      process.stdout.write(sorted.join('\n'));
    }
    process.stdout.write('\nprompt: ');    
  })
}
function curl(str)  {
  str = "http://" + str;
  request(str, function (error, response, body) {
    if(error) {throw 'error'}
    process.stdout.write(body);
    process.stdout.write('\nprompt: ');      
    
  });
}
module.exports = {pwd, ls, date, echo, cat, head, tail, sortIt,wc, uniq, curl};
